'use client'

import { useState } from 'react'

const WHATSAPP_NUMBER = '2348137640944' // 0813 764 0944 in international format (Nigeria +234)

export default function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    const text = `New message from CRESPO website:%0A%0AName: ${encodeURIComponent(
      name
    )}%0AEmail: ${encodeURIComponent(email)}%0AMessage: ${encodeURIComponent(message)}`

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`

    window.open(whatsappUrl, '_blank')
  }

  return (
    <form className="max-w-lg space-y-5" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Full name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        className="w-full bg-gray-400 border border-white/10 rounded-xl px-4 py-3 text-sm placeholder:text-neutral-600 focus:outline-none focus:border-gold/60"
      />
      <input
        type="email"
        placeholder="Email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="w-full bg-gray-400 border border-white/10 rounded-xl px-4 py-3 text-sm placeholder:text-neutral-600 focus:outline-none focus:border-gold/60"
      />
      <textarea
        rows={5}
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        required
        className="w-full bg-gray-400 border border-white/10 rounded-xl px-4 py-3 text-sm placeholder:text-neutral-600 focus:outline-none focus:border-gold/60"
      />
      <button type="submit" className="btn-gold">
        Send Message
      </button>
    </form>
  )
}