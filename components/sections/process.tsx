"use client";

import { useRef, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { 
  Search, 
  Lightbulb, 
  Pencil, 
  Code, 
  Zap, 
  BarChart 
} from "lucide-react";

interface ProcessStepProps {
  icon: React.ReactNode;
  number: string;
  title: string;
  description: string;
  index: number;
}

function ProcessStep({ icon, number, title, description, index }: ProcessStepProps) {
  return (
    <div 
      className={cn(
        "relative pl-16 process-step opacity-0 translate-y-4",
      )}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="absolute left-0 top-0 flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary">
        {icon}
      </div>
      <div className="absolute left-6 top-14 bottom-0 w-[1px] bg-border" 
        style={{ display: index === 5 ? 'none' : 'block' }}></div>
      <span className="text-sm font-medium text-muted-foreground">{number}</span>
      <h3 className="text-xl font-semibold mt-1 mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm">{description}</p>
    </div>
  );
}

export default function Process() {
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
    
    const steps = sectionRef.current?.querySelectorAll(".process-step");
    steps?.forEach((step) => {
      observer.observe(step);
    });
    
    return () => {
      steps?.forEach((step) => {
        observer.unobserve(step);
      });
    };
  }, []);
  
  const steps = [
    {
      icon: <Search className="h-5 w-5" />,
      number: "01",
      title: "Discovery & Research",
      description: "We start by understanding your business, goals, target audience, and competition to inform our strategy.",
    },
    {
      icon: <Lightbulb className="h-5 w-5" />,
      number: "02",
      title: "Strategy & Planning",
      description: "Based on research, we develop a comprehensive strategy and project roadmap with clear milestones.",
    },
    {
      icon: <Pencil className="h-5 w-5" />,
      number: "03",
      title: "Design & Wireframing",
      description: "We create wireframes and design mockups that align with your brand and provide optimal user experience.",
    },
    {
      icon: <Code className="h-5 w-5" />,
      number: "04",
      title: "Development & Testing",
      description: "Our developers bring the designs to life with clean, efficient code, followed by rigorous testing.",
    },
    {
      icon: <Zap className="h-5 w-5" />,
      number: "05",
      title: "Launch & Deployment",
      description: "After final approval, we deploy your project and ensure everything runs smoothly in the live environment.",
    },
    {
      icon: <BarChart className="h-5 w-5" />,
      number: "06",
      title: "Support & Growth",
      description: "We provide ongoing support and help you evolve your digital presence to meet changing business needs.",
    },
  ];
  
  return (
    <section id="process" className="py-20 md:py-32" ref={sectionRef}>
      <div className="container px-4">
        <Badge className="mb-4" variant="outline">Our Process</Badge>
        <div className="flex flex-col md:flex-row justify-between mb-12">
          <h2 className="text-3xl md:text-4xl font-bold max-w-md mb-4 md:mb-0">
            How we bring your <span className="text-primary">vision</span> to life
          </h2>
          <p className="text-muted-foreground max-w-md">
            Our proven process ensures we deliver exceptional results that meet your objectives and exceed expectations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-16">
          {steps.map((step, index) => (
            <ProcessStep
              key={index}
              icon={step.icon}
              number={step.number}
              title={step.title}
              description={step.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}