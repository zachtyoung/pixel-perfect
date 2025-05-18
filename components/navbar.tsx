"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X, Code } from "lucide-react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "Work", href: "#portfolio" },
  { name: "Process", href: "#process" },
  { name: "Team", href: "#team" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute("href");
    if (href?.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        const offset = element.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({ top: offset });
      }
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 font-bold text-xl transition-colors"
        >
          <Code className="h-6 w-6" />
          <span className="hidden sm:inline">PixelPerfect</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={handleNavClick}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Button 
            size="sm" 
            className="hidden md:inline-flex"
            onClick={() => {
              const contact = document.querySelector("#contact");
              if (contact) {
                const offset = contact.getBoundingClientRect().top + window.scrollY;
                window.scrollTo({ top: offset });
              }
            }}
          >
            Get Started
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-sm border-b">
          <nav className="container flex flex-col py-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={handleNavClick}
                className="py-3 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.name}
              </Link>
            ))}
            <Button 
              size="sm" 
              className="mt-4"
              onClick={() => {
                const contact = document.querySelector("#contact");
                if (contact) {
                  const offset = contact.getBoundingClientRect().top + window.scrollY;
                  window.scrollTo({ top: offset });
                }
                setIsMobileMenuOpen(false);
              }}
            >
              Get Started
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}