// app/page.tsx
import AnimatedPixelDesk from './components/AnimatedPixelDesk'
import Overview from './components/Overview'
import WorkExperience from './components/WorkExperience'
import Skills from './components/Skills'
import Projects from './components/Projects'

export default function Home() {
  return (
    <div className="min-h-screen relative">
      <main className="container mx-auto px-4 py-8 relative z-10">
        <section id="animated-desk" className="mb-12">
          <AnimatedPixelDesk />
        </section>
        <section id="overview">
          <Overview />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="experience">
          <WorkExperience />
        </section>
      </main>
    </div>
  )
}
