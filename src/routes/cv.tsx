import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/cv")({
  head: () => ({
    meta: [
      { title: "CV — Ainu Kyrönseppä" },
      {
        name: "description",
        content:
          "Curriculum vitae of Ainu Kyrönseppä — selected works, exhibitions, roles and credits.",
      },
      { property: "og:title", content: "CV — Ainu Kyrönseppä" },
    ],
  }),
  component: CV,
});

type Entry = {
  year: string;
  title: string;
  role: string;
  context?: string;
};

const filmwork: Entry[] = [
  { year: "2025", title: "Raja", role: "Screenwriter, Director, Editor", context: "Four-episode series & shortfilm — Tuotanto Tasanko, for YLE" },
  { year: "2024", title: "Beef of Happiness", role: "Screenwriter, Assistant Director, Editor", context: "Shortfilm — Tuotanto Tasanko" },
  { year: "2023", title: "Limbless", role: "Screenwriter, Director, DOP, Producer, Editor", context: "Shortfilm" },
  { year: "2023", title: "Blueberrylands", role: "Actor", context: "Shortfilm — Tuotanto Tasanko" },
  { year: "2023", title: "Välitila", role: "Screenwriter, Director, DOP, Producer, Editor", context: "Shortfilm" },
  { year: "2022", title: "Jätti", role: "Screenwriter, Director, DOP, Photographer, Editor", context: "Promo & headshots for Sinimini Artists" },
  { year: "2021", title: "Parkki", role: "Screenwriter, Director, Editor", context: "Practice shortfilm" },
  { year: "2021", title: "Crybaby", role: "Screenwriter, Director, Editor", context: "Practice shortfilm" },
];

const performance: Entry[] = [
  { year: "2020", title: "Tulva", role: "Choreographer, Performer, Producer, Editor", context: "Performance & shortfilm — URB20" },
  { year: "2020", title: "Säie", role: "Choreographer, Performer, Producer", context: "Performance — Generation 2020" },
];

const photography: Entry[] = [
  { year: "2024", title: "Arts Hair Salong × Eerika Sirola", role: "Photographer", context: "Pop-up editorial" },
  { year: "2024", title: "TAHS 50v Live Band on Film", role: "Photographer" },
];

const other: Entry[] = [
  { year: "2023", title: "Arctic Endgame", role: "Designer & Editor for print", context: "Operaatio Arktis — public awareness publication" },
  { year: "2022—", title: "Operaatio Arktis", role: "Co-founder, Producer, Video Editor, Photographer", context: "Non-profit NGO" },
];

const exhibitions = [
  { year: "—", venue: "Amos Rex", note: "Video art" },
  { year: "—", venue: "Ateneum", note: "Video art" },
  { year: "—", venue: "Kiasma", note: "Video art" },
];

function Section({ title, entries }: { title: string; entries: Entry[] }) {
  return (
    <section className="border-t border-border py-12 md:py-16">
      <div className="grid md:grid-cols-12 gap-6">
        <h2 className="md:col-span-3 label-mono text-ember">{title}</h2>
        <ul className="md:col-span-9 space-y-6">
          {entries.map((e, i) => (
            <li key={i} className="grid grid-cols-12 gap-4 items-baseline">
              <span className="col-span-3 md:col-span-2 label-mono text-muted-foreground">{e.year}</span>
              <div className="col-span-9 md:col-span-10">
                <p className="font-display text-bone text-2xl md:text-3xl leading-tight">{e.title}</p>
                <p className="text-bone/80 mt-1">{e.role}</p>
                {e.context && (
                  <p className="text-muted-foreground text-sm mt-1">{e.context}</p>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function CV() {
  return (
    <>
      <section className="px-6 md:px-10 pt-32 md:pt-40 pb-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p className="label-mono text-ember mb-6">Index 04 / Curriculum</p>
            <h1 className="font-display text-bone text-6xl md:text-[10rem] leading-[0.85]">
              CV<span className="text-ember">.</span>
            </h1>
          </div>
          <button
            onClick={() => window.print()}
            className="label-mono text-bone border border-border px-6 py-4 hover:bg-ember hover:text-background hover:border-transparent transition-colors self-start"
          >
            Print / Save PDF →
          </button>
        </div>
      </section>

      <div className="px-6 md:px-10 pb-24">
        <Section title="Film" entries={filmwork} />
        <Section title="Performance" entries={performance} />
        <Section title="Photography" entries={photography} />
        <Section title="Production / NGO" entries={other} />

        <section className="border-t border-border py-12 md:py-16">
          <div className="grid md:grid-cols-12 gap-6">
            <h2 className="md:col-span-3 label-mono text-ember">Exhibitions</h2>
            <ul className="md:col-span-9 space-y-4">
              {exhibitions.map((e, i) => (
                <li key={i} className="grid grid-cols-12 gap-4 items-baseline border-b border-border pb-4">
                  <span className="col-span-3 md:col-span-2 label-mono text-muted-foreground">{e.year}</span>
                  <p className="col-span-6 md:col-span-7 font-display text-bone text-2xl">{e.venue}</p>
                  <p className="col-span-3 label-mono text-muted-foreground text-right">{e.note}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="border-t border-border py-12 md:py-16">
          <div className="grid md:grid-cols-12 gap-6">
            <h2 className="md:col-span-3 label-mono text-ember">Capabilities</h2>
            <div className="md:col-span-9 grid grid-cols-2 md:grid-cols-3 gap-y-3 gap-x-6">
              {[
                "Directing", "Screenwriting", "Editing",
                "DOP / Camera", "Photography", "Producing",
                "Choreography", "Performance", "Design (print)",
                "Communication strategy", "Activism", "Concept development",
              ].map((c) => (
                <p key={c} className="text-bone border-b border-border/50 pb-2">{c}</p>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
