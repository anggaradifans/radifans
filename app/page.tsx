// app/page.tsx
import Overview from './components/Overview'
import WorkExperience from './components/WorkExperience'
import Contact from './components/Contact'
import AnimatedBackGround from './components/backgrounds/Animated'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 relative">
      <AnimatedBackGround />
      <main className="container mx-auto px-4 py-8">
        <Overview />
        <WorkExperience />
        <Contact />
      </main>
    </div>
  )
}