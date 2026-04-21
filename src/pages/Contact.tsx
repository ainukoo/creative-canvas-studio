import { SEO } from "@/components/SEO";

export default function Contact() {
  return (
    <>
      <SEO
        title="Contact — Ainu Kyrönseppä"
        description="Get in touch with Ainu Kyrönseppä for film, photography, editing or collaboration."
        ogTitle="Contact — Ainu Kyrönseppä"
      />

      <section className="relative min-h-screen px-6 md:px-10 pt-32 md:pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-ember opacity-[0.08] pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-vignette pointer-events-none" />

        <div className="relative">
          <p className="label-mono text-ember mb-6">Index 05 / Get in touch</p>
          <h1 className="font-display text-bone text-6xl md:text-[10rem] leading-[0.85] mb-16">
            Let's<br />
            <em className="not-italic text-ember">collaborate.</em>
          </h1>

          <div className="grid md:grid-cols-12 gap-12">
            <div className="md:col-span-7 space-y-10">
              <div>
                <p className="label-mono text-muted-foreground mb-3">Email</p>
                <a
                  href="mailto:ainu.kyronseppa@gmail.com"
                  className="font-display text-bone text-3xl md:text-5xl hover:text-amber transition-colors break-all"
                >
                  ainu.kyronseppa@gmail.com
                </a>
              </div>

              <div>
                <p className="label-mono text-muted-foreground mb-3">Instagram</p>
                <a
                  href="https://instagram.com/ainukyronseppa"
                  target="_blank"
                  rel="noreferrer"
                  className="font-display text-bone text-3xl md:text-5xl hover:text-amber transition-colors"
                >
                  @ainukyronseppa ↗
                </a>
              </div>

              <div>
                <p className="label-mono text-muted-foreground mb-3">Vimeo</p>
                <a
                  href="https://vimeo.com/ainukyronseppa"
                  target="_blank"
                  rel="noreferrer"
                  className="font-display text-bone text-3xl md:text-5xl hover:text-amber transition-colors"
                >
                  vimeo.com/ainukyronseppa ↗
                </a>
              </div>

              <div>
                <p className="label-mono text-muted-foreground mb-3">Production enquiries</p>
                <a
                  href="https://instagram.com/tasanko_production"
                  target="_blank"
                  rel="noreferrer"
                  className="font-display text-bone text-2xl md:text-3xl hover:text-amber transition-colors"
                >
                  @tasanko_production ↗
                </a>
              </div>
            </div>

            <aside className="md:col-span-5 border-l-0 md:border-l border-border md:pl-10">
              <p className="label-mono text-ember mb-4">Currently</p>
              <p className="font-display text-bone text-2xl md:text-3xl leading-snug mb-10">
                Looking for world premieres for <em className="text-amber">Raja</em> &{" "}
                <em className="text-amber">Beef of Happiness</em>.
              </p>

              <p className="label-mono text-ember mb-4">Open to</p>
              <ul className="space-y-2 text-bone">
                <li>— Direction & screenwriting</li>
                <li>— Video editing & post</li>
                <li>— Editorial & on-set photography</li>
                <li>— Performance & video art</li>
                <li>— Climate / activist communication</li>
              </ul>

              <p className="label-mono text-ember mt-10 mb-4">Based in</p>
              <p className="font-display text-bone text-3xl">Helsinki, Finland</p>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
