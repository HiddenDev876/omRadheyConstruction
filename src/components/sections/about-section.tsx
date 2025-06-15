
// @/components/sections/about-section.tsx
import Image from "next/image";
import Link from "next/link";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function AboutSection() {
  const coreValues = [
    { name: "Integrity", description: "Upholding the highest ethical standards in all our dealings." },
    { name: "Quality", description: "Committing to superior craftsmanship and materials." },
    { name: "Safety", description: "Prioritizing the well-being of our team and stakeholders." },
    { name: "Innovation", description: "Embracing new technologies and methods to deliver better results." },
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary mb-4 animate-slide-in-from-bottom" style={{animationDelay: '0.1s'}}>
            About Om Radhey Construction
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-slide-in-from-bottom" style={{animationDelay: '0.2s'}}>
            Your trusted partner in building the future, one structure at a time.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="animate-slide-in-from-bottom" style={{animationDelay: '0.3s'}}>
            <Image
              src="https://placehold.co/600x400.png"
              alt="Om Radhey Construction team working"
              width={600}
              height={400}
              className="rounded-lg shadow-xl object-cover"
              data-ai-hint="team meeting"
            />
          </div>
          <div className="space-y-6 animate-slide-in-from-bottom" style={{animationDelay: '0.4s'}}>
            <h3 className="text-2xl font-headline font-semibold text-primary">
              Over a Decade of Building Excellence
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Om Radhey Construction has been a cornerstone in the construction industry for over 10 years. We are dedicated to delivering high-quality craftsmanship, innovative solutions, and unparalleled client satisfaction. Our experienced team handles projects of all sizes, from residential homes to large commercial complexes, with precision and care.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our mission is to build not just structures, but lasting relationships based on trust, transparency, and mutual respect. We strive to exceed expectations in every project we undertake.
            </p>
             <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground mt-4">
                <Link href="/about">Read More About Us</Link>
            </Button>
          </div>
        </div>

        <div className="mt-16 md:mt-24">
          <h3 className="text-2xl md:text-3xl font-headline font-semibold text-primary text-center mb-8 md:mb-12 animate-slide-in-from-bottom" style={{animationDelay: '0.5s'}}>
            Our Core Values
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {coreValues.map((value, index) => (
              <div 
                key={value.name} 
                className="bg-card p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 animate-slide-in-from-bottom"
                style={{animationDelay: `${0.6 + index * 0.1}s`}}
              >
                <div className="flex items-center mb-3">
                  <CheckCircle className="h-7 w-7 text-accent mr-3" />
                  <h4 className="text-xl font-headline font-semibold text-primary">{value.name}</h4>
                </div>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
