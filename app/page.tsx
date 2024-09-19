// app/page.tsx
import Overview from './components/Overview'
import WorkExperience from './components/WorkExperience'
import Contact from './components/Contact'
import GameBackground from './components/backgrounds/GameBackground'


export default function Home() {
  return (
    <div className="min-h-screen relative">
      <GameBackground />
      <main className="container mx-auto px-4 py-8 relative z-10">
        <Overview />
        <WorkExperience />
        <Contact />
      </main>
    </div>
  )
}