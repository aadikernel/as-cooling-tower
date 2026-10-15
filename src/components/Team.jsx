import { Phone, Mail } from 'lucide-react'

const members = [
  {
    initials: 'AK',
    name: 'Anuj Kumar',
    role: 'Managing Director',
    desc: 'Leads the overall operations, client relationships, and project delivery at A.S. Cooling Tower. Responsible for design, procurement, and ensuring every installation meets industrial standards.',
    contacts: [
      { href: 'tel:+919286603689',          text: '+91 92866 03689', type: 'tel' },
      { href: 'mailto:anujkumar10910@gmail.com', text: 'anujkumar10910@gmail.com', type: 'email' },
    ],
  },
  {
    initials: 'SB',
    name: 'Shyam Babu',
    role: 'Site Engineer',
    desc: 'Manages on-site erection, commissioning, and maintenance operations. Brings hands-on field expertise across FRP, RCC, and timber cooling tower installations at industrial facilities.',
    contacts: [
      { href: 'tel:+919058376491', text: '+91 90583 76491', type: 'tel' },
    ],
  },
]

export default function Team() {
  return (
    <section id="team" className="section-pad bg-[#f4f6f9]">
      <div className="container-xl">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-[#1e6fb5] text-sm font-bold tracking-widest uppercase mb-3">Our Team</p>
          <h2
            className="text-3xl lg:text-4xl font-black text-[#0a1628] mb-4"
            style={{ textWrap: 'balance' }}
          >
            The People Behind A.S. Cooling Tower
          </h2>
          <p className="text-gray-600">
            A focused team with deep hands-on experience in industrial cooling tower systems.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {members.map(({ initials, name, role, desc, contacts }) => (
            <article
              key={name}
              className="bg-white rounded-xl p-8 border border-gray-100 hover:border-[#1e6fb5]/30 hover:shadow-md transition-all duration-200 flex flex-col items-center text-center"
            >
              {/* Initials avatar */}
              <div
                className="w-20 h-20 rounded-full bg-[#1e6fb5] flex items-center justify-center mb-5 shrink-0"
                aria-hidden="true"
              >
                <span className="text-white font-black text-2xl tracking-wide">{initials}</span>
              </div>

              <h3 className="font-black text-[#0a1628] text-xl mb-1">{name}</h3>
              <p className="text-[#1e6fb5] text-sm font-bold uppercase tracking-widest mb-4">{role}</p>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">{desc}</p>

              <div className="flex flex-col gap-2 w-full mt-auto">
                {contacts.map(c => (
                  <a
                    key={c.href}
                    href={c.href}
                    className="inline-flex items-center justify-center gap-2 border border-gray-200 hover:border-[#1e6fb5] hover:bg-[#1e6fb5]/5 text-[#0a1628] text-sm font-semibold py-2.5 px-4 rounded transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1e6fb5]"
                  >
                    {c.type === 'tel'
                      ? <Phone size={13} className="text-[#1e6fb5] shrink-0" aria-hidden="true" />
                      : <Mail  size={13} className="text-[#1e6fb5] shrink-0" aria-hidden="true" />
                    }
                    <span className="truncate">{c.text}</span>
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
