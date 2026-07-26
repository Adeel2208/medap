'use client'

import { useState, FormEvent } from 'react'
import { Send } from 'lucide-react'
import { site } from '@/data/site'
import { categories } from '@/data/categories'

interface ContactFormProps {
  defaultCategory?: string
}

const inputClasses =
  'w-full rounded-lg border border-gray-300 px-4 py-3 text-navy placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-shadow'

export default function ContactForm({ defaultCategory = '' }: ContactFormProps) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    organisation: '',
    category: defaultCategory,
    message: '',
  })

  const update = (field: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [field]: e.target.value })

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const categoryTitle = categories.find((c) => c.id === form.category)?.title
    const subject = encodeURIComponent(
      `Quote Request${categoryTitle ? ` — ${categoryTitle}` : ''} — ${form.organisation || form.name}`
    )
    const body = encodeURIComponent(
      [
        `Name: ${form.name}`,
        `Email: ${form.email}`,
        form.phone && `Phone: ${form.phone}`,
        form.organisation && `Hospital/Organisation: ${form.organisation}`,
        categoryTitle && `Product Category: ${categoryTitle}`,
        '',
        form.message,
      ]
        .filter(Boolean)
        .join('\n')
    )
    window.location.href = `${site.emailHref}?subject=${subject}&body=${body}`
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

      <button
        type="submit"
        className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary hover:bg-primary-600 text-white font-semibold px-8 py-3.5 transition-colors w-full sm:w-auto"
      >
        <Send className="w-5 h-5" />
        Send Message
      </button>
    </form>
  )
}
