// @/components/sections/projects-gallery.tsx
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    id: "1",
    title: "Modern Residential Complex",
    description: "A luxurious residential complex featuring state-of-the-art amenities and sustainable design.",
    image: "https://placehold.co/600x400.png",
    category: "Residential",
    hint: "apartment complex"
  },
  {
    id: "2",
    title: "Corporate Office Tower",
    description: "An iconic office tower designed for productivity and a modern work environment.",
    image: "https://placehold.co/600x400.png",
    category: "Commercial",
    hint: "corporate tower"
  },
  {
    id: "3",
    title: "Community Shopping Mall",
    description: "A vibrant shopping mall providing a diverse retail and entertainment experience.",
    image: "https://placehold.co/600x400.png",
    category: "Commercial",
    hint: "mall interior"
  },
   {
    id: "4",
    title: "Luxury Private Villa",
    description: "Exquisite private villa with bespoke design and high-end finishes.",
    image: "https://placehold.co/600x400.png",
    category: "Residential",
    hint: "luxury villa"
  },
];

export function ProjectsGallery() {
  return (
    <section id="projects" className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary mb-4 animate-slide-in-from-bottom" style={{animationDelay: '0.1s'}}>
            Our Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-slide-in-from-bottom" style={{animationDelay: '0.2s'}}>
            Discover the quality and craftsmanship in our diverse portfolio of completed projects.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.id} 
              className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col animate-slide-in-from-bottom"
              style={{animationDelay: `${0.3 + index * 0.1}s`}}
            >
              <CardHeader className="p-0">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="object-cover aspect-[3/2]"
                  data-ai-hint={project.hint}
                />
              </CardHeader>
              <CardContent className="p-6 flex-grow">
                <span className="text-xs text-accent font-semibold uppercase tracking-wider">{project.category}</span>
                <CardTitle className="mt-2 mb-2 text-xl font-headline text-primary">{project.title}</CardTitle>
                <CardDescription className="text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button variant="link" asChild className="text-accent p-0 hover:underline">
                  <Link href={`/projects/${project.id}`}>
                    View Details <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 md:mt-16 text-center animate-slide-in-from-bottom" style={{animationDelay: `${0.3 + projects.length * 0.1}s`}}>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 rounded-md shadow-md">
            <Link href="/#contact">Discuss Your Project</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

// Basic project detail page structure (can be expanded later)
// Create src/app/projects/[id]/page.tsx for this if needed.
// For now, links will go to /projects/ID, which will 404 unless page is created.
// A placeholder can be added later.
