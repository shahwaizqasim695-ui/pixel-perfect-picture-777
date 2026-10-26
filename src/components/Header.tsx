import { useEffect, useState } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const light = isHome && !scrolled && !open;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-border bg-background/90 shadow-[0_8px_30px_-18px_oklch(0.212_0.033_253/0.5)] backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto grid h-[76px] max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 sm:flex sm:justify-between sm:px-8">
        <Link
          to="/"
          className={cn(
            "font-display text-xl tracking-wide transition-colors sm:text-2xl",
            light ? "text-ivory" : "text-primary",
          )}
          aria-label="Adam Sommers — Home"
        >
          Adam{" "}
          <span className={cn(light ? "text-gold" : "text-gold")}>
            Sommers
          </span>
        </Link>

        <nav
          className="hidden items-center gap-8 md:flex"
          aria-label="Primary"
        >
          {site.nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: true }}
              className={cn(
                "text-[0.8rem] font-semibold tracking-[0.18em] uppercase transition-colors",
                light
                  ? "text-ivory/75 hover:text-ivory"
                  : "text-muted-foreground hover:text-foreground",
                "[&.data-[status=active]]:",
                "data-[status=active]:text-gold",
              )}
            >
              {item.label}
            </Link>
          ))}
          <Link to="/books" className={cn("btn btn-gold !py-2.5 !px-5", light && "btn-gold")}>
            Explore Books
          </Link>
        </nav>

        <button
          type="button"
          className={cn(
            "flex h-10 w-10 items-center justify-center rounded-sm transition-colors md:hidden",
            light ? "text-ivory" : "text-primary",
          )}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 top-[76px] z-40 flex flex-col bg-navy px-8 py-10 md:hidden">
          <nav className="flex flex-col gap-6" aria-label="Mobile">
            {site.nav.map((item, i) => (
              <Link
                key={item.to}
                to={item.to}
                className="font-display text-3xl text-ivory/90 transition-colors hover:text-gold"
                style={{ animation: `rise-in 500ms ${i * 70}ms cubic-bezier(0.22,1,0.36,1) both` }}
              >
                {item.label}
              </Link>
            ))}
            <Link to="/books" className="btn btn-gold mt-4 w-fit">
              Explore Books
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
