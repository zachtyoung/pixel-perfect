"use client";

import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Sparkles, Zap } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const { left, top, width, height } = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - left) / width - 0.5;
      const y = (e.clientY - top) / height - 0.5;
      
      const cards = containerRef.current.querySelectorAll('.animated-card');
      cards.forEach((card) => {
        if (card instanceof HTMLElement) {
          card.style.transform = `perspective(1000px) rotateY(${x * 4}deg) rotateX(${y * -4}deg) translateZ(10px)`;
        }
      });
    };
    
    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
    }
    
    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);
  
  return (
    <section 
      id="home" 
      className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden"
      ref={containerRef}
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background"></div>
      
      <div className="container px-4 flex flex-col items-center text-center">
        <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm leading-none mb-8 animate-fade-in">
          <span className="flex h-2 w-2 rounded-full bg-teal-500 mr-2"></span>
          <span>We bring your digital ideas to life</span>
        </div>
        
        <h1 className="font-bold tracking-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 max-w-5xl md:leading-tight">
          Creating <span className="text-primary">impactful</span> digital experiences with{" "}
          <span className="relative text-primary inline-block">
            precision
            <span className="absolute -bottom-1 left-0 h-[6px] w-full bg-gradient-to-r from-primary/70 to-secondary/70 rounded-sm"></span>
          </span>
        </h1>
        
        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mb-10">
          We're a team of designers and developers crafting beautiful, functional websites
          and applications that help businesses grow.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-20">
          <Button size="lg" className="group animate-fade-in">
            <span>Start a Project</span>
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button size="lg" variant="outline" className="animate-fade-in delay-100">
            View Our Work
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl mx-auto">
          {[
            {
              icon: <Code className="h-10 w-10 mb-3 text-primary" />,
              title: "Clean Code",
              description: "We write clean, maintainable code that scales with your business.",
            },
            {
              icon: <Sparkles className="h-10 w-10 mb-3 text-primary" />,
              title: "Beautiful Design",
              description: "Pixel-perfect UI/UX design that engages and delights your users.",
            },
            {
              icon: <Zap className="h-10 w-10 mb-3 text-primary" />,
              title: "Fast Performance",
              description: "Optimized for speed to ensure the best user experience.",
            },
          ].map((card, index) => (
            <div
              key={index}
              className="relative p-6 rounded-xl border bg-card/50 backdrop-blur-sm shadow-sm transition-all duration-300 animated-card animate-fade-in"
              style={{ animationDelay: `${index * 100 + 200}ms` }}
            >
              {card.icon}
              <h3 className="font-semibold text-lg mb-2">{card.title}</h3>
              <p className="text-muted-foreground text-sm">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
      
      <div className="absolute -bottom-48 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-t from-primary/20 via-primary/10 to-transparent blur-3xl rounded-full -z-10"></div>
    </section>
  );
}