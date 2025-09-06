'use client'

import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'

// Define the configuration interface
interface LampConfig {
  x: number
  y: number
  radius: number
}

interface MonitorConfig {
  x: number
  y: number
  w: number
  h: number
}

interface LEDConfig {
  x: number
  y: number
}

interface DeskConfig {
  lampOn: boolean
  lampUV: LampConfig
  monitors: MonitorConfig[]
  leds: LEDConfig[]
  loopSeconds: number
}

const CONFIG: DeskConfig = {
  lampOn: true,
  lampUV: { x: 0.45, y: 0.12, radius: 0.30 },
  monitors: [
    { x: 0.30, y: 0.30, w: 0.17, h: 0.33 }, // main monitor
  ],
  leds: [
    { x: 0.39, y: 0.68 },
    { x: 0.46, y: 0.82 },
    { x: 0.63, y: 0.80 },
  ],
  loopSeconds: 6.0
}

const AnimatedPixelDesk = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const sceneRef = useRef<THREE.Scene | null>(null)
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null)
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null)
  const meshRef = useRef<THREE.Mesh | null>(null)
  const clockRef = useRef<THREE.Clock | null>(null)
  const animationRef = useRef<number | null>(null)
  const configRef = useRef<DeskConfig>(CONFIG)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    if (!containerRef.current) return

    // Initialize Three.js scene
    const container = containerRef.current
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setPixelRatio(Math.min(2, window.devicePixelRatio || 1))
    renderer.setClearColor(0x000000, 0)
    
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(120, 16/9, 0.1, 150)
    camera.position.set(0, 0, 8.0)

    // Create plane geometry for the pixel art - larger to show full image
    const geometry = new THREE.PlaneGeometry(50, 28.125, 1, 1)

    // Define shader uniforms
    const uniforms = {
      u_tex: { value: null as THREE.Texture | null },
      u_time: { value: 0 },
      u_mouse: { value: new THREE.Vector2(0.5, 0.5) },
      u_lampOn: { value: configRef.current.lampOn ? 1 : 0 },
      u_lamp: { value: new THREE.Vector3(configRef.current.lampUV.x, configRef.current.lampUV.y, configRef.current.lampUV.radius) },
      u_leds: { value: configRef.current.leds.reduce((arr: number[], p) => arr.concat([p.x, p.y]), [] as number[]) },
      u_ledCount: { value: configRef.current.leds.length },
      u_monRects: { value: configRef.current.monitors.flatMap(m => [m.x, m.y, m.w, m.h] as number[]) },
      u_monCount: { value: configRef.current.monitors.length },
      u_resolution: { value: new THREE.Vector2(1600, 900) },
      u_loop: { value: configRef.current.loopSeconds }
    }

    // Vertex shader
    const vertexShader = /* glsl */`
      varying vec2 vUv; 
      void main(){
        vUv = uv; 
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `

    // Fragment shader
    const fragmentShader = /* glsl */`
      precision highp float; 
      uniform sampler2D u_tex; 
      uniform float u_time; 
      uniform vec2 u_resolution; 
      uniform vec2 u_mouse; 
      uniform float u_lampOn; 
      uniform vec3 u_lamp;
      uniform float u_loop; 
      uniform float u_ledCount; 
      uniform float u_monCount; 
      uniform float u_leds[32];
      uniform float u_monRects[40];
      varying vec2 vUv; 

      float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7))) * 43758.5453); }
      float noise(vec2 p){
        vec2 i=floor(p), f=fract(p);
        float a=hash(i), b=hash(i+vec2(1,0)), c=hash(i+vec2(0,1)), d=hash(i+vec2(1,1));
        vec2 u=f*f*(3.0-2.0*f);
        return mix(mix(a,b,u.x), mix(c,d,u.x), u.y);
      }

      bool inRect(vec2 uv, vec4 r){ return uv.x>r.x && uv.x<r.x+r.z && uv.y>r.y && uv.y<r.y+r.w; }

      void main(){
        float t = mod(u_time, u_loop)/u_loop; 
        vec2 uv = vUv;
        vec3 base = texture2D(u_tex, uv).rgb;

        // Breathing vignette
        float breathe = 0.5 + 0.5*sin(6.28318*t);
        float vig = smoothstep(1.2, 0.2, distance(uv, vec2(0.55,0.52)));
        base *= mix(1.0, 0.83, vig*(0.6+0.3*breathe));

        // CRT scanlines + flicker on monitor areas
        for(int i=0;i<10;i++){
          if(float(i) >= u_monCount) break; 
          vec4 r = vec4(u_monRects[i*4+0], u_monRects[i*4+1], u_monRects[i*4+2], u_monRects[i*4+3]);
          if(inRect(uv, r)){
            float flick = 0.85 + 0.15*sin(6.28318*(t + float(i)*0.13)) + 0.05*noise(uv*600.0 + t*300.0);
            base *= 0.9 + 0.4*flick;
            float y = uv.y * 900.0;
            float scan = step(0.5, fract(y*0.5));
            base *= 0.92 + 0.08*scan;
          }
        }

        // Lamp cone
        if(u_lampOn > 0.5){
          float d = distance(uv, u_lamp.xy);
          float cone = smoothstep(u_lamp.z, 0.0, d);
          float pulse = 0.85 + 0.15*sin(6.28318*t*1.7);
          base += vec3(1.0,0.92,0.73) * cone * 0.35 * pulse;
        }

        // LEDs blinking
        for(int i=0;i<16;i++){
          if(float(i) >= u_ledCount) break; 
          vec2 p = vec2(u_leds[i*2+0], u_leds[i*2+1]);
          float d = distance(uv,p);
          float blink = step(0.8, sin(6.28318*(t*3.0 + float(i)*0.31)));
          base += vec3(0.55,0.85,1.0) * smoothstep(0.02,0.0,d) * mix(0.15,0.9, blink);
        }

        // Dust motes
        vec2 grid = floor(uv*vec2(80.0, 45.0));
        float sparkle = step(0.995, noise(grid + t*50.0));
        base += vec3(1.0) * sparkle * 0.08;

        // Gamma lift
        base = pow(base, vec3(0.95));
        gl_FragColor = vec4(base, 1.0);
      }
    `

    // Create shader material
    const material = new THREE.ShaderMaterial({
      uniforms,
      vertexShader,
      fragmentShader,
      transparent: true
    })

    const mesh = new THREE.Mesh(geometry, material)
    scene.add(mesh)

    // Store references
    sceneRef.current = scene
    rendererRef.current = renderer
    cameraRef.current = camera
    meshRef.current = mesh
    clockRef.current = new THREE.Clock()

    // Load texture
    const textureLoader = new THREE.TextureLoader()
    textureLoader.load(
      '/pixel-desk-art.png', // You'll need to add this image to the public folder
      (texture) => {
        texture.minFilter = THREE.NearestFilter
        texture.magFilter = THREE.NearestFilter
        uniforms.u_tex.value = texture
        setIsLoaded(true)
      },
      undefined,
      (error) => {
        console.warn('Could not load pixel desk texture:', error)
        // Create a fallback gradient texture
        const canvas = document.createElement('canvas')
        canvas.width = 512
        canvas.height = 288
        const ctx = canvas.getContext('2d')!
        
        // Create a simple gradient fallback
        const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
        gradient.addColorStop(0, '#1a1a2e')
        gradient.addColorStop(0.5, '#16213e')
        gradient.addColorStop(1, '#0f3460')
        
        ctx.fillStyle = gradient
        ctx.fillRect(0, 0, canvas.width, canvas.height)
        
        const fallbackTexture = new THREE.CanvasTexture(canvas)
        fallbackTexture.minFilter = THREE.NearestFilter
        fallbackTexture.magFilter = THREE.NearestFilter
        uniforms.u_tex.value = fallbackTexture
        setIsLoaded(true)
      }
    )

    // Mouse interaction
    const target = new THREE.Vector2(0, 0)
    const handleMouseMove = (e: MouseEvent) => {
      if (!renderer.domElement) return
      const rect = renderer.domElement.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width
      const y = (e.clientY - rect.top) / rect.height
      uniforms.u_mouse.value.set(x, y)
      target.set((x - 0.5) * 0.5, (y - 0.5) * -0.5)
    }

    // Click to toggle lamp
    const handleClick = () => {
      configRef.current.lampOn = !configRef.current.lampOn
      uniforms.u_lampOn.value = configRef.current.lampOn ? 1 : 0
    }

    // Resize handler
    const handleResize = () => {
      if (!container || !renderer || !camera) return
      const width = container.clientWidth
      const height = container.clientHeight
      renderer.setSize(width, height, false)
      camera.aspect = width / height
      camera.updateProjectionMatrix()
    }

    // Animation loop
    const animate = () => {
      if (!clockRef.current || !renderer || !scene || !camera) return
      
      const t = clockRef.current.getElapsedTime()
      uniforms.u_time.value = t
      
      // Smooth camera movement
      if (cameraRef.current) {
        cameraRef.current.position.x += (target.x - cameraRef.current.position.x) * 0.08
        cameraRef.current.position.y += (target.y - cameraRef.current.position.y) * 0.08
        cameraRef.current.lookAt(target.x, target.y, 0)
      }
      
      renderer.render(scene, camera)
      animationRef.current = requestAnimationFrame(animate)
    }

    // Setup
    container.appendChild(renderer.domElement)
    renderer.domElement.addEventListener('mousemove', handleMouseMove)
    renderer.domElement.addEventListener('click', handleClick)
    window.addEventListener('resize', handleResize)
    
    // Initial resize and start animation
    handleResize()
    animate()

    // Cleanup
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
      renderer.domElement.removeEventListener('mousemove', handleMouseMove)
      renderer.domElement.removeEventListener('click', handleClick)
      window.removeEventListener('resize', handleResize)
      
      if (container && renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement)
      }
      
      renderer.dispose()
      geometry.dispose()
      material.dispose()
    }
  }, [])

  return (
    <div className="w-full mb-8 relative">
      <div 
        ref={containerRef} 
        className="w-full aspect-video rounded-xl overflow-hidden shadow-2xl bg-gray-900 border border-blue-500/30"
        style={{ maxWidth: '800px', margin: '0 auto' }}
      />
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-900 rounded-xl border border-blue-500/30">
          <div className="text-blue-300 text-center">
            <div className="animate-spin w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full mx-auto mb-2"></div>
            Loading pixel desk...
          </div>
        </div>
      )}  
    </div>
  )
}

export default AnimatedPixelDesk
