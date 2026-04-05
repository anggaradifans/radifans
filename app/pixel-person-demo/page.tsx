import AnimatedPixelPerson from '../components/AnimatedPixelPerson'

export default function PixelPersonDemo() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center p-8">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4">
            Animated Pixel Person Demo
          </h1>
          <p className="text-xl text-gray-300">
            Click the character to see the waving animation!
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-white/20">
          <div className="flex justify-center">
            <AnimatedPixelPerson />
          </div>
          
          <div className="mt-8 text-center text-gray-300">
            <h2 className="text-2xl font-semibold mb-4">Features</h2>
            <ul className="space-y-2 text-left max-w-md mx-auto">
              <li>✨ Smooth sprite-based animation</li>
              <li>🎭 Idle animation loop</li>
              <li>👋 Interactive waving on click</li>
              <li>🎨 Crisp pixel art rendering</li>
              <li>⚡ Lightweight and performant</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
