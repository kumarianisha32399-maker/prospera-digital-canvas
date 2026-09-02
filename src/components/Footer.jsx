import { Link } from "@tanstack/react-router";
import { usePortfolio } from "../lib/portfolio-store";

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Projects", to: "/projects" },
  { label: "Services", to: "/services" },
  { label: "Contact", to: "/contact" },
];

export default function Footer() {
  const { data } = usePortfolio();
  const { contact, settings } = data;

  return (
    <footer className="bg-navy text-navy-foreground">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-royal font-display text-sm font-bold text-primary-foreground">
              PA
            </span>
            <span className="font-display text-base font-semibold">{contact.businessName}</span>
          </div>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-navy-foreground/65">
            A technical and creative digital portfolio demonstrating modern frontend practices,
            responsive interfaces and clean, maintainable implementation.
          </p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {contact.socials.map((social) => (
              <li key={social.id}>
                <a
                  href={social.url}
                  className="inline-flex rounded-lg border border-navy-foreground/20 px-3 py-1.5 text-xs font-semibold text-navy-foreground/80 transition-colors hover:border-cyan hover:text-cyan"
                >
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-wide uppercase">Quick Links</h3>
          <ul className="mt-4 space-y-2.5">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.to}
                  className="text-sm text-navy-foreground/65 transition-colors hover:text-cyan"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-wide uppercase">Contact</h3>
          <address className="mt-4 space-y-3 text-sm not-italic text-navy-foreground/65">
            <p>{contact.address}</p>
            <p>
              <a href={`tel:${contact.phone.replace(/\s/g, "")}`} className="transition-colors hover:text-cyan">
                {contact.phone}
              </a>
            </p>
            <p className="break-all">{contact.email}</p>
          </address>
        </div>
      </div>

      <div className="border-t border-navy-foreground/10">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 px-4 py-5 text-xs text-navy-foreground/55 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>{settings.footerCopyright}</p>
          <div className="flex items-center gap-4">
            <span className="rounded-full border border-navy-foreground/20 px-2.5 py-1">Demo portfolio</span>
            <Link
              to="/admin/login"
              className="font-semibold text-cyan underline-offset-4 transition-colors hover:underline"
            >
              Admin Login
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
