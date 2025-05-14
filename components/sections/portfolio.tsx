"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const categories = ["All", "Web Design", "E-Commerce", "Mobile Apps", "Branding"];

const projects = [
  {
    title: "Modern E-Commerce Platform",
    description: "A full-featured online store with custom product pages and seamless checkout.",
    image: "https://images.pexels.com/photos/6956183/pexels-photo-6956183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "E-Commerce",
    tags: ["Next.js", "Stripe", "Tailwind CSS"],
  },
  {
    title: "Corporate Website Redesign",
    description: "Complete overhaul of a financial services website with improved UI/UX.",
    image: "https://images.pexels.com/photos/5989933/pexels-photo-5989933.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Web Design",
    tags: ["React", "Framer Motion", "TypeScript"],
  },
  {
    title: "Healthcare Mobile Application",
    description: "Patient-doctor communication app with appointment scheduling and telemedicine.",
    image: "https://images.pexels.com/photos/5417664/pexels-photo-5417664.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Mobile Apps",
    tags: ["React Native", "Firebase", "Redux"],
  },
  {
    title: "SaaS Dashboard",
    description: "Comprehensive analytics dashboard for a B2B SaaS platform.",
    image: "https://images.pexels.com/photos/5483071/pexels-photo-5483071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Web Design",
    tags: ["Vue.js", "D3.js", "Tailwind"],
  },
  {
    title: "Fitness Brand Identity",
    description: "Complete branding package including logo, website, and marketing materials.",
    image: "https://images.pexels.com/photos/4397841/pexels-photo-4397841.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Branding",
    tags: ["Figma", "Illustrator", "Web Design"],
  },
  {
    title: "Food Delivery App",
    description: "Mobile application for a local restaurant chain with real-time order tracking.",
    image: "https://images.pexels.com/photos/5053848/pexels-photo-5053848.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    category: "Mobile Apps",
    tags: ["Flutter", "Node.js", "Google Maps API"],
  },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");
  const sectionRef = useRef<HTMLElement>(null);
  
  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);
  
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
    
    const projects = sectionRef.current?.querySelectorAll(".project-card");
    projects?.forEach((project) => {
      observer.observe(project);
    });
    
    return () => {
      projects?.forEach((project) => {
        observer.unobserve(project);
      });
    };
  }, [activeCategory]);
  
  return (
    <section id="portfolio" className="py-20 md:py-32 bg-muted/40" ref={sectionRef}>
      <div className="container px-4">
        <Badge className="mb-4" variant="outline">Our Work</Badge>
        <div className="flex flex-col md:flex-row justify-between items-start mb-12">
          <h2 className="text-3xl md:text-4xl font-bold max-w-md mb-4 md:mb-0">
            Recent <span className="text-primary">projects</span> we're proud of
          </h2>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveCategory(category)}
                className="transition-all duration-300"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div 
              key={index} 
              className={cn(
                "project-card group relative rounded-xl overflow-hidden border bg-card opacity-0 translate-y-4",
              )}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-xl mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm">{project.description}</p>
                <div className="flex justify-between items-center">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="font-normal text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button
                    size="icon"
                    variant="ghost"
                    className="opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-12">
          <Button variant="outline" size="lg">
            View All Projects
            <ArrowUpRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}