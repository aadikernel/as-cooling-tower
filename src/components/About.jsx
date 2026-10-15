import { CheckCircle } from 'lucide-react'

const capabilities = [
  'Design, manufacture, supply & installation of cooling towers',
  'Counterflow and crossflow configurations',
  'FRP, RCC, and timber cooling tower construction',
  'Industrial gearbox supply and servicing',
  'FRP axial fans and fan cylinder fabrication',
  'Drive shaft and coupling supply',
  'Complete erection and commissioning',
  'Overhaul, retrofitting, and refurbishment',
  'Preventive and corrective maintenance',
  'Spare parts and component replacement',
]

export default function About() {
  return (
    <section id="about" className="section-pad bg-white">
      <div className="container-xl">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-16 items-center">
          {/* Image column */}
          <div className="relative px-6 pb-6 pt-0">
            <div className="aspect-[4/3] rounded-lg overflow-hidden bg-[#0a1628] relative z-10">
              <img
                src="/images/about-cooling-tower.jpg"
                alt="A.S. Cooling Tower engineering team and cooling tower installation overview"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            {/* Accent blocks — kept inside padded wrapper so they don't overflow */}
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#1e6fb5] rounded-lg z-0" aria-hidden="true" />
            <div className="absolute top-0 left-0 w-20 h-20 border-2 border-[#1e6fb5]/30 rounded-lg z-0" aria-hidden="true" />
          </div>

          {/* Content */}
          <div>
            <p className="text-[#1e6fb5] text-sm font-bold tracking-widest uppercase mb-3">About Us</p>
            <h2
              className="text-3xl lg:text-4xl font-black text-[#0a1628] mb-6"
              style={{ textWrap: 'balance' }}
            >
              A.S. Cooling Tower — Industrial Cooling Specialists
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              A.S. Cooling Tower is a specialist engineering company focused on the design, manufacture,
              supply, installation, and maintenance of industrial cooling tower systems. We serve a wide
              range of heavy industries across India, delivering reliable thermal management solutions
              built for demanding operational environments.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Our team brings hands-on expertise across multiple cooling tower configurations — from
              FRP and RCC structures to timber-framed systems — and provides complete lifecycle support
              including erection, overhaul, retrofitting, and ongoing maintenance. We also supply
              critical components such as industrial gearboxes, FRP axial fans, fan cylinders, drive
              shafts, and couplings.
            </p>

            <ul className="grid sm:grid-cols-2 gap-2.5">
              {capabilities.map(c => (
                <li key={c} className="flex items-start gap-2 text-sm text-gray-700">
                  <CheckCircle size={15} className="text-[#1e6fb5] mt-0.5 shrink-0" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
