export const metadata = {
  title: "About — CRESPO",
};

export default function AboutPage() {
  return (
    <section className="section-pad">
      <p className="eyebrow mb-4">About Us</p>
      <h1 className="font-display text-4xl sm:text-5xl font-bold mb-6">
        Our story
      </h1>
      <p className="text-neutral-400 max-w-xl leading-relaxed">
        CRESPO was founded on a simple idea: buying a flagship phone should feel
        as considered as the device itself. Add your brand story, timeline and
        team here.
      </p>
    </section>
  );
}
