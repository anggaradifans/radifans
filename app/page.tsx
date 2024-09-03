// app/page.tsx
import dynamic from 'next/dynamic'
import Overview from './components/Overview'
import WorkExperience from './components/WorkExperience'
import Contact from './components/Contact'
import GameBackground from './components/backgrounds/GameBackground'

const ThreeJsIcon = dynamic(() => import('./components/ThreeJSIcon'), { ssr: false })

export default function Home() {
  return (
    <div className="min-h-screen bg-black relative">
      <GameBackground />
      <main className="container mx-auto px-4 py-8 relative z-10">
        {/* <ThreeJsIcon /> */}
        <Overview />
        <WorkExperience />
        <Contact />
      </main>
    </div>
  )
}