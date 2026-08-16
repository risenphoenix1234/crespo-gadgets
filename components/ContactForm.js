'use client'

export default function ContactForm() {
  return (
    <form className="max-w-lg space-y-5" onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        placeholder="Full name"
        className="w-full bg-black-card border border-white/10 rounded-xl px-4 py-3 text-sm placeholder:text-neutral-600 focus:outline-none focus:border-gold/60"
      />
      <input
        type="email"
        placeholder="Email address"
        className="w-full bg-black-card border border-white/10 rounded-xl px-4 py-3 text-sm placeholder:text-neutral-600 focus:outline-none focus:border-gold/60"
      />
      <textarea
        rows={5}
        placeholder="Message"
        className="w-full bg-black-card border border-white/10 rounded-xl px-4 py-3 text-sm placeholder:text-neutral-600 focus:outline-none focus:border-gold/60"
      />
      <button type="submit" className="btn-gold">
        Send Message
      </button>
    </form>
  )
}