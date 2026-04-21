import { Helmet } from "react-helmet-async";
import { projects } from "@/lib/projects";

export default function Work() {
  return (
    <>
      <Helmet>
        <title>Work — Ainu Kyrönseppä</title>
        <meta
          name="description"
          content="Selected films, photography and performance works by Ainu Kyrönseppä — directing, screenwriting, editing."
        />
        <meta property="og:title" content="Work — Ainu Kyrönseppä" />
        <meta property="og:description" content="Films, photography and performance — 2020—2025." />
      </Helmet>

      <section className="px-6 md:px-10 pt-32 md:pt-40 pb-12">
        <p className="label-mono text-ember mb-6">Index 01 / Filmography</p>
        <h1 className="font-display text-bone text-6xl md:text-[10rem] leading-[0.85]">
          Work,<br />
          <em className="not-italic text-muted-foreground">selected.</em>
        </h1>
      </section>

      <section className="px-6 md:px-10 pb-24">
        <ul className="border-t border-border">
          {projects.map((p, i) => (
            <li key={p.slug} className="border-b border-border group">
              <a
                href={p.link?.href ?? "#"}
                target={p.link ? "_blank" : undefined}
                rel="noreferrer"
                className="block py-6 md:py-10 relative overflow-hidden"
              >
                <div className="grid grid-cols-12 gap-4 items-center relative z-10">
                  <span className="col-span-1 label-mono text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="col-span-7 md:col-span-5">
                    <h2 className="font-display text-bone text-3xl md:text-6xl leading-none group-hover:text-ember transition-colors duration-500">
                      {p.title}
                    </h2>
                  </div>
                  <span className="hidden md:block col-span-3 label-mono text-muted-foreground">
                    {p.roles.slice(0, 2).join(" · ")}
                  </span>
                  <span className="col-span-4 md:col-span-2 label-mono text-bone text-right">
                    {p.year}
                  </span>
                  <span className="hidden md:block col-span-1 label-mono text-ember text-right opacity-0 group-hover:opacity-100 transition-opacity">
                    {p.link ? "↗" : "→"}
                  </span>
                </div>

                <div className="absolute right-32 top-1/2 -translate-y-1/2 w-72 aspect-[4/3] opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 transition-all duration-500 pointer-events-none hidden lg:block z-0 shadow-cinematic">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section className="px-6 md:px-10 pb-32">
        <p className="label-mono text-ember mb-8">Index 02 / Stills</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {projects.map((p) => (
            <figure key={p.slug} className="relative group overflow-hidden bg-card aspect-[4/3]">
              <img
                src={p.image}
                alt={p.title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <figcaption className="absolute inset-0 flex flex-col justify-end p-5 bg-gradient-to-t from-background via-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="label-mono text-ember">{p.year}</p>
                <p className="font-display text-bone text-2xl">{p.title}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </>
  );
}
