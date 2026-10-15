import { Shield, Wrench, Layers, Settings, Users, Clock } from 'lucide-react'

const reasons = [
  {
    icon: Layers,
    title: 'Multiple Tower Configurations',
    desc: 'We work across counterflow, crossflow, FRP, RCC, and timber cooling tower types — giving you the right solution for your specific process and site conditions.',
  },
  {
    icon: Wrench,
    title: 'End-to-End Installation Support',
    desc: 'From foundation preparation to final commissioning, our engineers manage the complete erection process on-site, ensuring correct assembly and safe startup.',
  },
  {
    icon: Settings,
    title: 'Component Supply & Replacement',
    desc: 'We supply gearboxes, FRP fans, fan cylinders, drive shafts, fill media, drift eliminators, and other critical components for all major cooling tower brands.',
  },
  {
    icon: Clock,
    title: 'Maintenance & Overhaul',
    desc: 'Scheduled preventive maintenance and emergency corrective services keep your cooling towers running at peak efficiency and prevent costly unplanned downtime.',
  },
  {
    icon: Shield,
    title: 'Retrofitting & Life Extension',
    desc: 'We refurbish and retrofit ageing cooling towers — upgrading fill media, fans, structure, and controls — to restore performance without full replacement.',
  },
  {
    icon: Users,
    title: 'Experienced Site Team',
    desc: 'Our site engineers bring practical, hands-on experience across a wide range of industrial cooling tower projects in power, chemical, steel, and manufacturing sectors.',
  },
]

export default function WhyUs() {
  return (
    <section className="section-pad bg-[#0a1628]">
      <div className="container-xl">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-[#2d8fd4] text-sm font-bold tracking-widest uppercase mb-3">Why Choose Us</p>
          <h2 className="text-3xl lg:text-4xl font-black text-white mb-4" style={{ textWrap: 'balance' }}>
            What Sets A.S. Cooling Tower Apart
          </h2>
          <p className="text-gray-400">
            We focus on what we do well — industrial cooling tower systems, from supply through to long-term maintenance.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bg-[#112240] rounded-lg p-6 border border-white/5 hover:border-[#1e6fb5]/40 transition-colors duration-200">
              <div className="w-10 h-10 bg-[#1e6fb5]/15 rounded-lg flex items-center justify-center mb-4">
                <Icon size={20} className="text-[#2d8fd4]" />
              </div>
              <h3 className="font-bold text-white mb-2">{title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
