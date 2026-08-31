// Navbar.tsx - With #0f1729 background on non-hero pages
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/Images/Logos/Sekta-Real-Constructors-Logo.png";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Portfolio", path: "/portfolio" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (path: string) => {
    setIsOpen(false);
    if (path.startsWith("/#")) {
      const id = path.slice(2);
      if (location.pathname === "/") {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      } else {
        window.location.href = path;
      }
    }
  };

  // Determine navbar background
  const getNavbarBg = () => {
    if (!isHome) return "bg-[#0f1729] border-b border-white/10 shadow-lg";
    if (scrolled) return "bg-[#0f1729] border-b border-white/10 shadow-lg";
    return "bg-white/5 backdrop-blur-[2px] border-b border-white/5";
  };

  return (
    <>
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${getNavbarBg()}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between sm:h-20">
            <Link to="/" className="flex items-center gap-2 sm:gap-3">
              <img
                src={logo}
                alt="Ssekta Real Contractors Ltd."
                className="h-8 w-auto sm:h-11"
              />
              <span className="text-white text-base sm:text-xl font-semibold tracking-tight">
                Ssekta <span className="text-[#f86b0d]">Real</span> Contractors Ltd.
              </span>
            </Link>

            <div className="hidden items-center gap-6 lg:flex">
              {navItems.map((item) =>
                item.path.startsWith("/#") ? (
                  <button
                    key={item.label}
                    onClick={() => handleNavClick(item.path)}
                    className="text-sm font-medium text-white/70 transition-colors duration-150 hover:text-white relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-[#f86b0d] after:transition-all hover:after:w-full"
                  >
                    {item.label}
                  </button>
                ) : (
                  <Link
                    key={item.label}
                    to={item.path}
                    className="text-sm font-medium text-white/70 transition-colors duration-150 hover:text-white relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-[#f86b0d] after:transition-all hover:after:w-full"
                  >
                    {item.label}
                  </Link>
                )
              )}
              <a
                href="tel:+256705941023"
                className="bg-[#f86b0d] hover:bg-[#ff7a1a] text-white font-semibold px-6 py-2.5 rounded-[8px] transition-all hover:scale-105 flex items-center gap-2"
              >
                <Phone className="h-4 w-4" />
                Call Now
              </a>
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="rounded-lg p-2 text-white transition-colors hover:bg-white/10 lg:hidden"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu container */}
      <div
        className={`fixed top-0 right-0 h-full w-[320px] max-w-[85%] bg-[#0f1729] z-[100] shadow-2xl border-l border-white/5 transition-transform duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } lg:hidden overflow-y-auto`}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 p-2 text-white/70 hover:text-white transition-colors"
          aria-label="Close menu"
        >
          <X className="h-6 w-6" />
        </button>

        <div className="px-6 pt-20 pb-8 flex flex-col gap-1">
          {navItems.map((item) =>
            item.path.startsWith("/#") ? (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.path)}
                className="rounded-lg px-4 py-3 text-left text-base font-medium text-white/70 transition-colors hover:bg-white/5 hover:text-white border-b border-white/5"
              >
                {item.label}
              </button>
            ) : (
              <Link
                key={item.label}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className="rounded-lg px-4 py-3 text-base font-medium text-white/70 transition-colors hover:bg-white/5 hover:text-white border-b border-white/5"
              >
                {item.label}
              </Link>
            )
          )}
          <div className="mt-4 pt-2">
            <a
              href="tel:+256705941023"
              className="w-full bg-[#f86b0d] hover:bg-[#ff7a1a] text-white font-semibold py-3 rounded-[8px] flex items-center justify-center gap-2 transition-all hover:scale-105"
            >
              <Phone className="h-4 w-4" />
              Call Now
            </a>
          </div>
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-[#0f1729]/60 backdrop-blur-sm z-[90] lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;