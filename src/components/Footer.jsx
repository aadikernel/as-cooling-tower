import { Phone, Mail, MessageCircle } from 'lucide-react'

const serviceLinks = [
  { label: 'Counterflow Cooling Towers', href: '#services' },
  { label: 'Crossflow Cooling Towers',   href: '#services' },
  { label: 'FRP Cooling Towers',         href: '#services' },
  { label: 'RCC Cooling Towers',         href: '#services' },
  { label: 'Timber Cooling Towers',      href: '#services' },
  { label: 'Industrial Gearboxes',       href: '#services' },
  { label: 'FRP Axial Fans',             href: '#services' },
  { label: 'FRP Fan Cylinders',          href: '#services' },
  { label: 'Drive Shafts & Couplings',   href: '#services' },
  { label: 'Erection & Commissioning',   href: '#services' },
  { label: 'Overhaul & Retrofitting',    href: '#services' },
  { label: 'Maintenance & Spare Parts',  href: '#services' },
]

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Products & Services', href: '#services' },
  { label: 'Industries', href: '#industries' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  return (
    <footer className="bg-[#0a1628] text-gray-400">
      <div className="container-xl py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <span className="block text-white font-black text-lg tracking-widest uppercase">A.S. COOLING</span>
              <span className="block text-[#2d8fd4] font-bold text-xs tracking-[0.3em] uppercase">TOWER</span>
            </div>
            <p className="text-sm leading-relaxed mb-5">
              Industrial cooling tower specialists — design, manufacture, supply, installation, and maintenance.
            </p>
            <a
              href="https://wa.me/919258120029"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-700 hover:bg-green-600 text-white text-sm font-semibold px-4 py-2.5 rounded transition-colors"
            >
              <MessageCircle size={15} /> WhatsApp Us
            </a>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Products & Services</h4>
            <ul className="space-y-2">
              {serviceLinks.map(l => (
                <li key={l.label}>
                  <a href={l.href} className="text-sm hover:text-white transition-colors">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Navigation</h4>
            <ul className="space-y-2">
              {navLinks.map(l => (
                <li key={l.label}>
                  <a href={l.href} className="text-sm hover:text-white transition-colors">{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <p className="text-gray-500 text-xs uppercase tracking-wide mb-0.5">Managing Director</p>
                <p className="text-white font-medium">Anuj Kumar</p>
                <a href="tel:+919286603689" className="flex items-center gap-1.5 hover:text-white transition-colors mt-0.5">
                  <Phone size={12} /> +91 92866 03689
                </a>
              </li>
              <li>
                <p className="text-gray-500 text-xs uppercase tracking-wide mb-0.5">Site Engineer</p>
                <p className="text-white font-medium">Shyam Babu</p>
                <a href="tel:+919058376491" className="flex items-center gap-1.5 hover:text-white transition-colors mt-0.5">
                  <Phone size={12} /> +91 90583 76491
                </a>
              </li>
              <li>
                <a href="mailto:ascoolingtower@gmail.com" className="flex items-center gap-1.5 hover:text-white transition-colors">
                  <Mail size={12} /> ascoolingtower@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-xl py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-600">
          <p>© {new Date().getFullYear()} A.S. Cooling Tower. All rights reserved.</p>
          <p>Industrial Cooling Tower Manufacturer &amp; Installer — India</p>
        </div>
      </div>
    </footer>
  )
}
