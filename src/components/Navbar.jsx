import { useState, useEffect } from 'react'
import { Menu, X, MessageCircle } from 'lucide-react'

const links = [
  { label: 'Home',               href: '#home',       id: 'home' },
  { label: 'About',              href: '#about',      id: 'about' },
  { label: 'Products & Services',href: '#services',   id: 'services' },
  { label: 'Industries',         href: '#industries', id: 'industries' },
  { label: 'Projects',           href: '#projects',   id: 'projects' },
  { label: 'Contact',            href: '#contact',    id: 'contact' },
]

export default function Navbar() {
  const [open, setOpen]       = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive]   = useState('home')

  /* scroll state for header shadow */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* close mobile menu on hash change */
  useEffect(() => {
    const onHash = () => setOpen(false)
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  /* active section via IntersectionObserver */
  useEffect(() => {
    const sections = links.map(l => document.getElementById(l.id)).filter(Boolean)
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-30% 0px -60% 0px', threshold: 0 }
    )
    sections.forEach(s => observer.observe(s))
    return () => sections.forEach(s => observer.unobserve(s))
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0a1628] shadow-lg shadow-black/30' : 'bg-[#0a1628]/95 backdrop-blur-sm'
      }`}
    >
      <div className="container-xl flex items-center justify-between h-16">
        {/* Logo */}
        <a
          href="#home"
          className="flex flex-col leading-none shrink-0"
          aria-label="A.S. Cooling Tower — Home"
        >
          <span className="text-white font-black text-base sm:text-lg tracking-widest uppercase">A.S. COOLING</span>
          <span className="text-[#2d8fd4] font-bold text-[10px] tracking-[0.3em] uppercase">TOWER</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main navigation">
          {links.map(l => (
            <a
              key={l.id}
              href={l.href}
              aria-current={active === l.id ? 'page' : undefined}
              className={`text-sm font-medium px-3 py-1.5 rounded transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2d8fd4] ${
                active === l.id
                  ? 'text-white bg-white/10'
                  : 'text-gray-300 hover:text-white hover:bg-white/5'
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden lg:flex items-center gap-3 shrink-0">
          <a
            href="https://wa.me/919258120029"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 bg-green-600 hover:bg-green-500 text-white text-sm font-semibold px-4 py-2 rounded transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-400"
          >
            <MessageCircle size={14} aria-hidden="true" />
            WhatsApp
          </a>
          <a
            href="#contact"
            className="bg-[#1e6fb5] hover:bg-[#2d8fd4] text-white text-sm font-semibold px-4 py-2 rounded transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2d8fd4]"
          >
            Enquire Now
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-white p-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2d8fd4] rounded"
          onClick={() => setOpen(o => !o)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        id="mobile-menu"
        className={`lg:hidden bg-[#0a1628] border-t border-white/10 overflow-hidden transition-all duration-300 ease-in-out ${
          open ? 'max-h-[32rem] opacity-100' : 'max-h-0 opacity-0'
        }`}
        aria-hidden={!open}
      >
        <div className="px-5 pb-6 pt-3">
          <nav className="flex flex-col gap-0.5" aria-label="Mobile navigation">
            {links.map(l => (
              <a
                key={l.id}
                href={l.href}
                onClick={() => setOpen(false)}
                aria-current={active === l.id ? 'page' : undefined}
                className={`text-base font-medium px-3 py-2.5 rounded transition-colors duration-200 ${
                  active === l.id
                    ? 'text-white bg-white/10'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {l.label}
              </a>
            ))}
          </nav>
          <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-white/10">
            <a
              href="https://wa.me/919258120029"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 text-white font-semibold py-3 rounded transition-colors"
            >
              <MessageCircle size={16} aria-hidden="true" /> WhatsApp Us
            </a>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center bg-[#1e6fb5] hover:bg-[#2d8fd4] text-white font-semibold py-3 rounded transition-colors"
            >
              Enquire Now
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
