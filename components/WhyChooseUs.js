const features = [
  {
    title: "Authenticated Stock",
    desc: "Every unit is sealed, serial-checked and sourced directly from authorized distributors.",
  },
  {
    title: "Express Delivery",
    desc: "Nationwide delivery in 48 hours, tracked door-to-door in discreet matte-black packaging.",
  },
  {
    title: "Extended Warranty",
    desc: "Two full years of coverage plus one free screen replacement, no questions asked.",
  },
  {
    title: "Trade-In Value",
    desc: "Upgrade for less — trade in your old device for instant credit toward a new CRESPO phone.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="section-pad border-t border-neutral-200 bg-neutral-50">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <p className="eyebrow mb-4">Why Crespo Gadgets</p>
        <h2 className="font-display text-4xl sm:text-5xl font-bold text-neutral-900">
          Built on trust, backed by gold
        </h2>
        <p className="mt-5 text-neutral-500">
          A straightforward way to buy, sell and upgrade your phone.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, idx) => (
          <div
            key={feature.title}
            className="relative pl-6 border-l border-gold/40"
          >
            <span className="font-display text-sm text-gold tracking-widest">
              {String(idx + 1).padStart(2, "0")}
            </span>
            <h3 className="font-display text-lg font-semibold mt-3 mb-3 text-neutral-900">
              {feature.title}
            </h3>
            <p className="text-sm text-neutral-500 leading-relaxed">
              {feature.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
