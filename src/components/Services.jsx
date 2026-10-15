import { Wind, Layers, Settings, Cog, ArrowUpDown, Zap, Box, Link2, HardHat, RefreshCw, ClipboardList } from 'lucide-react'

const products = [
  {
    icon: ArrowUpDown,
    title: 'Counterflow Cooling Towers',
    tag: 'Counterflow Cooling Tower',
    desc: 'Air flows vertically upward, counter to the downward flow of water. Compact footprint with high thermal efficiency — ideal for space-constrained industrial sites.',
  },
  {
    icon: Wind,
    title: 'Crossflow Cooling Towers',
    tag: 'Crossflow Cooling Tower',
    desc: 'Air flows horizontally across the falling water stream. Easier maintenance access and lower pumping head requirements, suited for large-volume applications.',
  },
  {
    icon: Layers,
    title: 'FRP Cooling Towers',
    tag: 'FRP Cooling Tower',
    desc: 'Fibre-reinforced plastic construction offering excellent corrosion resistance, light weight, and long service life in chemically aggressive environments.',
  },
  {
    icon: Box,
    title: 'RCC Cooling Towers',
    tag: 'RCC Cooling Tower',
    desc: 'Reinforced cement concrete towers built for permanent, large-scale industrial installations requiring structural durability and minimal long-term maintenance.',
  },
  {
    icon: Zap,
    title: 'Timber Cooling Towers',
    tag: 'Timber Cooling Tower',
    desc: 'Traditional timber-framed cooling towers for refurbishment, replacement, and heritage industrial applications where original construction must be matched.',
  },
  {
    icon: Cog,
    title: 'Industrial Gearboxes',
    tag: 'Industrial Gearbox',
    desc: 'Heavy-duty gearboxes designed for cooling tower fan drives. Supply, installation, and servicing of gearbox assemblies for all major tower configurations.',
  },
  {
    icon: Wind,
    title: 'FRP Axial Fans',
    tag: 'FRP Axial Fan',
    desc: 'Fibre-reinforced plastic axial flow fans engineered for high airflow efficiency, corrosion resistance, and low noise in industrial cooling applications.',
  },
  {
    icon: Settings,
    title: 'FRP Fan Cylinders',
    tag: 'FRP Fan Cylinder',
    desc: 'Precision-fabricated FRP fan cylinders and stacks that optimise airflow, reduce recirculation, and extend fan and motor service life.',
  },
  {
    icon: Link2,
    title: 'Drive Shafts & Couplings',
    tag: 'Drive Shaft / Coupling',
    desc: 'High-torque drive shafts and flexible couplings for cooling tower fan systems. Supply and replacement for all standard and custom configurations.',
  },
  {
    icon: HardHat,
    title: 'Erection & Commissioning',
    tag: 'Erection & Commissioning',
    desc: 'Complete site erection, mechanical assembly, and commissioning services. Our engineers manage the full installation process from foundation to first run.',
  },
  {
    icon: RefreshCw,
    title: 'Overhaul & Retrofitting',
    tag: 'Overhaul & Retrofitting',
    desc: 'Structural overhaul, fill media replacement, drift eliminator upgrades, and full retrofitting of ageing cooling towers to restore performance and extend life.',
  },
  {
    icon: ClipboardList,
    title: 'Maintenance & Spare Parts',
    tag: 'Maintenance & Spare Parts',
    desc: 'Scheduled preventive maintenance, emergency corrective maintenance, and supply of genuine spare parts and components for all cooling tower types.',
  },
]

export default function Services() {
  return (
    <section id="services" className="section-pad bg-[#f4f6f9]">
      <div className="container-xl">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-[#1e6fb5] text-sm font-bold tracking-widest uppercase mb-3">Products &amp; Services</p>
          <h2 className="text-3xl lg:text-4xl font-black text-[#0a1628] mb-4" style={{ textWrap: 'balance' }}>
            Complete Cooling Tower Solutions
          </h2>
          <p className="text-gray-600">
            From new tower supply and installation to overhaul, retrofitting, and component replacement —
            we cover the full lifecycle of industrial cooling systems.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {products.map(({ icon: Icon, title, tag, desc }) => (
            <article
              key={title}
              className="bg-white rounded-lg p-6 border border-gray-100 hover:border-[#1e6fb5]/40 hover:shadow-md transition-all duration-200 flex flex-col"
            >
              <div className="w-10 h-10 bg-[#1e6fb5]/10 rounded-lg flex items-center justify-center mb-4 shrink-0">
                <Icon size={20} className="text-[#1e6fb5]" aria-hidden="true" />
              </div>
              <h3 className="font-bold text-[#0a1628] mb-2 text-[0.95rem]">{title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed flex-1">{desc}</p>
              <a
                href={`#contact?service=${encodeURIComponent(tag)}`}
                onClick={e => {
                  e.preventDefault()
                  // Set the service dropdown via custom event, then scroll to contact
                  window.dispatchEvent(new CustomEvent('set-service', { detail: tag }))
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="mt-4 inline-flex items-center gap-1 text-[#1e6fb5] hover:text-[#2d8fd4] text-xs font-semibold uppercase tracking-wide transition-colors focus:outline-none focus-visible:underline"
                aria-label={`Enquire about ${title}`}
              >
                Enquire about this →
              </a>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-[#1e6fb5] hover:bg-[#2d8fd4] text-white font-bold px-8 py-4 rounded transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2d8fd4]"
          >
            Enquire About a Product or Service
          </a>
        </div>
      </div>
    </section>
  )
}
