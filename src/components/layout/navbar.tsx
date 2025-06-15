// @/components/layout/navbar.tsx
"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X, Mail, Phone, Building2 } from "lucide-react";

const navLinks = [
  { href: "/#hero", label: "Home" },
  { href: "/#about", label: "About Us" },
  { href: "/#projects", label: "Projects" },
  { href: "/#experience", label: "Experience" },
  { href: "/#team", label: "Team" },
  { href: "/#contact", label: "Contact" },
];

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const companyName = "Om Radhey Construction";
  const email = "info@omradheyconstruction.com";
  const contactNumber = "+91 98765 43210";

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2 px-4 md:px-8 text-xs hidden sm:block">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <a href={`mailto:${email}`} className="flex items-center hover:text-accent transition-colors">
              <Mail size={14} className="mr-1" />
              {email}
            </a>
            <a href={`tel:${contactNumber}`} className="flex items-center hover:text-accent transition-colors">
              <Phone size={14} className="mr-1" />
              {contactNumber}
            </a>
          </div>
          <p className="font-medium">{companyName}</p>
        </div>
      </div>

      {/* Main Navbar */}
      <header 
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-background/80 backdrop-blur-md shadow-lg" : "bg-background/60 backdrop-blur-sm"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between p-4">
          <Link href="/" className="flex items-center space-x-2">
            <Building2 className="h-8 w-8 text-primary" />
            <span className="text-xl font-headline font-semibold text-primary">{companyName}</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
            <Button asChild variant="default" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="/#contact">Get a Quote</Link>
            </Button>
          </nav>

          {/* Mobile Navigation Trigger */}
          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6 text-primary" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full max-w-xs bg-background p-6">
                <div className="flex justify-between items-center mb-8">
                 <Link href="/" className="flex items-center space-x-2" onClick={() => setIsMobileMenuOpen(false)}>
                    <Building2 className="h-8 w-8 text-primary" />
                    <span className="text-lg font-headline font-semibold text-primary">{companyName}</span>
                  </Link>
                  <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(false)}>
                    <X className="h-6 w-6 text-primary" />
                    <span className="sr-only">Close menu</span>
                  </Button>
                </div>
                <nav className="flex flex-col space-y-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-lg text-foreground hover:text-primary transition-colors"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                  <Button asChild variant="default" className="bg-accent hover:bg-accent/90 text-accent-foreground mt-4 w-full" onClick={() => setIsMobileMenuOpen(false)}>
                    <Link href="/#contact">Get a Quote</Link>
                  </Button>
                   {/* Mobile Top Bar Info */}
                  <div className="mt-8 border-t pt-4 space-y-2 text-sm text-muted-foreground">
                     <a href={`mailto:${email}`} className="flex items-center hover:text-primary transition-colors">
                        <Mail size={14} className="mr-2" />
                        {email}
                      </a>
                      <a href={`tel:${contactNumber}`} className="flex items-center hover:text-primary transition-colors">
                        <Phone size={14} className="mr-2" />
                        {contactNumber}
                      </a>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </>
  );
}
