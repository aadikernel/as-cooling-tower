import { ArrowRight, MessageCircle } from 'lucide-react'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#0a1628]"
      aria-label="Hero"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-cooling-tower.jpg"
          alt="A.S. Cooling Tower industrial cooling tower installation at a large industrial facility"
          className="w-full h-full object-cover opacity-35"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628] via-[#0a1628]/80 to-transparent" />
      </div>

      {/* Decorative grid */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(#2d8fd4 1px, transparent 1px), linear-gradient(90deg, #2d8fd4 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
        aria-hidden="true"
      />

      <div className="container-xl relative z-10 pt-24 pb-20">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-[#1e6fb5]/20 border border-[#1e6fb5]/40 text-[#2d8fd4] text-xs font-semibold tracking-widest uppercase px-4 py-2 rounded-full mb-8">
            Industrial Cooling Solutions
          </div>

          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-6"
            style={{ textWrap: 'balance' }}
          >
            Engineered Cooling Solutions for{' '}
            <span className="text-[#2d8fd4]">Demanding Industries</span>
          </h1>

          <p className="text-gray-300 text-lg leading-relaxed mb-10 max-w-xl">
            Designing, manufacturing, supplying and installing industrial cooling tower systems,
            with comprehensive maintenance and component support.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-[#1e6fb5] hover:bg-[#2d8fd4] text-white font-bold px-7 py-4 rounded transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2d8fd4]"
            >
              Request a Quote <ArrowRight size={18} />
            </a>
            <a
              href="https://wa.me/919258120029"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white font-bold px-7 py-4 rounded transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-400"
            >
              <MessageCircle size={18} /> WhatsApp
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 border border-white/30 hover:border-white/70 hover:bg-white/5 text-white font-semibold px-7 py-4 rounded transition-all duration-200"
            >
              Our Services
            </a>
          </div>
        </div>
      </div>

      {/* Bottom fade — matches bg-white of next section */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent pointer-events-none" aria-hidden="true" />
    </section>
  )
}
