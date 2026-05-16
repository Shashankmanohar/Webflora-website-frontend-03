export default function StatsMarquee() {
  return (
    <section className=" bg-transparent overflow-hidden py-8 ">
      <div className="flex whitespace-nowrap animate-marquee">
        {/* Block 1 */}
        <div className="flex items-center gap-16 px-8">
          <Stat text="200+ PROJECTS" />
          <Star />
          <Stat text="|" />
          <Star />
          <Stat text="150+ CLIENTS" />
          <Star />
          <Stat text="|" />
          <Star />
          <Stat text="99% SATISFACTION" />
          <Star />
          <Stat text="|" />
          <Star />
          <Stat text="GROWING SINCE 2023" />
          <Star />
          <Stat text="|" />
          <Star />
        </div>

        {/* Block 2 – duplicate for infinite loop */}
        <div className="flex items-center gap-16 px-8">
          <Stat text="200+ PROJECTS" />
          <Star />
          <Stat text="|" />
          <Star />
          <Stat text="150+ CLIENTS" />
          <Star />
          <Stat text="|" />
          <Star />
          <Stat text="99% SATISFACTION" />
          <Star />
          <Stat text="|" />
          <Star />
          <Stat text="GROWING SINCE 2023" />
          <Star />
        </div>
      </div>
    </section>
  );
}

function Stat({ text }) {
  return (
    <span className="text-4xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-red-600">
      {text}
    </span>
  );
}

function Star() {
  return (
    <iconify-icon
      icon="solar:star-fall-linear"
      class="text-brand-red text-2xl"
    ></iconify-icon>
  );
}
