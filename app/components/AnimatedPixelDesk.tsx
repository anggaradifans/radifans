'use client'

import Image from 'next/image'

const AnimatedPixelDesk = () => {
  return (
    <div className="w-full mb-8 relative">
      <div 
        className="w-full aspect-video rounded-xl overflow-hidden shadow-2xl bg-gray-900 border border-blue-500/30 relative"
        style={{ maxWidth: '800px', margin: '0 auto' }}
      >
        <Image 
          src="/pixel-desk-v2.jpg"
          alt="Pixel Art Desk Workspace"
          fill
          className="object-cover"
          priority
          sizes="(max-width: 800px) 100vw, 800px"
          unoptimized
        />
      </div>
    </div>
  )
}

export default AnimatedPixelDesk
