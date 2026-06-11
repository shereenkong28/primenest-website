import { LangProvider } from './contexts/LangContext'
import Analytics from './components/Analytics'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustStrip from './components/TrustStrip'
import About from './components/About'
import WholesalePricing from './components/WholesalePricing'
import Compliance from './components/Compliance'
import SourceTransparency from './components/SourceTransparency'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'

export default function App() {
  return (
    <LangProvider>
      <Analytics />
      <Navbar />
      <main>
        <Hero />
        <TrustStrip />
        <WholesalePricing />
        <SourceTransparency />
        <Compliance />
        <About />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </LangProvider>
  )
}
