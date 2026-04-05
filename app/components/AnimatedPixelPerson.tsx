'use client'

import { useState, useEffect, useRef } from 'react'

type AnimationState = 'idle' | 'waving'

const AnimatedPixelPerson = () => {
  const [animationState, setAnimationState] = useState<AnimationState>('idle')
  const [currentFrame, setCurrentFrame] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const animationRef = useRef<NodeJS.Timeout | null>(null)

  // Sprite sheet configuration
  const FRAME_WIDTH = 256
  const FRAME_HEIGHT = 256
  const SPRITE_COLS = 6
  
  // Animation frames configuration
  const IDLE_FRAMES = [0, 1, 2, 3] // First 4 frames of top row
  const WAVING_FRAMES = [9, 10, 11] // Last 3 frames of bottom row (waving)
  const FRAME_DURATION = 200 // milliseconds per frame

  useEffect(() => {
    // Clear any existing animation
    if (animationRef.current) {
      clearInterval(animationRef.current)
    }

    // Determine which frames to use based on animation state
    const frames = animationState === 'idle' ? IDLE_FRAMES : WAVING_FRAMES
    let frameIndex = 0

    // Start animation loop
    animationRef.current = setInterval(() => {
      setCurrentFrame(frames[frameIndex])
      frameIndex = (frameIndex + 1) % frames.length

      // If waving animation completes, return to idle
      if (animationState === 'waving' && frameIndex === 0) {
        setTimeout(() => {
          setAnimationState('idle')
        }, FRAME_DURATION * frames.length)
      }
    }, FRAME_DURATION)

    return () => {
      if (animationRef.current) {
        clearInterval(animationRef.current)
      }
    }
  }, [animationState])

  const handleClick = () => {
    if (animationState === 'idle') {
      setAnimationState('waving')
    }
  }

  // Calculate background position based on current frame
  const getBackgroundPosition = () => {
    const col = currentFrame % SPRITE_COLS
    const row = Math.floor(currentFrame / SPRITE_COLS)
    const x = -(col * FRAME_WIDTH)
    const y = -(row * FRAME_HEIGHT)
    return `${x}px ${y}px`
  }

  return (
    <div className="flex flex-col items-center gap-4">
      <div
        className={`relative cursor-pointer transition-transform duration-100 ${
          isHovered ? 'scale-105' : 'scale-100'
        }`}
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          width: `${FRAME_WIDTH}px`,
          height: `${FRAME_HEIGHT}px`,
        }}
      >
        <div
          className="w-full h-full"
          style={{
            backgroundImage: 'url(/sprite-sheet.png)',
            backgroundSize: `${SPRITE_COLS * FRAME_WIDTH}px ${2 * FRAME_HEIGHT}px`,
            backgroundPosition: getBackgroundPosition(),
            backgroundRepeat: 'no-repeat',
            imageRendering: 'pixelated',
          }}
        />
      </div>
      
      {animationState === 'idle' && (
        <p className="text-sm text-gray-400 animate-pulse">
          Click me! 👆
        </p>
      )}
    </div>
  )
}

export default AnimatedPixelPerson
