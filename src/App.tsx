import { Routes, Route, Link } from "react-router-dom";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import Index from "@/pages/Index";
import Work from "@/pages/Work";
import Services from "@/pages/Services";
import About from "@/pages/About";
import CV from "@/pages/CV";
import Contact from "@/pages/Contact";

function NotFound() {
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

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <SiteHeader />
      <main>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/work" element={<Work />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/cv" element={<CV />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <SiteFooter />
      <div className="grain-overlay" aria-hidden="true" />
    </div>
  );
}
