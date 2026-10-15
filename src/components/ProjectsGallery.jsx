import { useState } from 'react'
import { ImageOff } from 'lucide-react'

const projects = [
  {
    id: 1,
    src: '/images/project-01.jpg',
    caption: 'Large-Scale Cooling Tower Installation',
    alt: 'Large-scale industrial cooling tower installation at a heavy manufacturing facility',
    detail: 'Large-scale cooling tower installation — complete structural assembly and commissioning for a heavy industrial application requiring high-capacity thermal management.',
  },
  {
    id: 2,
    src: '/images/project-02.jpg',
    caption: 'Industrial Cooling Tower System',
    alt: 'Industrial cooling tower system installed and operational at an industrial plant',
    detail: 'Industrial cooling tower system — fully installed and commissioned for continuous process cooling, with all mechanical and structural components in place.',
  },
  {
    id: 3,
    src: '/images/project-03.jpg',
    caption: 'Cooling Tower Erection & Commissioning',
    alt: 'Cooling tower erection and commissioning work carried out by A.S. Cooling Tower site team',
    detail: 'On-site erection and commissioning — our field engineering team managing the complete mechanical assembly from foundation to first run.',
  },
  {
    id: 4,
    src: '/images/project-04.jpg',
    caption: 'Cooling Tower Structural Assembly',
    alt: 'Cooling tower structural framework and mechanical assembly at an industrial site',
    detail: 'Structural assembly of a cooling tower system — framework, casing, and mechanical components installed by our experienced site engineers.',
  },
  {
    id: 5,
    src: '/images/project-05.jpg',
    caption: 'FRP Cooling Tower Installation',
    alt: 'FRP cooling tower installation with fan deck and mechanical components at an industrial facility',
    detail: 'FRP cooling tower installation — fibre-reinforced plastic construction offering corrosion resistance and long service life for demanding industrial environments.',
  },
  {
    id: 6,
    src: '/images/project-06.jpg',
    caption: 'Cooling Tower Overhaul & Refurbishment',
    alt: 'Cooling tower overhaul and refurbishment project completed by A.S. Cooling Tower',
    detail: 'Cooling tower overhaul and refurbishment — structural repairs, fill media replacement, and mechanical upgrades to restore full performance and extend service life.',
  },
]

function GalleryCard({ src, caption, alt, detail }) {
  const [errored, setErrored] = useState(false)

  return (
    <article className="group rounded-lg overflow-hidden bg-[#112240] border border-white/5 hover:border-[#1e6fb5]/40 transition-colors duration-300">
      {/* Uniform aspect-video image container */}
      <div className="aspect-video relative overflow-hidden bg-[#0d1e3a]">
        {errored ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-500 p-4 text-center">
            <ImageOff size={28} className="mb-2 opacity-30" aria-hidden="true" />
            <p className="text-xs text-gray-500 opacity-50 leading-snug">Photo coming soon</p>
          </div>
        ) : (
          <>
            <img
              src={src}
              alt={alt}
              className="w-full h-full object-cover opacity-85 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
              loading="lazy"
              decoding="async"
              onError={() => setErrored(true)}
            />
            {/* Hover detail overlay */}
            <div
              className="absolute inset-0 bg-[#0a1628]/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4"
              aria-hidden="true"
            >
              <p className="text-white text-sm leading-snug">{detail}</p>
            </div>
          </>
        )}
      </div>

      {/* Always-visible caption bar */}
      <div className="px-4 py-3 border-t border-white/5">
        <p className="text-white text-sm font-semibold leading-snug">{caption}</p>
      </div>
    </article>
  )
}

export default function ProjectsGallery() {
  return (
    <section id="projects" className="section-pad bg-[#0a1628]">
      <div className="container-xl">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-[#2d8fd4] text-sm font-bold tracking-widest uppercase mb-3">Project Gallery</p>
          <h2
            className="text-3xl lg:text-4xl font-black text-white mb-4"
            style={{ textWrap: 'balance' }}
          >
            Our Work in the Field
          </h2>
          <p className="text-gray-400">
            Photographs from A.S. Cooling Tower installations, erection works, and field projects.
            Hover over each image for project details.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map(p => (
            <GalleryCard
              key={p.id}
              src={p.src}
              caption={p.caption}
              alt={p.alt}
              detail={p.detail}
            />
          ))}
        </div>

        <p className="text-center text-gray-500 text-sm mt-10">
          For detailed project references and case studies, please{' '}
          <a href="#contact" className="text-[#2d8fd4] hover:underline font-medium">
            contact us directly
          </a>.
        </p>
      </div>
    </section>
  )
}
