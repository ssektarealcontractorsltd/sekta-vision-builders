import { Link } from "react-router-dom";
import { Phone, MapPin, Facebook, Instagram, MessageCircle } from "lucide-react";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="section-container py-12 sm:py-16">
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div>
          <h3 className="text-lg font-black">Ssekta Real Contructors</h3>
          <p className="mt-2 text-sm italic text-primary-foreground/70">
            "Only the best is good enough"
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="mb-3 text-sm font-bold uppercase tracking-wider text-primary-foreground/60">Quick Links</h4>
          <div className="flex flex-col gap-2">
            {["Home", "About", "Portfolio", "Contact"].map((item) => (
              <Link
                key={item}
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className="text-sm text-primary-foreground/80 transition-colors hover:text-accent"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4 className="mb-3 text-sm font-bold uppercase tracking-wider text-primary-foreground/60">Contact</h4>
          <div className="flex flex-col gap-2 text-sm text-primary-foreground/80">
            <a href="tel:+256705941023" className="flex items-center gap-2 hover:text-accent">
              <Phone className="h-4 w-4" /> +256 705 941023
            </a>
            <a href="tel:+256776529485" className="flex items-center gap-2 hover:text-accent">
              <Phone className="h-4 w-4" /> +256 776 529485
            </a>
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4" /> Seeta Namilyango Road, Mukono, Uganda
            </span>
          </div>
        </div>

        {/* Social */}
        <div>
          <h4 className="mb-3 text-sm font-bold uppercase tracking-wider text-primary-foreground/60">Follow Us</h4>
          <div className="flex gap-3">
            <a
              href="https://www.facebook.com/yourpage" // Replace with actual Facebook URL
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-foreground/10 transition-colors hover:bg-accent"
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a
              href="https://www.instagram.com/yourpage" // Replace with actual Instagram URL
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-foreground/10 transition-colors hover:bg-accent"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="https://www.tiktok.com/@andrew.ssekta"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-foreground/10 transition-colors hover:bg-accent"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-primary-foreground/10 pt-6 text-center text-xs text-primary-foreground/50">
        © {new Date().getFullYear()} Ssekta Real Contructors. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;