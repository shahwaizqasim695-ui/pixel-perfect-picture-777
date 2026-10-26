import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
import type { Book } from "@/data/site";

/**
 * Accessible book detail dialog: large cover, verified synopsis,
 * genre (when confirmed) and purchase link (when supplied).
 */
export function BookDialog({
  book,
  open,
  onClose,
}: {
  book: Book;
  open: boolean;
  onClose: () => void;
}) {
  const closeRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    const t = window.setTimeout(() => closeRef.current?.focus(), 50);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      window.clearTimeout(t);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[70] flex items-center justify-center p-4 sm:p-8"
      role="dialog"
      aria-modal="true"
      aria-label={`${book.title} details`}
    >
      <div
        className="absolute inset-0 bg-navy-deep/85 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        className="relative grid max-h-[88vh] w-full max-w-4xl overflow-y-auto rounded-lg bg-card shadow-[0_40px_120px_-30px_oklch(0.1_0.03_253/0.8)] md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]"
        style={{ animation: "rise-in 450ms cubic-bezier(0.22,1,0.36,1) both" }}
      >
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Close details"
          className="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-background/80 text-foreground transition-colors hover:bg-gold hover:text-navy"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="flex items-center justify-center bg-softgray p-8 md:p-10">
          <img
            src={book.cover}
            alt={`Cover of ${book.title} by Adam Sommers`}
            className="max-h-[60vh] w-auto max-w-full object-contain shadow-[0_30px_60px_-20px_oklch(0.15_0.03_253/0.55)]"
            loading="lazy"
          />
        </div>

        <div className="flex flex-col p-8 md:p-12">
          <span className="eyebrow">By {book.author}</span>
          <h3 className="font-display mt-3 text-3xl leading-tight text-primary sm:text-4xl">
            {book.title}
          </h3>
          <div className="hairline-gold my-6" />

          {book.synopsis ? (
            <p className="text-[0.95rem] leading-relaxed text-muted-foreground">
              {book.synopsis}
            </p>
          ) : (
            <p className="text-[0.95rem] leading-relaxed text-muted-foreground italic">
              Full synopsis coming soon — this space is ready for verified
              publisher copy.
            </p>
          )}

          <dl className="mt-8 space-y-3 text-sm">
            <div className="flex gap-2">
              <dt className="font-semibold tracking-[0.14em] text-foreground uppercase">
                Genre
              </dt>
              <dd className="text-muted-foreground italic">
                {book.genre ?? "To be confirmed"}
              </dd>
            </div>
            <div className="flex gap-2">
              <dt className="font-semibold tracking-[0.14em] text-foreground uppercase">
                Author
              </dt>
              <dd className="text-muted-foreground">{book.author}</dd>
            </div>
          </dl>

          <div className="mt-auto pt-8">
            {book.purchaseUrl ? (
              <a
                href={book.purchaseUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn-gold"
              >
                Buy the Book
              </a>
            ) : (
              <p className="text-xs tracking-[0.16em] text-muted-foreground uppercase">
                Purchase link coming soon
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
