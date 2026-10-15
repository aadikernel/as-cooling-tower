import { useState, useEffect } from 'react'
import { Phone, Mail, MessageCircle, User, Building2, CheckCircle } from 'lucide-react'

/* ── Verified contact details ── */
const contacts = [
  {
    icon: User,
    label: 'Managing Director',
    name: 'Anuj Kumar',
    links: [
      { href: 'tel:+919286603689', text: '+91 92866 03689', type: 'tel' },
      { href: 'mailto:anujkumar10910@gmail.com', text: 'anujkumar10910@gmail.com', type: 'email' },
    ],
  },
  {
    icon: Building2,
    label: 'Site Engineer',
    name: 'Shyam Babu',
    links: [
      { href: 'tel:+919058376491', text: '+91 90583 76491', type: 'tel' },
    ],
  },
  {
    icon: Mail,
    label: 'Company Email',
    name: 'General Enquiries',
    links: [
      { href: 'mailto:ascoolingtower@gmail.com', text: 'ascoolingtower@gmail.com', type: 'email' },
    ],
  },
]

/* ── Full service list matching all 12 service cards ── */
const SERVICE_OPTIONS = [
  'Counterflow Cooling Tower',
  'Crossflow Cooling Tower',
  'FRP Cooling Tower',
  'RCC Cooling Tower',
  'Timber Cooling Tower',
  'Industrial Gearbox',
  'FRP Axial Fan',
  'FRP Fan Cylinder',
  'Drive Shaft / Coupling',
  'Erection & Commissioning',
  'Overhaul & Retrofitting',
  'Maintenance & Spare Parts',
  'Other',
]

const EMPTY = { name: '', company: '', email: '', phone: '', service: '', details: '' }

/* ── URL builders ── */
function buildWhatsAppURL(f) {
  const msg = [
    '*New Enquiry — A.S. Cooling Tower*',
    '',
    `*Name:* ${f.name}`,
    f.company  ? `*Company:* ${f.company}`          : null,
    f.email    ? `*Email:* ${f.email}`               : null,
    f.phone    ? `*Phone:* ${f.phone}`               : null,
    f.service  ? `*Service Required:* ${f.service}`  : null,
    f.details  ? `\n*Project Details:*\n${f.details}` : null,
  ]
    .filter(Boolean)
    .join('\n')

  return `https://wa.me/919258120029?text=${encodeURIComponent(msg)}`
}

function buildMailtoURL(f) {
  const subject = `Enquiry from ${f.name}${f.company ? ` — ${f.company}` : ''}`
  const body = [
    `Name: ${f.name}`,
    `Company: ${f.company || '—'}`,
    `Email: ${f.email || '—'}`,
    `Phone: ${f.phone || '—'}`,
    `Service Required: ${f.service || '—'}`,
    '',
    'Project Details:',
    f.details || '—',
  ].join('\n')

  return `mailto:ascoolingtower@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}

export default function Contact() {
  const [form, setForm]         = useState(EMPTY)
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors]     = useState({})

  /* Listen for service pre-fill from service card "Enquire about this" links */
  useEffect(() => {
    const handler = e => {
      setForm(f => ({ ...f, service: e.detail }))
      setSubmitted(false)
    }
    window.addEventListener('set-service', handler)
    return () => window.removeEventListener('set-service', handler)
  }, [])

  const set = k => e => {
    setForm(f => ({ ...f, [k]: e.target.value }))
    if (errors[k]) setErrors(er => ({ ...er, [k]: '' }))
  }

  const validate = () => {
    const e = {}
    if (!form.name.trim())
      e.name = 'Full name is required.'
    if (!form.email.trim() && !form.phone.trim())
      e.contact = 'Please provide at least an email address or phone number.'
    return e
  }

  const handleWhatsApp = () => {
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    window.open(buildWhatsAppURL(form), '_blank', 'noopener,noreferrer')
    setSubmitted(true)
  }

  const handleEmail = () => {
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    window.open(buildMailtoURL(form), '_blank', 'noopener,noreferrer')
    setSubmitted(true)
  }

  const inputBase = 'w-full bg-white border rounded px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-1 transition-colors'
  const inputCls  = k =>
    `${inputBase} ${
      errors[k]
        ? 'border-red-400 focus:border-red-400 focus:ring-red-300'
        : 'border-gray-200 focus:border-[#1e6fb5] focus:ring-[#1e6fb5]'
    }`

  return (
    <section id="contact" className="section-pad bg-white">
      <div className="container-xl">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-[#1e6fb5] text-sm font-bold tracking-widest uppercase mb-3">Contact Us</p>
          <h2 className="text-3xl lg:text-4xl font-black text-[#0a1628] mb-4" style={{ textWrap: 'balance' }}>
            Get in Touch
          </h2>
          <p className="text-gray-600">
            Reach out for product enquiries, project quotations, or maintenance support.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* ── Left: direct contact ── */}
          <div>
            <h3 className="font-bold text-[#0a1628] text-lg mb-6">Direct Contact</h3>

            <div className="space-y-5 mb-8">
              {contacts.map(({ icon: Icon, label, name, links }) => (
                <div key={label} className="flex gap-4">
                  <div className="w-10 h-10 bg-[#1e6fb5]/10 rounded-lg flex items-center justify-center shrink-0">
                    <Icon size={18} className="text-[#1e6fb5]" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-semibold uppercase tracking-wide mb-0.5">{label}</p>
                    <p className="font-semibold text-[#0a1628] mb-1">{name}</p>
                    {links.map(l => (
                      <a
                        key={l.href}
                        href={l.href}
                        className="flex items-center gap-1.5 text-[#1e6fb5] hover:text-[#2d8fd4] text-sm transition-colors"
                      >
                        {l.type === 'tel'
                          ? <Phone size={12} aria-hidden="true" />
                          : <Mail size={12} aria-hidden="true" />
                        }
                        {l.text}
                      </a>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* WhatsApp direct CTA */}
            <a
              href="https://wa.me/919258120029"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-green-600 hover:bg-green-500 text-white font-bold px-6 py-4 rounded transition-colors duration-200 w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-green-400"
            >
              <MessageCircle size={20} aria-hidden="true" />
              WhatsApp: +91 92581 20029
            </a>
            <p className="text-gray-400 text-xs mt-2.5 text-center">
              We typically respond within a few hours on WhatsApp.
            </p>

            {/* Quick-call strip */}
            <div className="mt-6 grid grid-cols-2 gap-3">
              <a
                href="tel:+919286603689"
                className="flex items-center justify-center gap-2 border border-gray-200 hover:border-[#1e6fb5] hover:bg-[#1e6fb5]/5 text-[#0a1628] text-sm font-semibold py-3 rounded transition-colors"
              >
                <Phone size={14} className="text-[#1e6fb5]" aria-hidden="true" />
                Anuj Kumar
              </a>
              <a
                href="tel:+919058376491"
                className="flex items-center justify-center gap-2 border border-gray-200 hover:border-[#1e6fb5] hover:bg-[#1e6fb5]/5 text-[#0a1628] text-sm font-semibold py-3 rounded transition-colors"
              >
                <Phone size={14} className="text-[#1e6fb5]" aria-hidden="true" />
                Shyam Babu
              </a>
            </div>
          </div>

          {/* ── Right: enquiry form ── */}
          <div>
            <h3 className="font-bold text-[#0a1628] text-lg mb-6">Send an Enquiry</h3>

            {submitted ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
                <CheckCircle size={40} className="text-green-600 mx-auto mb-3" aria-hidden="true" />
                <p className="font-bold text-green-800 text-lg mb-2">Enquiry sent!</p>
                <p className="text-green-700 text-sm mb-5">
                  Your message has been prepared and opened in WhatsApp or your email client.
                  If nothing opened, use the direct contact details on the left.
                </p>
                <button
                  onClick={() => { setForm(EMPTY); setSubmitted(false); setErrors({}) }}
                  className="text-sm text-[#1e6fb5] hover:underline font-semibold focus:outline-none"
                >
                  ← Send another enquiry
                </button>
              </div>
            ) : (
              <form className="space-y-4" noValidate aria-label="Enquiry form">

                {/* Name + Company */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="ct-name" className="block text-xs font-semibold text-gray-600 mb-1.5">
                      Full Name <span className="text-red-500" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="ct-name"
                      type="text"
                      autoComplete="name"
                      placeholder="Your name"
                      value={form.name}
                      onChange={set('name')}
                      className={inputCls('name')}
                      aria-required="true"
                      aria-describedby={errors.name ? 'err-name' : undefined}
                    />
                    {errors.name && (
                      <p id="err-name" role="alert" className="text-red-500 text-xs mt-1">{errors.name}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="ct-company" className="block text-xs font-semibold text-gray-600 mb-1.5">Company</label>
                    <input
                      id="ct-company"
                      type="text"
                      autoComplete="organization"
                      placeholder="Company name"
                      value={form.company}
                      onChange={set('company')}
                      className={inputCls('company')}
                    />
                  </div>
                </div>

                {/* Email + Phone */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="ct-email" className="block text-xs font-semibold text-gray-600 mb-1.5">Email</label>
                    <input
                      id="ct-email"
                      type="email"
                      autoComplete="email"
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={set('email')}
                      className={inputCls('contact')}
                      aria-describedby={errors.contact ? 'err-contact' : undefined}
                    />
                  </div>
                  <div>
                    <label htmlFor="ct-phone" className="block text-xs font-semibold text-gray-600 mb-1.5">Phone</label>
                    <input
                      id="ct-phone"
                      type="tel"
                      autoComplete="tel"
                      placeholder="+91 XXXXX XXXXX"
                      value={form.phone}
                      onChange={set('phone')}
                      className={inputCls('contact')}
                    />
                  </div>
                </div>
                {errors.contact && (
                  <p id="err-contact" role="alert" className="text-red-500 text-xs -mt-2">{errors.contact}</p>
                )}

                {/* Service dropdown */}
                <div>
                  <label htmlFor="ct-service" className="block text-xs font-semibold text-gray-600 mb-1.5">
                    Service Required
                  </label>
                  <select
                    id="ct-service"
                    value={form.service}
                    onChange={set('service')}
                    className={inputCls('service')}
                  >
                    <option value="">Select a service…</option>
                    {SERVICE_OPTIONS.map(s => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                {/* Project details */}
                <div>
                  <label htmlFor="ct-details" className="block text-xs font-semibold text-gray-600 mb-1.5">
                    Project Details
                  </label>
                  <textarea
                    id="ct-details"
                    rows={4}
                    placeholder="Describe your requirement — tower type, capacity, site conditions, or any other relevant details…"
                    value={form.details}
                    onChange={set('details')}
                    className={`${inputCls('details')} resize-none`}
                  />
                </div>

                <p className="text-gray-400 text-xs">
                  <span className="text-red-500">*</span> Required. Submitting opens WhatsApp or your email client — no data is sent to a server.
                </p>

                {/* Submit buttons */}
                <div className="grid sm:grid-cols-2 gap-3 pt-1">
                  <button
                    type="button"
                    onClick={handleWhatsApp}
                    className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-500 text-white font-bold py-3.5 rounded transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-400"
                  >
                    <MessageCircle size={17} aria-hidden="true" />
                    Send via WhatsApp
                  </button>
                  <button
                    type="button"
                    onClick={handleEmail}
                    className="flex items-center justify-center gap-2 bg-[#1e6fb5] hover:bg-[#2d8fd4] text-white font-bold py-3.5 rounded transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2d8fd4]"
                  >
                    <Mail size={17} aria-hidden="true" />
                    Send via Email
                  </button>
                </div>

              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
