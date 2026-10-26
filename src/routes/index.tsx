import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDown, ArrowRight, BookOpen, Quote } from "lucide-react";
import { books, site, verifiedReviews } from "@/data/site";
import { BookCard } from "@/components/BookCard";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Adam Sommers — Stories That Stay With You" },
      {
        name: "description",
        content:
          "Explore the imaginative worlds, unforgettable characters, and compelling stories of author Adam Sommers — suspenseful fiction and imaginative tales for younger readers.",
      },
      { property: "og:title", content: "Adam Sommers — Stories That Stay With You" },
      {
        property: "og:description",
        content:
          "Explore the imaginative worlds, unforgettable characters, and compelling stories of author Adam Sommers.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const spotlight = books[0];
  const center = books[1];
  const sides = [books[0], books[2]];

  return (
    <main>
      {/* ============ HERO ============ */}
      <section className="relative flex min-h-screen items-center overflow-hidden bg-navy pt-[76px]">
        {/* Atmosphere */}
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(60% 50% at 70% 35%, oklch(0.745 0.078 78 / 0.14), transparent 70%), radial-gradient(45% 40% at 20% 80%, oklch(0.35 0.05 250 / 0.5), transparent 70%)",
          }}
        />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-40"
          aria-hidden="true"
          style={{
            background:
              "linear-gradient(to bottom, transparent, oklch(0.14 0.03 253 / 0.9))",
          }}
        />

        <div className="relative mx-auto grid w-full max-w-6xl items-center gap-16 px-5 py-24 sm:px-8 lg:grid-cols-[1.1fr_1fr]">
          {/* Left: headline */}
          <div>
            <span
              className="eyebrow animate-rise"
              style={{ animationDelay: "100ms" }}
            >
              Author · Suspense & Imagination
            </span>
            <h1
              className="font-display animate-rise mt-6 text-5xl leading-[1.05] text-ivory sm:text-6xl lg:text-7xl"
              style={{ animationDelay: "220ms" }}
            >
              Stories That
              <br />
              Stay With{" "}
              <span className="text-gold italic">You.</span>
            </h1>
            <p
              className="animate-rise mt-7 max-w-md text-base leading-relaxed text-ivory/70 sm:text-lg"
              style={{ animationDelay: "380ms" }}
            >
              Explore the imaginative worlds, unforgettable characters, and
              compelling stories of author Adam Sommers.
            </p>
            <div
              className="animate-rise mt-10 flex flex-wrap gap-4"
              style={{ animationDelay: "500ms" }}
            >
              <Link to="/books" className="btn btn-gold">
                Explore My Books
              </Link>
              <Link to="/about" className="btn btn-outline-light">
                Meet the Author
              </Link>
            </div>
          </div>

          {/* Right: 3D cover arrangement */}
          <div
            className="relative mx-auto hidden h-[480px] w-full max-w-[420px] items-center justify-center sm:flex"
            style={{ perspective: "1200px" }}
            aria-hidden="true"
          >
            {sides.map((book, i) => (
              <div
                key={book.slug}
                className="absolute"
                style={
                  {
                    "--cover-rot": `${i === 0 ? -10 : 10}deg`,
                    transform: `translateX(${i === 0 ? -120 : 120}px) translateY(${i === 0 ? 34 : 26}px) rotateY(${i === 0 ? 16 : -16}deg)`,
                    zIndex: 10,
                    animation: `slow-float ${6 + i}s ease-in-out infinite`,
                  } as React.CSSProperties
                }
              >
                <img
                  src={book.cover}
                  alt=""
                  className="h-[330px] w-auto rounded-sm shadow-[0_50px_80px_-30px_oklch(0.05_0.02_253/0.9)]"
                  style={{
                    transform: `rotate(${i === 0 ? -10 : 10}deg)`,
                  }}
                />
              </div>
            ))}
            <div
              className="absolute z-20"
              style={{
                transform: "translateY(-14px) scale(1.06)",
                animation: "slow-float 7s ease-in-out infinite",
              }}
            >
              <img
                src={center.cover}
                alt=""
                className="h-[400px] w-auto rounded-sm shadow-[0_60px_100px_-30px_oklch(0.05_0.02_253/0.95)]"
              />
            </div>
          </div>

          {/* Mobile covers: simple row */}
          <div className="flex justify-center gap-4 sm:hidden">
            {books.map((b) => (
              <img
                key={b.slug}
                src={b.cover}
                alt={`Cover of ${b.title}`}
                className="h-44 w-auto rounded-sm shadow-[0_25px_40px_-15px_oklch(0.05_0.02_253/0.9)] first:-rotate-6 last:rotate-6"
              />
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <a
          href="#featured-books"
          className="animate-scroll-hint absolute bottom-8 left-1/2 -translate-x-1/2 text-ivory/60 transition-colors hover:text-gold"
          aria-label="Scroll to featured books"
        >
          <ArrowDown className="h-5 w-5" />
        </a>
      </section>

      {/* ============ FEATURED BOOKS ============ */}
      <section id="featured-books" className="bg-background py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="eyebrow justify-center">Featured Books</span>
            <h2 className="font-display mt-4 text-4xl text-primary sm:text-5xl">
              Discover the Stories
            </h2>
            <p className="mt-5 text-muted-foreground">
              Three books, two worlds — one voice. Suspense for grown-up
              readers and wonder for younger ones.
            </p>
          </Reveal>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {books.map((book, i) => (
              <Reveal key={book.slug} delay={i * 120}>
                <BookCard book={book} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ AUTHOR PREVIEW ============ */}
      <section className="bg-softgray py-24 sm:py-32">
        <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 sm:px-8 md:grid-cols-2">
          <Reveal>
            <div className="relative mx-auto max-w-sm">
              <div
                className="absolute -inset-4 border border-gold/40"
                aria-hidden="true"
              />
              <div
                className="flex aspect-[4/5] items-center justify-center bg-navy"
                aria-label="Author portrait coming soon"
                role="img"
              >
                <div className="text-center">
                  <span className="font-display text-7xl text-gold">AS</span>
                  <p className="mt-4 text-[0.65rem] font-semibold tracking-[0.3em] text-ivory/50 uppercase">
                    Portrait Coming Soon
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <span className="eyebrow">About the Author</span>
            <h2 className="font-display mt-4 text-4xl text-primary sm:text-5xl">
              The Mind Behind the Stories
            </h2>
            <div className="hairline-gold my-7 max-w-xs" />
            <p className="text-lg leading-relaxed text-muted-foreground">
              {site.writingIntro}
            </p>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              From storms at sea to the corridors of power to a ten-year-old
              who wakes up as a lion — every book is built on characters you
              remember and moments that linger.
            </p>
            <Link to="/about" className="btn btn-outline-dark mt-9">
              More About Adam
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ============ STORY SPOTLIGHT ============ */}
      <section className="relative overflow-hidden bg-navy py-24 sm:py-32">
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(55% 60% at 80% 20%, oklch(0.3 0.05 235 / 0.55), transparent 70%), radial-gradient(50% 45% at 10% 90%, oklch(0.745 0.078 78 / 0.08), transparent 70%)",
          }}
        />
        <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 sm:px-8 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]">
          <Reveal>
            <div className="relative mx-auto w-fit">
              <img
                src={spotlight.cover}
                alt={`Cover of ${spotlight.title} by Adam Sommers`}
                className="h-[440px] w-auto rounded-sm shadow-[0_60px_100px_-30px_oklch(0.05_0.02_253/0.95)]"
                loading="lazy"
              />
              <div
                className="absolute -inset-6 -z-10 border border-gold/25"
                aria-hidden="true"
              />
            </div>
          </Reveal>

          <Reveal delay={150}>
            <span className="eyebrow">Story Spotlight</span>
            <h2 className="font-display mt-4 text-4xl text-ivory sm:text-6xl">
              {spotlight.title}
            </h2>
            <div className="hairline-gold my-7 max-w-xs" />
            <p className="max-w-lg text-lg leading-relaxed text-ivory/70">
              {spotlight.teaser}
            </p>
            <div className="mt-10">
              <Link to="/books" className="btn btn-gold">
                Read More
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ REVIEWS PREVIEW ============ */}
      <section className="bg-background py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="eyebrow justify-center">Reader Reviews</span>
            <h2 className="font-display mt-4 text-4xl text-primary sm:text-5xl">
              What Readers Are Saying
            </h2>
          </Reveal>

          <div className="mx-auto mt-16 grid max-w-4xl gap-8 md:grid-cols-2">
            {verifiedReviews.map((review, i) => (
              <Reveal key={review.name} delay={i * 120}>
                <figure className="flex h-full flex-col border border-border bg-card p-8 shadow-[0_20px_50px_-30px_oklch(0.212_0.033_253/0.3)]">
                  <Quote className="h-8 w-8 text-gold/60" aria-hidden="true" />
                  <blockquote className="font-display mt-5 flex-1 text-lg leading-relaxed text-foreground italic">
                    “{review.quote}”
                  </blockquote>
                  <figcaption className="mt-6 border-t border-border pt-4 text-sm">
                    <span className="font-semibold text-foreground">
                      {review.name}
                    </span>
                    {review.bookTitle && (
                      <span className="block text-xs tracking-[0.16em] text-muted-foreground uppercase">
                        on {review.bookTitle}
                      </span>
                    )}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-14 text-center">
            <Link to="/reviews" className="btn btn-outline-dark">
              View Reader Reviews
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ============ CLOSING CTA ============ */}
      <section className="relative overflow-hidden bg-navy py-24 sm:py-28">
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(50% 60% at 50% 0%, oklch(0.745 0.078 78 / 0.1), transparent 70%)",
          }}
        />
        <Reveal className="relative mx-auto max-w-3xl px-5 text-center sm:px-8">
          <BookOpen className="mx-auto h-8 w-8 text-gold" aria-hidden="true" />
          <h2 className="font-display mt-6 text-4xl text-ivory sm:text-5xl">
            Your Next Great Read
            <br />
            Starts Here.
          </h2>
          <Link to="/books" className="btn btn-gold mt-10">
            Explore All Books
          </Link>
        </Reveal>
      </section>
    </main>
  );
}
