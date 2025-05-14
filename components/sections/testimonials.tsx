"use client";

import { useRef, useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface TestimonialProps {
  quote: string;
  name: string;
  title: string;
  company: string;
  rating: number;
  index: number;
  isActive: boolean;
}

function TestimonialCard({ quote, name, title, company, rating, isActive, index }: TestimonialProps) {
  return (
    <Card 
      className={cn(
        "testimonial-card transition-all duration-500 overflow-hidden",
        isActive ? "opacity-100 scale-100" : "opacity-40 scale-95"
      )}
      style={{ transitionDelay: `${index * 50}ms` }}
    >
      <CardContent className="p-8">
        <div className="flex mb-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={cn(
                "h-4 w-4",
                i < rating ? "text-amber-500 fill-amber-500" : "text-muted-foreground"
              )}
            />
          ))}
        </div>
        <blockquote className="text-lg mb-6 min-h-[120px]">"{quote}"</blockquote>
        <div>
          <p className="font-semibold">{name}</p>
          <p className="text-sm text-muted-foreground">
            {title}, {company}
          </p>
        </div>
      </CardContent>
    </Card>
  );
}

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  
  const testimonials = [
    {
      quote: "Working with PixelPerfect was a game-changer for our business. They transformed our outdated website into a stunning, high-performance platform that perfectly represents our brand.",
      name: "John Smith",
      title: "CEO",
      company: "TechStart Inc.",
      rating: 5,
    },
    {
      quote: "The team at PixelPerfect exceeded our expectations in every way. Their attention to detail and commitment to quality is unmatched. Our e-commerce sales increased by 40% after launch.",
      name: "Amanda Chen",
      title: "Marketing Director",
      company: "FashionForward",
      rating: 5,
    },
    {
      quote: "As a startup, we needed a website that could grow with us. PixelPerfect delivered a scalable solution that impresses our users and investors alike. Highly recommended!",
      name: "Mark Johnson",
      title: "Founder",
      company: "InnoVenture",
      rating: 5,
    },
    {
      quote: "PixelPerfect's expertise in creating user-friendly interfaces completely transformed our application. Our user engagement metrics improved dramatically within weeks of launch.",
      name: "Sarah Williams",
      title: "Product Manager",
      company: "HealthTech Solutions",
      rating: 5,
    },
    {
      quote: "We've worked with several web development agencies in the past, but none have matched the level of professionalism and technical expertise that PixelPerfect brings to the table.",
      name: "David Miller",
      title: "CTO",
      company: "Global Innovations",
      rating: 5,
    },
  ];
  
  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };
  
  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };
  
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 6000);
    
    return () => clearInterval(interval);
  }, []);
  
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
    
    const section = sectionRef.current;
    if (section) {
      observer.observe(section);
    }
    
    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);
  
  const visibleTestimonials = [
    testimonials[activeIndex],
    testimonials[(activeIndex + 1) % testimonials.length],
    testimonials[(activeIndex + 2) % testimonials.length],
  ];
  
  return (
    <section 
      id="testimonials" 
      className="py-20 md:py-32 relative opacity-0 translate-y-4 transition-all duration-500"
      ref={sectionRef}
    >
      <div className="container px-4">
        <Badge className="mb-4" variant="outline">Testimonials</Badge>
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold max-w-md mb-4">
              What our <span className="text-primary">clients</span> say about us
            </h2>
            <p className="text-muted-foreground max-w-md">
              Don't just take our word for it—hear from some of our satisfied clients who have experienced our services firsthand.
            </p>
          </div>
          <div className="flex gap-2 mt-4 md:mt-0">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="rounded-full"
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full"
            >
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleTestimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              name={testimonial.name}
              title={testimonial.title}
              company={testimonial.company}
              rating={testimonial.rating}
              index={index}
              isActive={index === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}