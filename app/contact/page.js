import ContactForm from '@/components/ContactForm'

export const metadata = {
  title: 'Contact — NOIR',
}

export default function ContactPage() {
  return (
    <section className="section-pad">
      <p className="eyebrow mb-4">Contact</p>
      <h1 className="font-display text-4xl sm:text-5xl font-bold mb-10">
        Get in touch
      </h1>

      <ContactForm />
    </section>
  )
}