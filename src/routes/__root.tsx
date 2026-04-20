import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4 text-center">
      <p className="label-mono text-ember mb-6">404 — Cut from the final edit</p>
      <h1 className="font-display text-7xl md:text-9xl text-bone">Not found</h1>
      <p className="mt-4 max-w-md text-muted-foreground">
        This frame doesn't exist. Try the other side of the cut.
      </p>
      <Link
        to="/"
        className="mt-10 label-mono text-bone border border-border px-6 py-3 hover:bg-ember hover:text-background hover:border-transparent transition-colors"
      >
        ← Return to index
      </Link>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Ainu Kyrönseppä — Filmmaker, Director, Editor" },
      {
        name: "description",
        content:
          "Ainu Kyrönseppä — non-binary filmmaker, screenwriter, director, editor and photographer based in Helsinki. A growing toolbox.",
      },
      { name: "author", content: "Ainu Kyrönseppä" },
      { property: "og:title", content: "Ainu Kyrönseppä — Filmmaker, Director, Editor" },
      {
        property: "og:description",
        content: "A growing toolbox. Directing, screenwriting, photography, editing.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,500;9..144,700&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <SiteHeader />
      <main>
        <Outlet />
      </main>
      <SiteFooter />
      <div className="grain-overlay" aria-hidden="true" />
    </div>
  );
}
