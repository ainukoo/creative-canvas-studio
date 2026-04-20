import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Ainu Kyrönseppä" },
      {
        name: "description",
        content:
          "Services offered by Ainu Kyrönseppä — event photography, video editing, marketing, scriptwriting, directing and more.",
      },
      { property: "og:title", content: "Services — Ainu Kyrönseppä" },
      {
        property: "og:description",
        content: "Event photography, video editing, scriptwriting, directing & marketing.",
      },
    ],
  }),
  component: Services,
});

type Service = {
  no: string;
  title: string;
  tagline: string;
  bullets: string[];
  formats: string[];
};

const services: Service[] = [
  {
    no: "01",
    title: "Directing",
    tagline: "Shaping a frame, a feeling, a film.",
    bullets: [
      "Shortfilms, series & narrative work",
      "Commissioned & artistic direction",
      "Performer-led & devised pieces",
    ],
    formats: ["Shortfilm", "Series", "Music video", "Performance"],
  },
  {
    no: "02",
    title: "Scriptwriting",
    tagline: "Building stories that hold weight.",
    bullets: [
      "Original screenplays — short & long form",
      "Series concepts & treatments",
      "Script doctoring & dialogue passes",
    ],
    formats: ["Feature outline", "Shortfilm", "Treatment", "Pitch deck"],
  },
  {
    no: "03",
    title: "Video editing",
    tagline: "Cutting picture until it breathes.",
    bullets: [
      "Narrative film & shortfilm post",
      "Trailers, teasers & promotional cuts",
      "Commercials & branded content",
      "Documentary & interview assemblies",
    ],
    formats: ["Film", "Trailer", "Commercial", "Social cut-down"],
  },
  {
    no: "04",
    title: "Event photography",
    tagline: "Real moments, on film & digital.",
    bullets: [
      "Live music, festivals & gigs",
      "Cultural events, openings, popups",
      "Behind-the-scenes & production stills",
    ],
    formats: ["Concerts", "Openings", "BTS", "Editorial"],
  },
  {
    no: "05",
    title: "Marketing & content",
    tagline: "Comms strategy with a conscience.",
    bullets: [
      "Campaign concepts for NGOs & artists",
      "Social-first video & photo packages",
      "Brand storytelling & visual identity",
    ],
    formats: ["Campaign", "Social", "Identity", "Print"],
  },
  {
    no: "06",
    title: "Producing",
    tagline: "Holding the whole thing together.",
    bullets: [
      "Independent shortfilm & series production",
      "Budget, schedule & crew",
      "Festival strategy & distribution",
    ],
    formats: ["Indie film", "Series", "Festival run"],
  },
];

function Services() {
  return (
    <>
      <section className="px-6 md:px-10 pt-32 md:pt-40 pb-12 relative">
        <p className="label-mono text-ember mb-6">
          <span className="stamp text-ember">Services</span>
        </p>
        <h1 className="font-display text-bone text-6xl md:text-[10rem] leading-[0.85]">
          What I<br />
          <em className="not-italic">
            <span className="underline-rough">can offer</span>
          </em>
          <span className="text-ember">.</span>
        </h1>
        <p className="mt-10 max-w-2xl text-bone/85 text-lg md:text-xl leading-relaxed">
          A growing toolbox — pick what you need, or all of it. Most projects sit somewhere
          between film, photography and storytelling. Brief me loosely; I'll figure out the rest.
        </p>
      </section>

      <div className="px-6 md:px-10">
        <div className="scratch-divider" />
      </div>

      <section className="px-6 md:px-10 py-12 md:py-20">
        <ul className="space-y-12 md:space-y-20">
          {services.map((s, i) => (
            <li
              key={s.no}
              className={[
                "grid grid-cols-12 gap-6 md:gap-10 items-start",
                i % 2 === 1 ? "md:pl-12" : "",
              ].join(" ")}
            >
              <div className="col-span-2 md:col-span-1">
                <span className="font-display text-ember text-5xl md:text-7xl inline-block">
                  {s.no}
                </span>
              </div>

              <div className="col-span-10 md:col-span-5">
                <h2 className="font-display text-bone text-4xl md:text-7xl leading-[0.9]">
                  {s.title}
                  <span className="text-ember">.</span>
                </h2>
                <p className="mt-3 text-bone/80 text-lg italic font-display">{s.tagline}</p>
              </div>

              <div className="col-span-12 md:col-span-6 space-y-6">
                <ul className="space-y-2">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex gap-3 text-bone/90 text-lg leading-snug">
                      <span className="text-ember shrink-0 font-display">→</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 pt-2">
                  {s.formats.map((f) => (
                    <span
                      key={f}
                      className="label-mono text-bone/80 border-dashed-rough px-3 py-1.5"
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <div className="px-6 md:px-10">
        <div className="scratch-divider" />
      </div>

      {/* Process / how it works */}
      <section className="px-6 md:px-10 py-20 md:py-32">
        <p className="label-mono text-ember mb-6">How it usually goes</p>
        <h2 className="font-display text-bone text-4xl md:text-7xl leading-none mb-12 md:mb-16">
          Three steps,<br />
          <em className="not-italic text-muted-foreground">no posturing.</em>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
          {[
            {
              n: "i.",
              t: "Talk",
              d: "Send a rough idea, mood, or a deadline. We talk over email or coffee. No formal brief required.",
            },
            {
              n: "ii.",
              t: "Build",
              d: "I sketch a treatment / shot list / edit plan. We agree on scope, days and price. Then we make it.",
            },
            {
              n: "iii.",
              t: "Hand over",
              d: "Delivery in the formats you need — masters, social cuts, prints, RAW. Revisions until it lands.",
            },
          ].map((step) => (
            <div
              key={step.n}
              className="relative bg-card p-6 md:p-8 border border-border"
            >
              <span className="font-display text-ember text-4xl md:text-5xl block mb-4">
                {step.n}
              </span>
              <h3 className="font-display text-bone text-3xl mb-3">{step.t}</h3>
              <p className="text-bone/80 leading-relaxed">{step.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 md:px-10 pb-24">
        <div className="relative bg-gradient-ember p-10 md:p-16 overflow-hidden edge-rough-b">
          <div className="absolute inset-0 bg-gradient-vignette opacity-50" />
          <div className="relative">
            <p className="label-mono text-background/80 mb-4">Ready when you are</p>
            <h2 className="font-display text-background text-4xl md:text-7xl leading-[0.9] mb-8 max-w-3xl">
              Got something you want made?<br />
              <em className="not-italic">Let's get into it.</em>
            </h2>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="label-mono text-background bg-background/0 border-2 border-background px-8 py-4 hover:bg-background hover:text-ember transition-colors"
              >
                Get in touch →
              </Link>
              <Link
                to="/work"
                className="label-mono text-background/90 px-8 py-4 hover:text-background transition-colors"
              >
                See past work →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
