import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { books, type Book } from "@/data/site";
import { BookDialog } from "@/components/BookDialog";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/books")({
  head: () => ({
    meta: [
      { title: "Books — Adam Sommers" },
      {
        name: "description",
        content:
          "Explore the books of Adam Sommers — Sea No Evil, The Deviant, and The Boy Who Became A Lion. Stories filled with imagination, intrigue, and unforgettable moments.",
      },
      { property: "og:title", content: "Books — Adam Sommers" },
      {
        property: "og:description",
        content:
          "Explore the books of Adam Sommers — Sea No Evil, The Deviant, and The Boy Who Became A Lion.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BooksPage,
});

const showcases = [
  {
    book: books[0],
    theme: "dark-ocean",
    kicker: "Book One",
    heading:
      "Storm clouds mass over dark water in a maritime story charged with danger and consequence.",
  },
  {
    book: books[1],
    theme: "dark-capitol",
    kicker: "Book Two",
    heading:
      "A watchful gaze beneath the dome of the Capitol — a dark, slow-burning story of tension and suspicion.",
  },
  {
    book: books[2],
    theme: "warm",
    kicker: "Book Three",
    heading:
      "A clever ten-year-old boy wakes up with claws, fur and fangs — and a whole new set of problems.",
  },
] as const;

function BooksPage() {
  const [active, setActive] = useState<Book | null>(null);

  return (
    <main className="pt-[76px]">
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy py-24 sm:py-32">
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(55% 55% at 25% 25%, oklch(0.745 0.078 78 / 0.1), transparent 70%)",
          }}
        />
        <Reveal className="relative mx-auto max-w-3xl px-5 text-center sm:px-8">
          <span className="eyebrow justify-center">The Library</span>
          <h1 className="font-display mt-5 text-5xl text-ivory sm:text-6xl">
            Explore the Books
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-ivory/70">
            Discover stories filled with imagination, intrigue, and
            unforgettable moments.
          </p>
        </Reveal>
      </section>

      {/* Book showcases */}
      {showcases.map(({ book, theme, kicker, heading }, i) => (
        <section
          key={book.slug}
          className={cn(
            "relative overflow-hidden py-24 sm:py-32",
            theme === "warm" ? "bg-softgray" : "bg-navy-deep",
          )}
        >
          {theme !== "warm" && (
            <div
              className="pointer-events-none absolute inset-0"
              aria-hidden="true"
              style={{
                background:
                  theme === "dark-ocean"
                    ? "radial-gradient(60% 55% at 15% 30%, oklch(0.32 0.055 235 / 0.55), transparent 70%), radial-gradient(40% 40% at 90% 85%, oklch(0.745 0.078 78 / 0.07), transparent 70%)"
                    : "radial-gradient(60% 55% at 85% 25%, oklch(0.25 0.03 260 / 0.7), transparent 70%), radial-gradient(40% 40% at 10% 85%, oklch(0.745 0.078 78 / 0.06), transparent 70%)",
              }}
            />
          )}
          <div
            className={cn(
              "relative mx-auto grid max-w-6xl items-center gap-14 px-5 sm:px-8",
              i % 2 === 1
                ? "md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]"
                : "md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]",
            )}
          >
            {/* Cover */}
            <Reveal className={i % 2 === 1 ? "md:order-2" : undefined}>
              <div className="relative mx-auto w-fit">
                <img
                  src={book.cover}
                  alt={`Cover of ${book.title} by Adam Sommers`}
                  className={cn(
                    "w-auto rounded-sm",
                    theme === "warm"
                      ? "h-[460px] shadow-[0_50px_90px_-35px_oklch(0.3_0.04_70/0.55)]"
                      : "h-[440px] shadow-[0_60px_100px_-30px_oklch(0.05_0.02_253/0.95)]",
                  )}
                  loading="lazy"
                />
                <div
                  className={cn(
                    "absolute -inset-6 -z-10 border",
                    theme === "warm" ? "border-gold/50" : "border-gold/25",
                  )}
                  aria-hidden="true"
                />
              </div>
            </Reveal>

            {/* Copy */}
            <Reveal
              delay={140}
              className={i % 2 === 1 ? "md:order-1" : undefined}
            >
              <span className={cn("eyebrow", theme === "warm" && "!text-primary/60")}>
                {kicker}
              </span>
              <h2
                className={cn(
                  "font-display mt-4 text-4xl leading-tight sm:text-5xl",
                  theme === "warm" ? "text-primary" : "text-ivory",
                )}
              >
                {book.title}
              </h2>
              <p
                className={cn(
                  "mt-2 text-[0.7rem] font-semibold tracking-[0.28em] uppercase",
                  theme === "warm" ? "text-muted-foreground" : "text-gold",
                )}
              >
                By {book.author}
              </p>
              <div
                className={cn("hairline-gold my-7 max-w-xs", theme === "warm" && "opacity-80")}
              />
              <p
                className={cn(
                  "max-w-lg text-lg leading-relaxed",
                  theme === "warm" ? "text-muted-foreground" : "text-ivory/70",
                )}
              >
                {heading}
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => setActive(book)}
                  className={cn(
                    "btn",
                    theme === "warm" ? "btn-gold" : "btn-gold",
                  )}
                  aria-haspopup="dialog"
                >
                  View Details
                  <ArrowRight className="h-4 w-4" />
                </button>
                {book.purchaseUrl && (
                  <a
                    href={book.purchaseUrl}
                    target="_blank"
                    rel="noreferrer"
                    className={cn(
                      "btn",
                      theme === "warm" ? "btn-outline-dark" : "btn-outline-light",
                    )}
                  >
                    Buy the Book
                  </a>
                )}
              </div>
              {!book.purchaseUrl && (
                <p className="mt-4 text-xs tracking-[0.16em] text-muted-foreground uppercase">
                  Purchase link coming soon
                </p>
              )}
            </Reveal>
          </div>
        </section>
      ))}

      {active && (
        <BookDialog book={active} open onClose={() => setActive(null)} />
      )}
    </main>
  );
}
