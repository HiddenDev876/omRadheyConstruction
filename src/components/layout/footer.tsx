// @/components/layout/footer.tsx
import Link from "next/link";
import { Building2, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const companyName = "Om Radhey Construction";
  const email = "info@omradheyconstruction.com";
  const contactNumber = "+91 98765 43210";
  const address = "123 Construction Ave, Builder City, ST 12345";


  const navLinks = [
    { href: "/#about", label: "About Us" },
    { href: "/#projects", label: "Projects" },
    { href: "/#experience", label: "Experience" },
    { href: "/#contact", label: "Contact" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Building2 className="h-10 w-10 text-accent" />
              <span className="text-2xl font-headline font-semibold">{companyName}</span>
            </Link>
            <p className="text-sm text-primary-foreground/80">
              Building your visions into reality with quality craftsmanship and dedication.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-headline font-semibold mb-4 text-accent">Quick Links</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-accent transition-colors text-sm text-primary-foreground/80">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-headline font-semibold mb-4 text-accent">Contact Us</h3>
            <ul className="space-y-3 text-sm text-primary-foreground/80">
              <li className="flex items-start">
                <MapPin size={18} className="mr-3 mt-1 shrink-0 text-accent" />
                <span>{address}</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-3 shrink-0 text-accent" />
                <a href={`mailto:${email}`} className="hover:text-accent transition-colors">{email}</a>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-3 shrink-0 text-accent" />
                <a href={`tel:${contactNumber}`} className="hover:text-accent transition-colors">{contactNumber}</a>
              </li>
            </ul>
          </div>
          
          {/* Placeholder for a Map or Newsletter */}
          <div>
             <h3 className="text-lg font-headline font-semibold mb-4 text-accent">Our Location</h3>
             <div className="aspect-video bg-primary-foreground/10 rounded-md flex items-center justify-center text-primary-foreground/50">
                <MapPin size={48} />
                <span className="ml-2">Map Placeholder</span>
             </div>
          </div>

        </div>
        <div className="mt-12 border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/70">
          <p>&copy; {currentYear} {companyName}. All rights reserved.</p>
          <p className="mt-1">Website designed and developed with care.</p>
        </div>
      </div>
    </footer>
  );
}
