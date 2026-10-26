import { createFileRoute, Link } from "@tanstack/react-router";
import { PenLine } from "lucide-react";
import { site } from "@/data/site";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Adam Sommers — Author" },
      {
        name: "description",
        content:
          "Meet Adam Sommers, author of suspenseful fiction and imaginative stories for younger readers. The storyteller behind the pages.",
      },
      { property: "og:title", content: "About Adam Sommers — Author" },
      {
        property: "og:description",
        content:
          "Meet Adam Sommers, author of suspenseful fiction and imaginative stories for younger readers.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <main className="pt-[76px]">
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy py-24 sm:py-32">
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(55% 55% at 75% 30%, oklch(0.745 0.078 78 / 0.1), transparent 70%)",
          }}
        />
        <Reveal className="relative mx-auto max-w-3xl px-5 text-center sm:px-8">
          <span className="eyebrow justify-center">About</span>
          <h1 className="font-display mt-5 text-5xl text-ivory sm:text-6xl">
            Meet Adam Sommers
          </h1>
          <p className="mt-5 text-lg text-ivory/70 italic">
            The Storyteller Behind the Pages
          </p>
        </Reveal>
      </section>

      {/* Biography */}
      <section className="bg-background py-24 sm:py-32">
        <div className="mx-auto grid max-w-5xl items-start gap-14 px-5 sm:px-8 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]">
          <Reveal>
            <div className="relative mx-auto max-w-xs">
              <div
                className="absolute -inset-4 border border-gold/40"
                aria-hidden="true"
              />
              <div
                className="flex aspect-[4/5] items-center justify-center bg-navy"
                role="img"
                aria-label="Author portrait coming soon"
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

          <Reveal delay={120}>
            <span className="eyebrow">Biography</span>
            <h2 className="font-display mt-4 text-4xl text-primary">
              The Author
            </h2>
            <div className="hairline-gold my-7 max-w-xs" />
            {site.biographyPending ? (
              <div className="space-y-5">
                <p className="drop-cap leading-relaxed text-muted-foreground">
                  A full biography is on its way. This space is being prepared
                  for Adam&apos;s own words — his journey as a writer, the
                  stories that shaped him, and the moments behind the books.
                </p>
                <p className="leading-relaxed text-muted-foreground">
                  In the meantime, the books speak for themselves: darker,
                  suspenseful fiction for grown-up readers, and imaginative
                  tales that carry younger readers somewhere they have never
                  been.
                </p>
              </div>
            ) : null}
          </Reveal>
        </div>
      </section>

      {/* The Writing */}
      <section className="bg-softgray py-24 sm:py-32">
        <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
          <Reveal>
            <span className="eyebrow justify-center">
              <PenLine className="h-3.5 w-3.5" aria-hidden="true" /> The
              Writing
            </span>
            <h2 className="font-display mt-5 text-4xl text-primary sm:text-5xl">
              Two Worlds, One Voice
            </h2>
            <div className="hairline-gold mx-auto my-8 max-w-xs" />
            <p className="text-lg leading-relaxed text-muted-foreground">
              {site.writingIntro}
            </p>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              The suspense arrives slowly and stays late; the imagination
              arrives early and never quite leaves. Both are written the same
              way — around characters who feel real and moments that linger
              long after the last page is turned.
            </p>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-background py-24">
        <Reveal className="mx-auto max-w-3xl px-5 text-center sm:px-8">
          <h2 className="font-display text-3xl text-primary sm:text-4xl">
            Discover Adam&apos;s Books
          </h2>
          <p className="mt-4 text-muted-foreground">
            Suspense for grown-up readers. Wonder for younger ones.
          </p>
          <Link to="/books" className="btn btn-gold mt-9">
            Discover Adam&apos;s Books
          </Link>
        </Reveal>
      </section>
    </main>
  );
}
