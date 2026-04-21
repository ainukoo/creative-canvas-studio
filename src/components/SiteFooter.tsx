import { Link } from "react-router-dom";

export function SiteFooter() {
  return (
    <footer className="border-t border-border mt-24">
      <div className="px-6 md:px-10 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <p className="label-mono text-muted-foreground mb-3">Contact</p>
          <a
            href="mailto:ainu.kyronseppa@gmail.com"
            className="font-display text-2xl md:text-3xl text-bone hover:text-amber transition-colors"
          >
            ainu.kyronseppa<br />@gmail.com
          </a>
        </div>
        <div>
          <p className="label-mono text-muted-foreground mb-3">Elsewhere</p>
          <ul className="space-y-2">
            <li>
              <a
                href="https://instagram.com/ainukyronseppa"
                target="_blank"
                rel="noreferrer"
                className="text-bone hover:text-amber transition-colors"
              >
                Instagram ↗
              </a>
            </li>
            <li>
              <a
                href="https://vimeo.com/ainukyronseppa"
                target="_blank"
                rel="noreferrer"
                className="text-bone hover:text-amber transition-colors"
              >
                Vimeo ↗
              </a>
            </li>
            <li>
              <a
                href="https://www.operaatioarktis.fi/"
                target="_blank"
                rel="noreferrer"
                className="text-bone hover:text-amber transition-colors"
              >
                Operaatio Arktis ↗
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className="label-mono text-muted-foreground mb-3">Index</p>
          <ul className="space-y-2">
            <li><Link to="/work" className="text-bone hover:text-amber transition-colors">Work</Link></li>
            <li><Link to="/about" className="text-bone hover:text-amber transition-colors">About</Link></li>
            <li><Link to="/cv" className="text-bone hover:text-amber transition-colors">CV</Link></li>
            <li><Link to="/contact" className="text-bone hover:text-amber transition-colors">Contact</Link></li>
          </ul>
        </div>
      </div>
      <div className="px-6 md:px-10 pb-8 pt-4 flex flex-col md:flex-row justify-between gap-3 label-mono text-muted-foreground">
        <span>© {new Date().getFullYear()} Ainu Kyrönseppä</span>
        <span>Filmmaker · Director · Editor — Helsinki, FI</span>
      </div>
    </footer>
  );
}
