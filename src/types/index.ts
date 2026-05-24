// ─────────────────────────────────────────────
// Core data types for the Space Tourism site
// ─────────────────────────────────────────────

export interface Destination {
  name: string;
  images: {
    png: string;
    webp: string;
  };
  description: string;
  distance: string;
  travel: string;
}

export interface CrewMember {
  name: string;
  images: {
    png: string;
    webp: string;
  };
  role: string;
  bio: string;
}

export interface Technology {
  name: string;
  images: {
    portrait: string;
    landscape: string;
  };
  description: string;
}

export interface SiteData {
  destinations: Destination[];
  crew: CrewMember[];
  technology: Technology[];
}

export type Page = 'home' | 'destination' | 'crew' | 'technology';
