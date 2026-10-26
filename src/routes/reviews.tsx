import { createFileRoute, Link } from "@tanstack/react-router";
import { BookHeart, Quote } from "lucide-react";
import { verifiedReviews } from "@/data/site";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Reader Reviews — Adam Sommers" },
      {
        name: "description",
        content:
          "Discover what readers are saying about Adam Sommers' stories — genuine words from real readers.",
      },
      { property: "og:title", content: "Reader Reviews — Adam Sommers" },
      {
        property: "og:description",
        content:
          "Discover what readers are saying about Adam Sommers' stories.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ReviewsPage,
});

function ReviewsPage() {
  return (
    <main className="pt-[76px]">
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy py-24 sm:py-32">
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(55% 55% at 70% 30%, oklch(0.745 0.078 78 / 0.1), transparent 70%)",
          }}
        />
        <Reveal className="relative mx-auto max-w-3xl px-5 text-center sm:px-8">
          <span className="eyebrow justify-center">Reviews</span>
          <h1 className="font-display mt-5 text-5xl text-ivory sm:text-6xl">
            Words From Readers
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-ivory/70">
            Discover what readers are saying about Adam Sommers&apos;
            stories.
          </p>
        </Reveal>
      </section>

      {/* Quote grid */}
      <section className="bg-background py-24 sm:py-32">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            {verifiedReviews.map((review, i) => (
              <Reveal key={review.name} delay={i * 120}>
                <figure className="flex h-full flex-col border border-border bg-card p-9 shadow-[0_25px_60px_-35px_oklch(0.212_0.033_253/0.4)]">
                  <span className="quote-mark" aria-hidden="true">
                    “
                  </span>
                  <blockquote className="font-display mt-3 flex-1 text-xl leading-relaxed text-foreground italic">
                    {review.quote}
                  </blockquote>
                  <figcaption className="mt-8 flex items-center gap-4 border-t border-border pt-5">
                    <span
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-navy font-display text-lg text-gold"
                      aria-hidden="true"
                    >
                      {review.name
                        .split(" ")
                        .map((p) => p[0])
                        .join("")}
                    </span>
                    <span>
                      <span className="block font-semibold text-foreground">
                        {review.name}
                      </span>
                      {review.bookTitle && (
                        <span className="block text-xs tracking-[0.16em] text-muted-foreground uppercase">
                          Reader · {review.bookTitle}
                        </span>
                      )}
                    </span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>

          {/* Placeholder for future verified reviews */}
          <Reveal delay={200} className="mt-8">
            <div className="flex flex-col items-center justify-center border border-dashed border-border bg-softgray/60 px-8 py-14 text-center">
              <BookHeart
                className="h-7 w-7 text-gold"
                aria-hidden="true"
              />
              <p className="font-display mt-4 text-2xl text-primary">
                More Reader Stories Coming Soon
              </p>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
                This space is reserved for genuine reader feedback. Only real,
                client-provided reviews will appear here — never invented
                ones.
              </p>
            </div>
          </Reveal>

          {/* CTA */}
          <Reveal className="mt-20 text-center">
            <h2 className="font-display text-3xl text-primary sm:text-4xl">
              Find Your Next Favorite Story
            </h2>
            <Link to="/books" className="btn btn-gold mt-8">
              Browse Books
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
