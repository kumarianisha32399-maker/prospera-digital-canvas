import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { usePortfolio } from "../lib/portfolio-store";

const navItems = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Skills", to: "/", hash: "skills" },
  { label: "Projects", to: "/projects" },
  { label: "Services", to: "/services" },
  { label: "Experience", to: "/", hash: "experience" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const { data } = usePortfolio();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full border-b border-navy-foreground/10 bg-navy/95 backdrop-blur transition-all duration-300 ${
        scrolled ? "py-1 shadow-lg shadow-navy/30" : "py-3"
      }`}
    >
      <nav
        aria-label="Main navigation"
        className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8"
      >
        <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-royal font-display text-sm font-bold text-primary-foreground">
            PA
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-display text-sm font-semibold text-navy-foreground sm:text-base">
              Prospera Arcon LLP
            </span>
            <span className="text-[0.65rem] tracking-[0.16em] text-cyan uppercase">Pune</span>
          </span>
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <li key={item.label}>
              <Link
                to={item.to}
                hash={item.hash}
                className="rounded-md px-3 py-2 text-sm font-medium text-navy-foreground/75 transition-colors hover:bg-navy-foreground/10 hover:text-navy-foreground"
                activeOptions={{ exact: true, includeHash: false }}
                activeProps={{ className: "text-navy-foreground" }}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <Link to="/contact" className="btn-base btn-primary hidden sm:inline-flex">
            Let&apos;s Talk
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-lg border border-navy-foreground/25 lg:hidden"
          >
            <span
              className={`h-0.5 w-5 bg-navy-foreground transition-transform ${open ? "translate-y-2 rotate-45" : ""}`}
            />
            <span className={`h-0.5 w-5 bg-navy-foreground transition-opacity ${open ? "opacity-0" : ""}`} />
            <span
              className={`h-0.5 w-5 bg-navy-foreground transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`}
            />
          </button>
        </div>
      </nav>

      {open ? (
        <div id="mobile-nav" className="lg:hidden">
          <ul className="mx-4 mt-3 flex flex-col gap-1 rounded-xl border border-navy-foreground/10 bg-navy-soft p-3 sm:mx-6">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  to={item.to}
                  hash={item.hash}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-3 text-sm font-medium text-navy-foreground/85 transition-colors hover:bg-navy-foreground/10"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="btn-base btn-primary mt-2 w-full"
              >
                Let&apos;s Talk
              </Link>
            </li>
            <li className="px-3 pt-2 text-xs text-navy-foreground/50">{data.contact.phone}</li>
          </ul>
        </div>
      ) : null}
    </header>
  );
}
