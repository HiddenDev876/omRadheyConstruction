// @/components/sections/hero-section.tsx
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section id="hero" className="relative min-h-[80vh] md:min-h-screen flex items-center justify-center bg-gradient-to-br from-primary via-primary/80 to-secondary overflow-hidden">
      <Image
        src="https://placehold.co/1920x1080.png"
        alt="Construction site background"
        layout="fill"
        objectFit="cover"
        className="opacity-20"
        data-ai-hint="site panoramic"
        priority
      />
      <div className="absolute inset-0 bg-black/30"></div> {/* Overlay for better text readability */}
      
      <div className="relative container mx-auto px-4 text-center z-10">
        <div className="max-w-3xl mx-auto">
          <h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-headline font-bold text-background mb-6 animate-fade-in"
            style={{ animationDelay: '0.2s', animationFillMode: 'backwards' }}
          >
            Om Radhey Construction
          </h1>
          <p 
            className="text-lg sm:text-xl md:text-2xl text-background/90 mb-10 animate-fade-in"
            style={{ animationDelay: '0.5s', animationFillMode: 'backwards' }}
          >
            Building Your Visions, Creating Reality with Excellence and Integrity.
          </p>
          <div 
            className="space-x-4 animate-fade-in"
            style={{ animationDelay: '0.8s', animationFillMode: 'backwards' }}
          >
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 text-lg rounded-md shadow-lg transform hover:scale-105 transition-transform duration-300">
              <Link href="/#projects">Explore Projects</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground px-8 py-6 text-lg rounded-md shadow-lg transform hover:scale-105 transition-transform duration-300">
              <Link href="/#contact">Get a Quote</Link>
            </Button>
          </div>
        </div>
      </div>
      {/* Optional: subtle animated element like chevrons pointing down */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 animate-bounce hidden md:block">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-background/70"><path d="m6 9 6 6 6-6"/></svg>
      </div>
    </section>
  );
}
