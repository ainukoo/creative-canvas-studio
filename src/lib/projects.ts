import workArctic from "@/assets/work-arctic.jpg";
import workRaja from "@/assets/work-raja.jpg";
import workLimbless from "@/assets/work-limbless.jpg";
import workTulva from "@/assets/work-tulva.jpg";
import workArts from "@/assets/work-arts.jpg";
import workBeef from "@/assets/work-beef.jpg";
import workTahs from "@/assets/work-tahs.jpg";

export type Project = {
  slug: string;
  title: string;
  year: string;
  category: string;
  roles: string[];
  format: string;
  image: string;
  blurb?: string;
  link?: { label: string; href: string };
};

export const projects: Project[] = [
  {
    slug: "raja",
    title: "Raja",
    year: "2025",
    category: "Series & Shortfilm",
    roles: ["Screenwriter", "Director", "Editor"],
    format: "Four-episode series & shortfilm — Tuotanto Tasanko, for YLE",
    image: workRaja,
    blurb: "Looking for a world premiere.",
    link: { label: "@tasanko_production", href: "https://instagram.com/tasanko_production" },
  },
  {
    slug: "operaatio-arktis",
    title: "Operaatio Arktis",
    year: "2022—",
    category: "NGO / Climate",
    roles: ["Co-founder", "Producer", "Video Editor", "Photographer"],
    format: "Non-profit NGO — climate communication strategy",
    image: workArctic,
    blurb: "Public awareness on Arctic sea ice and climate mitigation.",
    link: { label: "operaatioarktis.fi", href: "https://www.operaatioarktis.fi/" },
  },
  {
    slug: "limbless",
    title: "Limbless",
    year: "2023",
    category: "Shortfilm",
    roles: ["Screenwriter", "Director", "DOP", "Producer", "Editor"],
    format: "Shortfilm — 7:38",
    image: workLimbless,
    link: { label: "Watch on Vimeo", href: "https://vimeo.com/857658463" },
  },
  {
    slug: "beef-of-happiness",
    title: "Beef of Happiness",
    year: "2024",
    category: "Shortfilm",
    roles: ["Screenwriter", "Assistant Director", "Editor"],
    format: "Shortfilm — Tuotanto Tasanko",
    image: workBeef,
    blurb: "Looking for a world premiere.",
    link: { label: "Trailer", href: "https://filmfreeway.com/BEEFOFHAPPINESS" },
  },
  {
    slug: "arts-eerika-sirola",
    title: "Arts × Eerika Sirola",
    year: "2024",
    category: "Editorial Photography",
    roles: ["Photographer"],
    format: "Hair salon pop-up — editorial",
    image: workArts,
  },
  {
    slug: "tahs-50v",
    title: "TAHS 50v Live Band",
    year: "2024",
    category: "Music / Concert",
    roles: ["Photographer"],
    format: "Live band on film",
    image: workTahs,
  },
  {
    slug: "tulva",
    title: "Tulva",
    year: "2020",
    category: "Performance & Shortfilm",
    roles: ["Choreographer", "Performer", "Producer", "Editor"],
    format: "Performance & shortfilm — for URB20",
    image: workTulva,
    link: { label: "Trailer", href: "https://vimeo.com/487303514" },
  },
];
