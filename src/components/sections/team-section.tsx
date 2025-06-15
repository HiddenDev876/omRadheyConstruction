// @/components/sections/team-section.tsx
import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Linkedin, Twitter, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";


const teamMembers = [
  {
    name: "Er. Ramesh Patel",
    role: "Founder & CEO",
    image: "https://placehold.co/300x300.png",
    bio: "With 20+ years of experience, Ramesh leads with vision and a commitment to excellence.",
    social: { linkedin: "#", twitter: "#" },
    hint: "ceo portrait"
  },
  {
    name: "Ms. Sunita Sharma",
    role: "Chief Architect",
    image: "https://placehold.co/300x300.png",
    bio: "Sunita brings innovative design and sustainable practices to every project.",
    social: { linkedin: "#", twitter: "#" },
    hint: "architect portrait"
  },
  {
    name: "Mr. Vikram Singh",
    role: "Head of Operations",
    image: "https://placehold.co/300x300.png",
    bio: "Vikram ensures all projects are executed smoothly, on time, and to the highest standards.",
    social: { linkedin: "#", twitter: "#" },
    hint: "manager portrait"
  },
  {
    name: "Mrs. Anjali Desai",
    role: "Client Relations Manager",
    image: "https://placehold.co/300x300.png",
    bio: "Anjali is dedicated to ensuring a seamless and positive experience for all our clients.",
    social: { linkedin: "#", twitter: "#" },
    hint: "executive portrait"
  }
];

export function TeamSection() {
  return (
    <section id="team" className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary mb-4 animate-slide-in-from-bottom" style={{animationDelay: '0.1s'}}>
            Meet Our Expert Team
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-slide-in-from-bottom" style={{animationDelay: '0.2s'}}>
            The driving force behind our success is our dedicated and skilled team of professionals.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {teamMembers.map((member, index) => (
            <Card 
              key={index} 
              className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden animate-slide-in-from-bottom"
              style={{animationDelay: `${0.3 + index * 0.1}s`}}
            >
              <CardHeader className="p-0">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={300}
                  height={300}
                  className="object-cover w-full h-auto aspect-square"
                  data-ai-hint={member.hint}
                />
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="text-xl font-headline text-primary">{member.name}</CardTitle>
                <div className="flex items-center justify-center text-accent my-2">
                    <Briefcase size={16} className="mr-1.5"/>
                    <CardDescription className="text-accent font-medium">{member.role}</CardDescription>
                </div>
                <p className="text-sm text-muted-foreground mt-2 mb-4 min-h-[3em]">{member.bio}</p>
                <div className="flex justify-center space-x-3">
                  {member.social.linkedin && (
                    <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                      <Linkedin size={20} />
                    </a>
                  )}
                  {member.social.twitter && (
                    <a href={member.social.twitter} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
                      <Twitter size={20} />
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
         <div className="mt-12 md:mt-16 text-center animate-slide-in-from-bottom" style={{animationDelay: `${0.3 + teamMembers.length * 0.1}s`}}>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 rounded-md shadow-md">
            <Link href="/team">Meet The Entire Team</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
