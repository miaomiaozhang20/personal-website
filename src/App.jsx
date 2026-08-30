import { useState, useEffect } from 'react'
import Index from './pages/Index'
import GoogleReflections from './pages/GoogleReflections'
import './index.css'

// Minimal hash router: standalone pages live at "#/<slug>", everything else
// falls through to the main tabbed page (so "#about"/"#research" still work).
const PAGES = {
  '#/google-2026': GoogleReflections,
}

function App() {
  const [hash, setHash] = useState(() => window.location.hash)

  useEffect(() => {
    const onHashChange = () => setHash(window.location.hash)
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  useEffect(() => {
    if (PAGES[hash]) window.scrollTo({ top: 0 })
  }, [hash])

  const Page = PAGES[hash]

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      {Page ? <Page /> : <Index />}
    </div>
  )
}

export default App
