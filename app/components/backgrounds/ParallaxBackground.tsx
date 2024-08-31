'use client'
import { Parallax } from 'react-scroll-parallax'
import { ParallaxProvider } from 'react-scroll-parallax'

export default function ParallaxBackground() {
  return (
    <ParallaxProvider>
      <div className="fixed inset-0 z-0">
        <Parallax translateY={[-20, 20]}>
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 opacity-50" />
        </Parallax>
        <Parallax translateY={[-40, 40]}>
          <div className="absolute inset-0 bg-gradient-to-tr from-yellow-300 to-pink-500 opacity-30" />
        </Parallax>
      </div>
    </ParallaxProvider>
  )
}