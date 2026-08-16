import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { HomePage } from './pages/HomePage'
import { CaseStudyPage } from './pages/CaseStudyPage'
import { ScrollToHash } from './components/ScrollToHash'
import { Seo } from './components/Seo'

export default function App() {
  return (
    <BrowserRouter>
      <Seo />
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Navbar />
      <ScrollToHash />
      <div id="main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects/:id" element={<CaseStudyPage />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  )
}
