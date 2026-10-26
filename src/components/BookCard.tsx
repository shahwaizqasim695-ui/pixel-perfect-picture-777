import { useState } from "react";
import type { Book } from "@/data/site";
import { BookDialog } from "./BookDialog";

/** Premium book card: original cover, exact title, verified teaser. */
export function BookCard({ book }: { book: Book }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <article className="group flex h-full flex-col border border-border bg-card p-6 pb-8 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_30px_60px_-25px_oklch(0.212_0.033_253/0.35)]">
        <div className="relative mb-6 flex justify-center overflow-hidden rounded-sm bg-softgray">
          <img
            src={book.cover}
            alt={`Cover of ${book.title} by Adam Sommers`}
            className="aspect-[2/3] w-full object-contain p-4 transition-transform duration-700 ease-out group-hover:scale-[1.045]"
            loading="lazy"
          />
          <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-navy/25 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        </div>

        <h3 className="font-display text-2xl leading-snug text-primary">
          {book.title}
        </h3>
        <p className="mt-1 text-[0.7rem] font-semibold tracking-[0.24em] text-muted-foreground uppercase">
          {book.author}
        </p>
        <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
          {book.teaser}
        </p>

        <button
          type="button"
          onClick={() => setOpen(true)}
          className="btn btn-outline-dark mt-6 w-full"
          aria-haspopup="dialog"
        >
          Discover the Book
        </button>
      </article>

      <BookDialog book={book} open={open} onClose={() => setOpen(false)} />
    </>
  );
}
