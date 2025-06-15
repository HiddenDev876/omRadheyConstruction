// src/app/team/page.tsx
import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Linkedin, Twitter, Briefcase, Users } from "lucide-react"; 

const teamMembers = [
  {
    name: "Er. Ramesh Patel",
    role: "Founder & CEO",
    image: "https://placehold.co/300x300.png",
    bio: "With 20+ years of experience, Ramesh leads with vision and a commitment to excellence in every project undertaken by Om Radhey Construction.",
    social: { linkedin: "#", twitter: "#" },
    hint: "ceo portrait"
  },
  {
    name: "Ms. Sunita Sharma",
    role: "Chief Architect",
    image: "https://placehold.co/300x300.png",
    bio: "Sunita brings innovative design philosophies and sustainable practices to the forefront of our architectural endeavors, shaping future skylines.",
    social: { linkedin: "#", twitter: "#" },
    hint: "architect portrait"
  },
  {
    name: "Mr. Vikram Singh",
    role: "Head of Operations",
    image: "https://placehold.co/300x300.png",
    bio: "Vikram masterfully ensures all projects are executed smoothly, adhering to timelines and maintaining the highest standards of quality and safety.",
    social: { linkedin: "#", twitter: "#" },
    hint: "manager portrait"
  },
  {
    name: "Mrs. Anjali Desai",
    role: "Client Relations Manager",
    image: "https://placehold.co/300x300.png",
    bio: "Anjali is dedicated to fostering strong client relationships, ensuring a seamless, transparent, and positive experience for all our partners.",
    social: { linkedin: "#", twitter: "#" },
    hint: "executive portrait"
  },
  {
    name: "Mr. Rajesh Kumar",
    role: "Senior Project Engineer",
    image: "https://placehold.co/300x300.png",
    bio: "Rajesh brings technical expertise and on-site leadership, ensuring structural integrity and engineering precision in complex projects.",
    social: { linkedin: "#" },
    hint: "engineer portrait"
  },
  {
    name: "Ms. Divya Reddy",
    role: "Lead Interior Designer",
    image: "https://placehold.co/300x300.png",
    bio: "Divya transforms spaces with her creative vision and attention to detail, crafting interiors that are both functional and aesthetically stunning.",
    social: { linkedin: "#", twitter: "#" },
    hint: "designer portrait"
  }
];

export default function TeamPage() {
  return (
    <section id="team-page" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <Users className="h-12 w-12 text-primary mx-auto mb-4" />
          <h1 className="text-3xl md:text-4xl font-headline font-bold text-primary mb-4">
            Meet Our Dedicated Professionals
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            The strength of Om Radhey Construction lies in our exceptional team. Each member brings a wealth of experience, skill, and passion to their respective roles, collectively driving our commitment to excellence and client satisfaction.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {teamMembers.map((member, index) => (
            <Card 
              key={index} 
              className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col"
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
              <CardContent className="p-6 flex flex-col flex-grow">
                <CardTitle className="text-xl font-headline text-primary">{member.name}</CardTitle>
                <div className="flex items-center justify-center text-accent my-2">
                    <Briefcase size={16} className="mr-1.5"/>
                    <CardDescription className="text-accent font-medium">{member.role}</CardDescription>
                </div>
                <p className="text-sm text-muted-foreground mt-2 mb-4 flex-grow min-h-[4.5em]">{member.bio}</p>
                <div className="flex justify-center space-x-3 mt-auto">
                  {member.social.linkedin && (
                    <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label={`${member.name} LinkedIn Profile`}>
                      <Linkedin size={20} />
                    </a>
                  )}
                  {member.social.twitter && (
                    <a href={member.social.twitter} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label={`${member.name} Twitter Profile`}>
                      <Twitter size={20} />
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
