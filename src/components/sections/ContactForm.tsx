'use client'

import { useState, FormEvent } from 'react'
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react'
import { site } from '@/data/site'
import { categories } from '@/data/categories'

interface ContactFormProps {
  defaultCategory?: string
}

const inputClasses =
  'w-full rounded-lg border border-gray-300 px-4 py-3 text-navy placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow'

// Web3Forms access key — reliably delivers submissions to your inbox with no server.
// Uses NEXT_PUBLIC_WEB3FORMS_KEY if set, otherwise the account key below.
const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? '0242ec50-98f7-428d-b14c-0471be768627'

type Status = 'idle' | 'submitting' | 'success' | 'error'

export default function ContactForm({ defaultCategory = '' }: ContactFormProps) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    organisation: '',
    category: defaultCategory,
    message: '',
  })
  const [status, setStatus] = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const update =
    (field: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setForm({ ...form, [field]: e.target.value })

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    const categoryTitle = categories.find((c) => c.id === form.category)?.title

    // The form sends the email directly via the Web3Forms API — it never opens a mail app.
    if (!ACCESS_KEY) {
      setStatus('error')
      setErrorMsg(`The form isn't configured yet. Please email us directly at ${site.email}.`)
      return
    }

    setStatus('submitting')
    setErrorMsg('')
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          subject: `Quote Request${categoryTitle ? ` — ${categoryTitle}` : ''} — ${
            form.organisation || form.name
          }`,
          from_name: form.name,
          // Reply-To so you can respond straight to the enquirer
          replyto: form.email,
          name: form.name,
          email: form.email,
          phone: form.phone,
          organisation: form.organisation,
          category: categoryTitle ?? 'Not specified',
          message: form.message,
        }),
      })
      const data = await res.json()
      if (data.success) {
        setStatus('success')
        setForm({ name: '', email: '', phone: '', organisation: '', category: defaultCategory, message: '' })
      } else {
        setStatus('error')
        setErrorMsg(data.message || 'Something went wrong. Please email us directly.')
      }
    } catch {
      setStatus('error')
      setErrorMsg('Network error. Please email us directly at ' + site.email)
    }
  }

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-primary-100 bg-primary-50/50 px-6 py-14 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white">
          <CheckCircle2 className="h-7 w-7" />
        </span>
        <h3 className="mt-5 font-display text-xl font-bold text-navy">Message sent — thank you!</h3>
        <p className="mt-2 max-w-sm text-sm leading-relaxed text-gray-600">
          Our team has received your enquiry and will get back to you within one business day.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-6 text-sm font-semibold text-primary-600 hover:text-primary-700"
        >
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-navy mb-1.5">
            Full Name <span className="text-primary">*</span>
          </label>
          <input id="name" required value={form.name} onChange={update('name')} placeholder="Your name" className={inputClasses} />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-navy mb-1.5">
            Email <span className="text-primary">*</span>
          </label>
          <input id="email" type="email" required value={form.email} onChange={update('email')} placeholder="you@hospital.com" className={inputClasses} />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-navy mb-1.5">
            Phone
          </label>
          <input id="phone" type="tel" value={form.phone} onChange={update('phone')} placeholder="+92 300 0000000" className={inputClasses} />
        </div>
        <div>
          <label htmlFor="organisation" className="block text-sm font-semibold text-navy mb-1.5">
            Hospital / Organisation
          </label>
          <input id="organisation" value={form.organisation} onChange={update('organisation')} placeholder="Facility name" className={inputClasses} />
        </div>
      </div>

      <div>
        <label htmlFor="category" className="block text-sm font-semibold text-navy mb-1.5">
          Product Category
        </label>
        <select id="category" value={form.category} onChange={update('category')} className={inputClasses}>
          <option value="">Select a category (optional)</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.title}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-navy mb-1.5">
          How can we help? <span className="text-primary">*</span>
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={form.message}
          onChange={update('message')}
          placeholder="Tell us about your requirements — equipment, quantities, timelines…"
          className={inputClasses}
        />
      </div>

      {status === 'error' && (
        <div className="flex items-start gap-2 rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700">
          <AlertCircle className="h-5 w-5 shrink-0" />
          <span>{errorMsg}</span>
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary hover:bg-primary-600 disabled:opacity-70 text-white font-semibold px-8 py-3.5 transition-colors w-full sm:w-auto"
      >
        {status === 'submitting' ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Sending…
          </>
        ) : (
          <>
            <Send className="w-5 h-5" />
            Send Message
          </>
        )}
      </button>
    </form>
  )
}
