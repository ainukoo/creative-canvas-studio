import { createFileRoute, Link } from "@tanstack/react-router";
import portrait from "@/assets/portrait.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Ainu Kyrönseppä" },
      {
        name: "description",
        content:
          "About Ainu Kyrönseppä — non-binary filmmaker, performer and activist working between film, performance and climate communication.",
      },
      { property: "og:title", content: "About — Ainu Kyrönseppä" },
      { property: "og:description", content: "Filmmaker, performer, activist — Helsinki." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <section className="px-6 md:px-10 pt-32 md:pt-40 pb-16">
        <p className="label-mono text-ember mb-6">Index 03 / Bio</p>
        <h1 className="font-display text-bone text-6xl md:text-[10rem] leading-[0.85]">
          About,<br />
          <em className="not-italic text-muted-foreground">briefly.</em>
        </h1>
      </section>

      <section className="px-6 md:px-10 pb-24">
        <div className="grid md:grid-cols-12 gap-8 md:gap-12">
          <div className="md:col-span-5">
            <div className="relative aspect-[3/4] overflow-hidden bg-card shadow-cinematic">
              <img
                src={portrait}
                alt="Ainu Kyrönseppä portrait"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-vignette opacity-60" />
            </div>
            <p className="label-mono text-muted-foreground mt-4">
              Ainu Kyrönseppä — Helsinki, FI
            </p>
          </div>

          <div className="md:col-span-7 md:pt-8">
            <p className="font-display text-bone text-3xl md:text-4xl leading-snug mb-10">
              Ainu is a young non-binary <em className="text-ember">"joka paikan höylä"</em> — a filmmaker, performer and activist.
            </p>

            <div className="space-y-6 text-lg text-bone/90 leading-relaxed">
              <p>
                Broad range of experience in the arts, including performing arts and video art, with the
                opportunity to bring their own works to <span className="text-amber">Amos Rex</span>,{" "}
                <span className="text-amber">Ateneum</span> and <span className="text-amber">Kiasma</span>.
              </p>
              <p>
                In addition to art, Ainu has built communication strategy through several
                environmental awareness groups in recent years — most recently{" "}
                <a
                  href="https://www.operaatioarktis.fi/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-ember underline decoration-ember/40 underline-offset-4 hover:decoration-ember"
                >
                  Operaatio Arktis
                </a>
                .
              </p>
              <p>
                By nature: sensitive, intuitive, enthusiastic. Values lean on accessibility and
                reflecting on — and dismantling — outdated social structures.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-6">
              <div>
                <p className="label-mono text-ember mb-2">Based in</p>
                <p className="font-display text-bone text-3xl">Helsinki, FI</p>
              </div>
              <div>
                <p className="label-mono text-ember mb-2">Languages</p>
                <p className="font-display text-bone text-3xl">FI · EN · SV</p>
              </div>
            </div>

            <div className="mt-12 flex gap-4 flex-wrap">
              <Link
                to="/cv"
                className="label-mono text-background bg-ember px-6 py-4 hover:bg-amber transition-colors"
              >
                View CV →
              </Link>
              <Link
                to="/contact"
                className="label-mono text-bone border border-border px-6 py-4 hover:bg-card transition-colors"
              >
                Get in touch →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
