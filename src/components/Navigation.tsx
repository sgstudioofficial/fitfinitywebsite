import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Coaches", path: "/coaches" },
    { name: "Membership", path: "/membership" },
    { name: "Facilities", path: "/facilities" },
    { name: "Gallery", path: "/gallery" },
    { name: "Testimonials", path: "/testimonials" },
    { name: "Contact", path: "/contact" },
  ];

  const formLink = "https://forms.gle/LLyeNRaPxieA1pEB8";

  return (
      <nav
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
              isScrolled ? "glass backdrop-blur-lg py-2" : "bg-transparent py-4"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 group">
              <img
                  src="/images/founders/logo.png"
                  alt="Fitfinity Logo"
                  className="h-8 w-12 group-hover:scale-110 transition-transform"
              />
              <span className="text-2xl font-bold text-gradient-gold font-bebas tracking-wider uppercase">
              Fitfinity
            </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                  <Link
                      key={item.name}
                      to={item.path}
                      className={`relative text-sm font-medium transition-colors duration-200 hover:text-primary ${
                          location.pathname === item.path
                              ? "text-primary"
                              : "text-foreground"
                      }`}
                  >
                    {item.name}
                    {location.pathname === item.path && (
                        <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-accent"></span>
                    )}
                  </Link>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <a
                  href={formLink}
                  target="_blank"
                  rel="noopener noreferrer"
              >
                <Button
                    variant="outline"
                    size="sm"
                    className="btn-outline-premium hover:shadow-[0_0_15px_rgba(255,215,0,0.6)] hover:border-primary/50 transition-all duration-300"
                >
                  Book Trial
                </Button>
              </a>
              <a
                  href={formLink}
                  target="_blank"
                  rel="noopener noreferrer"
              >
                <Button
                    size="sm"
                    className="btn-premium hover:shadow-[0_0_20px_rgba(255,215,0,0.8)] hover:scale-105 transition-all duration-300"
                >
                  Join Now
                </Button>
              </a>
            </div>

            {/* Mobile menu button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden p-2 rounded-lg glass text-foreground hover:text-primary transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
              <div className="md:hidden mt-4 glass-card rounded-xl p-6">
                <div className="flex flex-col space-y-4">
                  {navItems.map((item) => (
                      <Link
                          key={item.name}
                          to={item.path}
                          onClick={() => setIsOpen(false)}
                          className={`text-base font-medium transition-colors duration-200 hover:text-primary ${
                              location.pathname === item.path
                                  ? "text-primary"
                                  : "text-foreground"
                          }`}
                      >
                        {item.name}
                      </Link>
                  ))}
                  <div className="flex flex-col space-y-3 pt-4 border-t border-border">
                    <a
                        href={formLink}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                      <Button
                          variant="outline"
                          size="sm"
                          className="btn-outline-premium hover:shadow-[0_0_15px_rgba(255,215,0,0.6)] hover:border-primary/50 transition-all duration-300"
                      >
                        Book Trial
                      </Button>
                    </a>
                    <a
                        href={formLink}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                      <Button
                          size="sm"
                          className="btn-premium hover:shadow-[0_0_20px_rgba(255,215,0,0.8)] hover:scale-105 transition-all duration-300"
                      >
                        Join Now
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
          )}
        </div>
      </nav>
  );
};

export default Navigation;
