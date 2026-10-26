import seaNoEvilCover from "@/assets/sea-no-evil.jpg.asset.json";
import theDeviantCover from "@/assets/the-deviant.jpg.asset.json";
import lionCover from "@/assets/the-boy-who-became-a-lion.jpg.asset.json";

/**
 * Central editable content for the site.
 * Update books, biography, reviews, social links and purchase URLs here
 * without touching any layout code.
 *
 * CONTENT RULES:
 * - Only add purchase URLs, genres, publication dates, awards or reviews
 *   when the client supplies verified details.
 * - Fields set to null render as elegant placeholders on the site.
 */

export interface Book {
  slug: string;
  title: string;
  author: string;
  cover: string;
  /** Short editorial teaser used on cards — cover-inspired, safe copy */
  teaser: string;
  /** Full verified synopsis; null renders a "coming soon" placeholder */
  synopsis: string | null;
  /** Confirmed genre only; null renders a placeholder */
  genre: string | null;
  /** Real purchase URL only; null hides the buy button */
  purchaseUrl: string | null;
}

export const books: Book[] = [
  {
    slug: "sea-no-evil",
    title: "Sea No Evil",
    author: "Adam Sommers",
    cover: seaNoEvilCover.url,
    teaser:
      "Storm clouds mass over dark water in a maritime story charged with danger and consequence.",
    synopsis: null,
    genre: null,
    purchaseUrl: null,
  },
  {
    slug: "the-deviant",
    title: "The Deviant",
    author: "Adam Sommers",
    cover: theDeviantCover.url,
    teaser:
      "A watchful gaze beneath the dome of the Capitol — a dark, slow-burning story of tension and suspicion.",
    synopsis: null,
    genre: null,
    purchaseUrl: null,
  },
  {
    slug: "the-boy-who-became-a-lion",
    title: "The Boy Who Became A Lion",
    author: "Adam Sommers",
    cover: lionCover.url,
    teaser:
      "A clever ten-year-old boy wakes up with claws, fur and fangs — and a whole new set of problems.",
    synopsis:
      "Dominick Rivoli, a clever ten-year-old boy, suddenly discovers that he has grown claws, fur, and fangs. Now he must learn to navigate life as a powerful, hungry lion while handling school, homework, and everyday challenges.",
    genre: null,
    purchaseUrl: null,
  },
];

export interface Review {
  quote: string;
  name: string;
  bookTitle: string | null;
}

/** Verified reader praise transcribed from the client's cover materials. */
export const verifiedReviews: Review[] = [
  {
    quote:
      "One word sums up this little gem… Delightful! The more you think about the story, the more you realize it goes a lot deeper than a kid's book just for children.",
    name: "Eric Berger",
    bookTitle: "The Boy Who Became A Lion",
  },
  {
    quote:
      "What a charming story, with a wonderful message for anyone at any age. Looking forward to Volume 2.",
    name: "Emily Schumer",
    bookTitle: "The Boy Who Became A Lion",
  },
];

export const site = {
  author: "Adam Sommers",
  wordmark: "Adam Sommers",
  tagline: "Stories That Stay With You.",
  email: "Asommers2007@gmail.com",
  /** Author photo — add the real photo here when provided */
  portraitPlaceholder: true,
  /** Biography — replaced with verified copy when supplied by the client */
  biographyPending: true,
  /** The Writing — grounded in the client's brief */
  writingIntro:
    "Adam Sommers writes across two worlds: darker, suspenseful fiction for grown-up readers, and imaginative stories that carry younger readers somewhere they have never been.",
  /** Social links — activate only when real profiles are confirmed */
  socials: [] as { label: string; url: string }[],
  nav: [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Books", to: "/books" },
    { label: "Reviews", to: "/reviews" },
    { label: "Contact", to: "/contact" },
  ],
};
