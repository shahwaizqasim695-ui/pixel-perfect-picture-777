import { Link } from "@tanstack/react-router";
import { Mail } from "lucide-react";
import { site } from "@/data/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-deep text-ivory">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Link to="/" className="font-display text-2xl tracking-wide">
              Adam <span className="text-gold">Sommers</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-ivory/60">
              Author of suspenseful fiction and imaginative stories for
              younger readers — tales written to stay with you long after the
              last page.
            </p>
          </div>

          <div>
            <h3 className="eyebrow !text-gold">Explore</h3>
            <nav className="mt-5 flex flex-col gap-3" aria-label="Footer">
              {site.nav.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="text-sm text-ivory/70 transition-colors hover:text-gold"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="eyebrow !text-gold">Get In Touch</h3>
            <a
              href={`mailto:${site.email}`}
              className="mt-5 inline-flex items-center gap-2 text-sm text-ivory/70 transition-colors hover:text-gold"
            >
              <Mail className="h-4 w-4 text-gold" aria-hidden="true" />
              {site.email}
            </a>
            {site.socials.length > 0 && (
              <div className="mt-5 flex gap-4">
                {site.socials.map((s) => (
                  <a
                    key={s.url}
                    href={s.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-ivory/70 transition-colors hover:text-gold"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="hairline-gold mt-14" />
        <p className="mt-6 text-center text-xs tracking-[0.2em] text-ivory/40 uppercase">
          © {year} Adam Sommers. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
