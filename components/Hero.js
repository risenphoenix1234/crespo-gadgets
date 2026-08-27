'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
  }),
}

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* faint gold wash, not a glow-dominant dark bg anymore */}
      <div className="pointer-events-none absolute -top-24 -right-24 h-[420px] w-[420px] rounded-full bg-gold/10 blur-[120px]" />

      <div className="relative section-pad grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        <div>
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            variants={fadeUp}
            className="eyebrow mb-6 text-gold"
          >
            Buy &middot; Sell &middot; Swap
          </motion.p>

          <h1 className="font-display font-bold leading-[1.05] text-5xl sm:text-6xl lg:text-7xl text-neutral-900">
            <motion.span
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.1}
              variants={fadeUp}
              className="block"
            >
              All phones.
            </motion.span>
            <motion.span
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.2}
              variants={fadeUp}
              className="block"
            >
              All brands.
            </motion.span>
            <motion.span
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0.3}
              variants={fadeUp}
              className="block text-gold"
            >
              One trusted dealer.
            </motion.span>
          </h1>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.4}
            variants={fadeUp}
            className="mt-8 text-neutral-600 text-md sm:text-lg max-w-md leading-relaxed"
          >
            Brand new phones, UK-used phones, swap deals and accessories &mdash;
            iPhone, Samsung, Tecno, Infinix &amp; Redmi. Order online or chat us
            on WhatsApp for the best deals in town.
          </motion.p>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.5}
            variants={fadeUp}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Link
              href="https://wa.me/2348137640944"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold"
            >
              Chat on WhatsApp
            </Link>
            <Link
              href="tel:08137640944"
              className="inline-flex items-center justify-center rounded-full border border-neutral-300 px-6 py-3 text-sm font-semibold text-neutral-900 hover:border-gold hover:text-gold transition-colors"
            >
              Call 0813 764 0944
            </Link>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.6}
            variants={fadeUp}
            className="mt-14 flex items-center gap-10 border-t border-neutral-200 pt-8"
          >
            <div>
              <p className="font-display text-2xl font-bold text-neutral-900">New</p>
              <p className="text-xs uppercase tracking-widest text-neutral-500 mt-1">Brand New Phones</p>
            </div>
            <div className="h-10 w-px bg-neutral-200" />
            <div>
              <p className="font-display text-2xl font-bold text-neutral-900">UK</p>
              <p className="text-xs uppercase tracking-widest text-neutral-500 mt-1">UK Used Phones</p>
            </div>
            <div className="h-10 w-px bg-neutral-200" />
            <div>
              <p className="font-display text-2xl font-bold text-neutral-900">Swap</p>
              <p className="text-xs uppercase tracking-widest text-neutral-500 mt-1">Trade-In Deals</p>
            </div>
          </motion.div>
        </div>

        {/* signature element: gold "authentication frame" around a real product photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative w-full max-w-md aspect-[4/5]">
            <div className="absolute inset-0 rounded-3xl overflow-hidden bg-neutral-100">
              <Image
                src="https://images.unsplash.com/photo-1592750475338-74b7b21085ab?q=80&w=1200&auto=format&fit=crop"
                alt="Smartphones available at Crespo Gadgets"
                fill
                sizes="(min-width: 1024px) 448px, 90vw"
                className="object-cover"
                priority
              />
            </div>

            {/* gold corner brackets, like a jeweler's authentication mark */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.6 }}
              className="absolute -top-3 -left-3 h-10 w-10 border-t-2 border-l-2 border-gold rounded-tl-2xl"
            />
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.7 }}
              className="absolute -bottom-3 -right-3 h-10 w-10 border-b-2 border-r-2 border-gold rounded-br-2xl"
            />

            {/* floating deal card */}
            <motion.div
              initial={{ opacity: 0, y: 16, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl border border-neutral-100 px-5 py-4 max-w-[220px]"
            >
              <p className="text-xs uppercase tracking-widest text-gold font-semibold">Top Brands</p>
              <p className="mt-1 text-sm text-neutral-700 leading-snug">
                iPhone &middot; Samsung &middot; Tecno &middot; Infinix &middot; Redmi
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero