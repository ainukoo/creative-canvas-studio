import { createFileRoute, Link } from "@tanstack/react-router";
import heroImg from "@/assets/hero-cinematic.jpg";
import { projects } from "@/lib/projects";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ainu Kyrönseppä — Filmmaker, Director, Editor" },
      {
        name: "description",
        content:
          "A growing toolbox — directing, screenwriting, photography and editing by Ainu Kyrönseppä.",
      },
      { property: "og:title", content: "Ainu Kyrönseppä — A Growing Toolbox" },
    ],
  }),
  component: Index,
});

const marqueeRoles = [
  "Director",
  "Screenwriter",
  "Editor",
  "Photographer",
  "Performer",
  "Producer",
  "DOP",
  "Activist",
];

function Index() {
  const featured = projects.slice(0, 4);

  return (
    <>
      {/* HERO */}
      <section className="relative h-[100svh] w-full overflow-hidden">
        <img
          src={heroImg}
          alt="Cinematic warm liquid surface — opening frame"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-fade" />
        <div className="absolute inset-0 bg-gradient-vignette" />

        {/* letterbox bars */}
        <div className="absolute top-0 left-0 right-0 h-[8vh] bg-background z-10" />
        <div className="absolute bottom-0 left-0 right-0 h-[8vh] bg-background z-10" />

        <div className="relative z-20 flex h-full flex-col justify-between px-6 md:px-10 py-[10vh]">
          <div className="flex justify-between items-start pt-4">
            <p className="label-mono text-bone/80 animate-fade-up">A growing toolbox</p>
            <p className="label-mono text-bone/80 hidden md:block animate-fade-up">
              Reel · 2020—2025
            </p>
          </div>

          <div className="animate-fade-up" style={{ animationDelay: "0.2s", opacity: 0, animationFillMode: "forwards" }}>
            <h1 className="font-display text-bone leading-[0.85] text-[clamp(3rem,12vw,11rem)]">
              <span className="inline-block" style={{ transform: "rotate(-1deg)" }}>Ainu</span><br />
              <em className="not-italic text-ember inline-block" style={{ transform: "rotate(1deg)" }}>Kyrönseppä</em>
            </h1>
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 animate-fade-up" style={{ animationDelay: "0.4s", opacity: 0, animationFillMode: "forwards" }}>
            <p className="max-w-md text-bone/90 text-lg leading-relaxed">
              Filmmaker, performer & activist. Sensitive, intuitive, enthusiastic — building images for screen, stage and the world worth keeping.
            </p>
            <Link
              to="/work"
              className="label-mono text-bone border border-bone/40 px-8 py-4 hover:bg-ember hover:text-background hover:border-transparent transition-all duration-300 self-start"
            >
              See the work →
            </Link>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <section className="border-y border-border py-8 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...marqueeRoles, ...marqueeRoles, ...marqueeRoles].map((r, i) => (
            <span key={i} className="font-display text-5xl md:text-7xl text-bone px-8">
              {r} <span className="text-ember">✦</span>
            </span>
          ))}
        </div>
      </section>

      {/* FEATURED WORK */}
      <section className="px-6 md:px-10 py-24 md:py-32">
        <div className="flex justify-between items-end mb-12 md:mb-20">
          <div>
            <p className="label-mono text-ember mb-4"><span className="stamp">Selected works</span></p>
            <h2 className="font-display text-bone text-5xl md:text-7xl leading-none">
              Some<br />
              <em className="not-italic text-muted-foreground"><span className="underline-rough">recent frames.</span></em>
            </h2>
          </div>
          <Link
            to="/work"
            className="hidden md:inline-block label-mono text-bone hover:text-amber transition-colors"
          >
            All work →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
          {featured.map((p, i) => (
            <Link
              key={p.slug}
              to="/work"
              className={[
                "group relative block overflow-hidden bg-card",
                i === 0 ? "md:col-span-7 aspect-[4/3]" : "",
                i === 1 ? "md:col-span-5 aspect-[4/3] md:mt-24" : "",
                i === 2 ? "md:col-span-5 aspect-[4/3]" : "",
                i === 3 ? "md:col-span-7 aspect-[4/3] md:-mt-24" : "",
              ].join(" ")}
            >
              <img
                src={p.image}
                alt={p.title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <p className="label-mono text-ember mb-2">{p.year} · {p.category}</p>
                <h3 className="font-display text-bone text-3xl md:text-5xl leading-none">{p.title}</h3>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 md:hidden">
          <Link to="/work" className="label-mono text-bone border border-border px-6 py-3 inline-block">
            All work →
          </Link>
        </div>
      </section>

      {/* INTRO STRIP */}
      <section className="px-6 md:px-10 py-24 md:py-32 border-t border-border">
        <div className="grid md:grid-cols-12 gap-8">
          <p className="label-mono text-ember md:col-span-3">About</p>
          <div className="md:col-span-9">
            <p className="font-display text-bone text-3xl md:text-5xl leading-tight">
              Ainu is a young non-binary <em className="text-ember">"joka paikan höylä"</em> — a filmmaker, performer and activist whose work has reached <span className="text-amber">Amos Rex</span>, <span className="text-amber">Ateneum</span> and <span className="text-amber">Kiasma</span>.
            </p>
            <Link
              to="/about"
              className="mt-10 inline-block label-mono text-bone hover:text-amber transition-colors"
            >
              Read full bio →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
