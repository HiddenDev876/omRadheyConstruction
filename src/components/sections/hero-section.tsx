// @/components/sections/hero-section.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { ChevronDown, Radio } from "lucide-react"; // Using Radio for dots
import { cn } from "@/lib/utils";

const slidesData = [
  {
    imageSrc: "https://placehold.co/1920x1080.png",
    altText: "Modern Construction Project",
    dataAiHint: "modern building",
    title: "Om Radhey Construction",
    subtitle: "Building Your Visions, Creating Reality with Excellence and Integrity.",
    primaryActionLink: "/#projects",
    primaryActionText: "Explore Projects",
    secondaryActionLink: "/#contact",
    secondaryActionText: "Get a Quote",
  },
  {
    imageSrc: "https://placehold.co/1920x1080.png",
    altText: "Innovative Architectural Design",
    dataAiHint: "architecture sketch",
    title: "Innovative Design Solutions",
    subtitle: "Crafting spaces that inspire and endure, from concept to completion.",
    primaryActionLink: "/#about",
    primaryActionText: "Learn About Us",
    secondaryActionLink: "/discuss-project",
    secondaryActionText: "Discuss a Project",
  },
  {
    imageSrc: "https://placehold.co/1920x1080.png",
    altText: "Sustainable Building Practices",
    dataAiHint: "eco friendly",
    title: "Sustainable & Quality Builds",
    subtitle: "Committed to quality craftsmanship and sustainable building practices for a better future.",
    primaryActionLink: "/#experience",
    primaryActionText: "Client Testimonials",
    secondaryActionLink: "/team",
    secondaryActionText: "Meet Our Team",
  },
];

const AUTOPLAY_INTERVAL = 5000; // Changed from 7000ms to 5000ms

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentSlide((prev) => (prev === slidesData.length - 1 ? 0 : prev + 1));
    }, AUTOPLAY_INTERVAL);
    return () => clearTimeout(timer);
  }, [currentSlide]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const currentSlideData = slidesData[currentSlide];

  return (
    <section id="hero" className="relative min-h-[80vh] md:min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image Container */}
      <div className="absolute inset-0 w-full h-full">
        {slidesData.map((slide, index) => (
          <Image
            key={slide.title + index}
            src={slide.imageSrc}
            alt={slide.altText}
            layout="fill"
            objectFit="cover"
            className={cn(
              "transition-opacity duration-1000 ease-in-out",
              index === currentSlide ? "opacity-20" : "opacity-0"
            )}
            data-ai-hint={slide.dataAiHint}
            priority={index === 0} // Prioritize the first image for LCP
          />
        ))}
      </div>
      <div className="absolute inset-0 bg-black/60"></div> {/* Darker Overlay: Changed from bg-black/40 to bg-black/60 */}
      
      <div className="relative container mx-auto px-4 text-center z-10">
        <div className="max-w-3xl mx-auto">
          {/* Text content with transitions */}
          <div className="relative h-40 md:h-48 lg:h-56 mb-6"> {/* Fixed height container for text to prevent layout shift */}
            {slidesData.map((slide, index) => (
              <div
                key={slide.title + index + "-text"}
                className={cn(
                  "absolute inset-0 flex flex-col justify-center items-center transition-all duration-700 ease-in-out",
                  index === currentSlide ? "opacity-100 transform-none" : "opacity-0 transform translate-y-5"
                )}
              >
                <h1 
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-headline font-bold text-background"
                >
                  {slide.title}
                </h1>
              </div>
            ))}
          </div>
          
          <div className="relative h-20 md:h-24 mb-10"> {/* Fixed height container for subtitle */}
             {slidesData.map((slide, index) => (
                <p
                  key={slide.subtitle + index + "-subtitle"}
                  className={cn(
                    "absolute inset-0 flex items-center justify-center text-lg sm:text-xl md:text-2xl text-background/90 transition-all duration-700 ease-in-out delay-200",
                     index === currentSlide ? "opacity-100 transform-none" : "opacity-0 transform translate-y-5"
                  )}
                >
                  {slide.subtitle}
                </p>
              ))}
          </div>

          {/* Buttons with transitions - these can be common or slide-specific */}
          <div className={cn(
            "space-x-4 transition-opacity duration-700 ease-in-out delay-300",
            currentSlideData ? "opacity-100" : "opacity-0" // General fade for button group based on current slide
          )}>
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 text-lg rounded-md shadow-lg transform hover:scale-105 transition-transform duration-300">
              <Link href={currentSlideData.primaryActionLink}>{currentSlideData.primaryActionText}</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground px-8 py-6 text-lg rounded-md shadow-lg transform hover:scale-105 transition-transform duration-300">
              <Link href={currentSlideData.secondaryActionLink}>{currentSlideData.secondaryActionText}</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-16 md:bottom-20 left-1/2 transform -translate-x-1/2 z-10 flex space-x-3">
        {slidesData.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={cn(
              "p-1 rounded-full transition-all duration-300 ease-in-out",
              currentSlide === index ? "bg-accent/80" : "bg-background/30 hover:bg-background/50"
            )}
            aria-label={`Go to slide ${index + 1}`}
          >
            <Radio className={cn("h-2.5 w-2.5 transition-colors duration-300", currentSlide === index ? "text-accent-foreground" : "text-transparent" )} />
          </button>
        ))}
      </div>
      
      {/* Optional: subtle animated element like chevrons pointing down - kept from original */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 animate-bounce hidden md:block">
        <ChevronDown className="h-8 w-8 text-background/70" />
      </div>
    </section>
  );
}
