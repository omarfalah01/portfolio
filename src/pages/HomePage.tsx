import { lazy, Suspense } from 'react'
import { Hero } from '../components/hero/Hero'
import { About } from '../components/about/About'
import { Skills } from '../components/skills/Skills'
import { Expertise } from '../components/expertise/Expertise'
import { Projects } from '../components/projects/Projects'

const GitHubSection = lazy(() =>
  import('../components/github/GitHub').then((m) => ({ default: m.GitHubSection })),
)

export function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Expertise />
      <Projects />
      <Suspense
        fallback={
          <div className="container section" aria-hidden="true">
            <p className="section__lead">Loading GitHub…</p>
          </div>
        }
      >
        <GitHubSection />
      </Suspense>
    </>
  )
}
