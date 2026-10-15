import { useState } from 'react'
import { ImageOff } from 'lucide-react'

const industries = [
  {
    name: 'Power Generation',
    desc: 'Thermal and combined-cycle power plants rely on large-scale cooling towers for condenser cooling. We supply and maintain towers for both utility and captive power applications.',
    img: '/images/industry-power.jpg',
  },
  {
    name: 'Chemical & Petrochemical',
    desc: 'Process cooling in chemical and petrochemical plants demands corrosion-resistant materials and reliable performance. Our FRP towers are engineered for these aggressive environments.',
    img: '/images/industry-chemical.jpg',
  },
  {
    name: 'Steel & Metallurgy',
    desc: 'Steel plants require high-capacity cooling for furnaces, rolling mills, and continuous casting. We design and install robust RCC and FRP towers for these high-load applications.',
    img: '/images/industry-steel.jpg',
  },
  {
    name: 'Sugar & Distillery',
    desc: 'Sugar mills and distilleries use cooling towers for process condensers and fermentation cooling. We provide towers sized for seasonal and continuous operation.',
    img: '/images/industry-sugar.jpg',
  },
  {
    name: 'HVAC & Commercial',
    desc: 'Large commercial buildings, data centres, and district cooling systems use cooling towers for HVAC heat rejection. We supply and maintain towers for all building types.',
    img: '/images/industry-hvac.jpg',
  },
  {
    name: 'Heavy Manufacturing',
    desc: 'Automotive, cement, paper, and general heavy manufacturing plants depend on reliable process cooling. We serve a broad range of manufacturing industries across India.',
    img: '/images/industry-manufacturing.jpg',
  },
]

function IndustryCard({ name, desc, img }) {
  const [errored, setErrored] = useState(false)

  return (
    <article className="group rounded-lg overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow duration-300">
      <div className="aspect-video bg-[#112240] overflow-hidden relative">
        {errored ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-500">
            <ImageOff size={24} className="opacity-30 mb-1" aria-hidden="true" />
            <span className="text-xs opacity-40">{name}</span>
          </div>
        ) : (
          <img
            src={img}
            alt={`Cooling tower application in ${name}`}
            className="w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500"
            loading="lazy"
            onError={() => setErrored(true)}
          />
        )}
      </div>
      <div className="p-5">
        <h3 className="font-bold text-[#0a1628] mb-2">{name}</h3>
        <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
      </div>
    </article>
  )
}

export default function Industries() {
  return (
    <section id="industries" className="section-pad bg-white">
      <div className="container-xl">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-[#1e6fb5] text-sm font-bold tracking-widest uppercase mb-3">Industries Served</p>
          <h2
            className="text-3xl lg:text-4xl font-black text-[#0a1628] mb-4"
            style={{ textWrap: 'balance' }}
          >
            Cooling Solutions Across Key Industries
          </h2>
          <p className="text-gray-600">
            We serve heavy industries where reliable process cooling is critical to continuous operation.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map(i => (
            <IndustryCard key={i.name} {...i} />
          ))}
        </div>
      </div>
    </section>
  )
}
