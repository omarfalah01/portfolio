import { Hero } from '../components/hero/Hero'
import { About } from '../components/about/About'
import { Expertise } from '../components/expertise/Expertise'
import { Projects } from '../components/projects/Projects'
import { Skills } from '../components/skills/Skills'
import { Experience } from '../components/experience/Experience'
import { Certifications } from '../components/certifications/Certifications'
import { Contact } from '../components/contact/Contact'

export function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Expertise />
      <Projects />
      <Skills />
      <Experience />
      <Certifications />
      <Contact />
    </>
  )
}
