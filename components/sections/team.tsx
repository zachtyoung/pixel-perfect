"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Twitter, Linkedin, Github } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  bio: string;
  index: number;
}

function TeamMember({ name, role, image, bio, index }: TeamMemberProps) {
  return (
    <Card 
      className={cn(
        "overflow-hidden group team-card opacity-0 translate-y-4",
      )}
      style={{ transitionDelay: `${index * 50}ms` }}
    >
      <div className="relative h-64 overflow-hidden">
        <Image
          src={image}
          alt={name}
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-6">
          <div className="flex gap-3">
            <Link href="#" className="p-2 rounded-full bg-background/20 backdrop-blur-sm hover:bg-background/40 transition-colors">
              <Twitter className="h-4 w-4 text-white" />
            </Link>
            <Link href="#" className="p-2 rounded-full bg-background/20 backdrop-blur-sm hover:bg-background/40 transition-colors">
              <Linkedin className="h-4 w-4 text-white" />
            </Link>
            <Link href="#" className="p-2 rounded-full bg-background/20 backdrop-blur-sm hover:bg-background/40 transition-colors">
              <Github className="h-4 w-4 text-white" />
            </Link>
          </div>
        </div>
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold">{name}</h3>
        <p className="text-primary font-medium text-sm mb-2">{role}</p>
        <p className="text-muted-foreground text-sm">{bio}</p>
      </CardContent>
    </Card>
  );
}

export default function Team() {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const cards = sectionRef.current?.querySelectorAll(".team-card");
    cards?.forEach((card) => {
      observer.observe(card);
    });
    
    return () => {
      cards?.forEach((card) => {
        observer.unobserve(card);
      });
    };
  }, []);
  
  const team = [
    {
      name: "Alex Morgan",
      role: "Founder & CEO",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      bio: "10+ years of experience in web development and digital strategy. Passionate about creating innovative digital solutions.",
    },
    {
      name: "Sarah Johnson",
      role: "Creative Director",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      bio: "Award-winning designer with a keen eye for aesthetics and user experience. Leads our design team with vision and precision.",
    },
    {
      name: "Michael Chen",
      role: "Lead Developer",
      image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      bio: "Full-stack developer specializing in React, Node.js, and modern web technologies. Committed to writing clean, efficient code.",
    },
    {
      name: "Emily Rodriguez",
      role: "UX Designer",
      image: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      bio: "Focuses on creating intuitive user experiences through research, wireframing, and prototyping. HCI background from Stanford.",
    },
    {
      name: "David Wilson",
      role: "Project Manager",
      image: "https://images.pexels.com/photos/1181391/pexels-photo-1181391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      bio: "Certified PMP with expertise in agile methodologies. Ensures projects are delivered on time and within scope.",
    },
    {
      name: "Jessica Park",
      role: "Marketing Specialist",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      bio: "Digital marketing expert specializing in SEO, content strategy, and analytics. Helps clients grow their online presence.",
    },
  ];
  
  return (
    <section id="team" className="py-20 md:py-32 bg-muted/40" ref={sectionRef}>
      <div className="container px-4">
        <Badge className="mb-4" variant="outline">Our Team</Badge>
        <div className="flex flex-col md:flex-row justify-between mb-12">
          <h2 className="text-3xl md:text-4xl font-bold max-w-md mb-4 md:mb-0">
            Meet the <span className="text-primary">talent</span> behind our success
          </h2>
          <p className="text-muted-foreground max-w-md">
            Our diverse team of experts brings together skills, experience, and creativity to deliver exceptional results.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {team.map((member, index) => (
            <TeamMember
              key={index}
              name={member.name}
              role={member.role}
              image={member.image}
              bio={member.bio}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}