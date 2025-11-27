// src/components/Header.tsx
import { Menu, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";

interface HeaderProps {
  scrolled: boolean;
}

export default function Header({ scrolled }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Fermer le menu mobile si on clique à l'extérieur
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false); // Fermer le menu mobile après un clic
  };

  const navLinks = [
    { label: "L'histoire", id: "about" },
    { label: "Produits", id: "products" },
    { label: "Nos valeurs", id: "values" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-500 ease-in-out ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("hero");
            }}
            className={`text-3xl font-bold transition-colors duration-300 ${
              scrolled ? "text-slate-800" : "text-white"
            }`}
            aria-label="Retour à l'accueil"
          >
            JAD
          </a>

          {/* Navigation Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.id);
                }}
                className={`relative text-sm font-medium transition-all duration-300 group ${
                  scrolled
                    ? "text-slate-600 hover:text-green-600"
                    : "text-white/90 hover:text-white"
                }`}
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Bouton CTA Desktop */}
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("contact");
            }}
            className={`hidden md:block px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105 ${
              scrolled
                ? "bg-green-600 text-white shadow-md hover:bg-green-700"
                : "bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white/30"
            }`}
          >
            Nous contacter
          </a>

          {/* Bouton Menu Mobile */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-md transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-inset ${
              scrolled
                ? "text-slate-800 hover:bg-slate-100 focus:ring-green-500"
                : "text-white hover:bg-white/10 focus:ring-white"
            }`}
            aria-label="Ouvrir le menu de navigation"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Menu Mobile */}
        {isOpen && (
          <div
            ref={menuRef}
            className="md:hidden mt-4 bg-white rounded-lg shadow-xl border border-slate-200 overflow-hidden"
          >
            <nav className="flex flex-col p-4 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.id);
                  }}
                  className="block py-3 px-4 text-base font-medium text-slate-700 rounded-md hover:bg-green-50 hover:text-green-600 transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-4 mt-4 border-t border-slate-200">
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("contact");
                  }}
                  className="block w-full text-center px-4 py-3 bg-green-600 text-white rounded-md font-semibold hover:bg-green-700 transition-colors duration-300"
                >
                  Nous contacter
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}