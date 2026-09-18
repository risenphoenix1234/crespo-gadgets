'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

const WHATSAPP_NUMBER = '2348137640944'

const categories = [
  {
    id: 'iphone',
    name: 'iPhone',
    tag: 'Brand New & UK Used',
    image:
      'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?q=80&w=800&auto=format&fit=crop',
    models: [
      'iPhone 17',
      'iPhone 16',
      'iPhone 15 Pro',
      'iPhone 15',
      'iPhone 14',
      'iPhone 13',
      'iPhone 12',
      'iPhone 11',
      'iPhone XR',
      'iPhone 18 pre order',
      'Other iPhone model',
    ],
  },
  {
    id: 'samsung',
    name: 'Samsung',
    tag: 'Galaxy S, Z & A Series',
    image:
      'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?q=80&w=800&auto=format&fit=crop',
    models: [
      'Galaxy S24 Ultra',
      'Galaxy S24+',
      'Galaxy S24',
      'Galaxy S23 Ultra',
      'Galaxy S23',
      'Galaxy Z Fold 6',
      'Galaxy Z Flip 6',
      'Galaxy A55',
      'Galaxy A15',
      'Other Samsung model',
    ],
  },
  {
    id: 'android',
    name: 'Other Android',
    tag: 'Tecno · Infinix · Redmi & More',
    image:
      'https://images.unsplash.com/photo-1598327105666-5b89351aff97?q=80&w=800&auto=format&fit=crop',
    models: [
      'Tecno Camon 30',
      'Tecno Spark 20',
      'Infinix Note 40',
      'Infinix Zero 30',
      'Redmi Note 13',
      'Redmi 13C',
      'Xiaomi 14',
      'Google Pixel 8',
      'Oppo Reno 11',
      'Other Android model',
    ],
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
  }),
}

const FeaturedPhones = () => {
  const [activeCategory, setActiveCategory] = useState(null)

  const handleModelSelect = (categoryName, model) => {
    const isOther = model.toLowerCase().startsWith('other')
    const message = isOther
      ? `Hi, I want to buy a ${categoryName} phone, but I don't see my model listed.`
      : `Hi, I want to buy a ${model}.`

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
    window.open(url, '_blank', 'noopener,noreferrer')
    setActiveCategory(null)
  }

  return (
    <section className="section-pad border-t border-neutral-200">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={0}
        variants={fadeUp}
        className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14"
      >
        <div>
          <p className="eyebrow mb-4">Shop by brand</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-neutral-900">
            Pick your phone
          </h2>
        </div>
        <p className="text-neutral-500 max-w-sm">
          Brand new and UK-used, across every major brand. Tap a category, pick your model, and
          we&apos;ll take it from there on WhatsApp.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((category, idx) => (
          <motion.button
            key={category.id}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={idx * 0.15}
            variants={fadeUp}
            onClick={() => setActiveCategory(category.id)}
            className="group relative rounded-3xl border border-neutral-200 bg-white overflow-hidden text-left transition-all duration-300 hover:border-gold/60 hover:shadow-gold"
          >
            <div className="relative h-56 w-full bg-neutral-100">
              <Image
                src={category.image}
                alt={category.name}
                fill
                sizes="(min-width: 1024px) 380px, 90vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <p className="eyebrow mb-2">{category.tag}</p>
              <div className="flex items-center justify-between">
                <h3 className="font-display text-xl font-semibold text-neutral-900">
                  {category.name}
                </h3>
                <span className="text-sm font-medium text-neutral-500 group-hover:text-gold transition-colors">
                  View models &rarr;
                </span>
              </div>
            </div>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {activeCategory && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4"
            onClick={() => setActiveCategory(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.97 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="w-full max-w-md rounded-3xl bg-white p-6 sm:p-8 shadow-xl"
              onClick={(e) => e.stopPropagation()}
            >
              {categories
                .filter((c) => c.id === activeCategory)
                .map((category) => (
                  <div key={category.id}>
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="font-display text-2xl font-bold text-neutral-900">
                        {category.name} models
                      </h3>
                      <button
                        onClick={() => setActiveCategory(null)}
                        aria-label="Close"
                        className="text-neutral-400 hover:text-neutral-900 text-2xl leading-none"
                      >
                        &times;
                      </button>
                    </div>

                    <div className="space-y-2 max-h-[60vh] overflow-y-auto">
                      {category.models.map((model, i) => (
                        <motion.button
                          key={model}
                          initial={{ opacity: 0, x: -8 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.25, delay: 0.1 + i * 0.03 }}
                          onClick={() => handleModelSelect(category.name, model)}
                          className="w-full text-left rounded-xl border border-neutral-200 px-4 py-3 text-neutral-800 font-medium hover:border-gold hover:bg-gold/5 hover:text-gold transition-colors"
                        >
                          {model}
                        </motion.button>
                      ))}
                    </div>

                    <p className="mt-6 text-xs text-neutral-400 text-center">
                      Tapping a model opens WhatsApp with a pre-filled message.
                    </p>
                  </div>
                ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default FeaturedPhones