export default function StatsMarquee() {
  return (
    <section className="bg-transparent overflow-hidden py-8" aria-label="Company statistics">
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
        <div className="flex items-center gap-16 px-8" aria-hidden="true">
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

/* Replaced iconify-icon web component with an inline SVG star —
   eliminates the need for the external Iconify CDN script entirely */
function Star() {
  return (
    <svg
      aria-hidden="true"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-brand-red flex-shrink-0"
    >
      <path
        d="M12 2L13.8 8.2H20.3L15.2 11.9L17 18.1L12 14.4L7 18.1L8.8 11.9L3.7 8.2H10.2L12 2Z"
        fill="currentColor"
      />
    </svg>
  );
}
