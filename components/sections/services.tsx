"use client";

import { useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { 
  Layers, 
  ShoppingCart, 
  Smartphone, 
  Code, 
  BarChart, 
  Lightbulb, 
  Palette, 
  Lock 
} from "lucide-react";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  tags: string[];
  index: number;
}

function ServiceCard({ icon, title, description, tags, index }: ServiceCardProps) {
  return (
    <div 
      className="group relative p-6 rounded-xl border bg-card/50 hover:bg-card hover:shadow-md transition-all duration-300"
      style={{ 
        transitionDelay: `${index * 50}ms`
      }}
    >
      <div className="absolute -z-10 inset-0 rounded-xl bg-gradient-to-br from-primary/10 via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
      <div className="p-3 rounded-full bg-primary/10 w-fit mb-4 text-primary">
        {icon}
      </div>
      <h3 className="font-semibold text-xl mb-2 group-hover:text-primary transition-colors">{title}</h3>
      <p className="text-muted-foreground mb-4 text-sm">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <Badge key={tag} variant="secondary" className="font-normal text-xs">
            {tag}
          </Badge>
        ))}
      </div>
    </div>
  );
}

export default function Services() {
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
    
    const cards = sectionRef.current?.querySelectorAll(".service-card");
    cards?.forEach((card) => {
      observer.observe(card);
    });
    
    return () => {
      cards?.forEach((card) => {
        observer.unobserve(card);
      });
    };
  }, []);
  
  const services = [
    {
      icon: <Code className="h-5 w-5" />,
      title: "Web Development",
      description: "Custom websites built with modern technologies that are fast, secure, and scalable.",
      tags: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    },
    {
      icon: <Palette className="h-5 w-5" />,
      title: "UI/UX Design",
      description: "Beautiful, intuitive interfaces designed with your users in mind to create engaging experiences.",
      tags: ["Figma", "User Research", "Prototyping", "Design Systems"],
    },
    {
      icon: <ShoppingCart className="h-5 w-5" />,
      title: "E-Commerce Solutions",
      description: "Custom online stores that drive sales and provide seamless shopping experiences.",
      tags: ["Shopify", "WooCommerce", "Payment Integration", "Inventory Management"],
    },
    {
      icon: <Smartphone className="h-5 w-5" />,
      title: "Mobile Applications",
      description: "Native and cross-platform mobile apps that work seamlessly across all devices.",
      tags: ["React Native", "iOS", "Android", "Flutter"],
    },
    {
      icon: <BarChart className="h-5 w-5" />,
      title: "SEO Optimization",
      description: "Improve your visibility in search engines and drive more organic traffic to your site.",
      tags: ["Keyword Research", "On-Page SEO", "Technical SEO", "Analytics"],
    },
    {
      icon: <Lightbulb className="h-5 w-5" />,
      title: "Digital Strategy",
      description: "Comprehensive digital strategies tailored to your business goals and target audience.",
      tags: ["Market Research", "Competitor Analysis", "User Journey Mapping", "Growth Strategy"],
    },
    {
      icon: <Layers className="h-5 w-5" />,
      title: "CMS Development",
      description: "Custom content management systems that make updating your website easy and efficient.",
      tags: ["WordPress", "Headless CMS", "Strapi", "Sanity"],
    },
    {
      icon: <Lock className="h-5 w-5" />,
      title: "Web Security",
      description: "Protect your website and user data with advanced security measures and best practices.",
      tags: ["SSL Certificates", "Security Audits", "Data Encryption", "Compliance"],
    },
  ];
  
  return (
    <section id="services" className="py-20 md:py-32 relative" ref={sectionRef}>
      <div className="container px-4">
        <Badge className="mb-4" variant="outline">Services</Badge>
        <div className="flex flex-col md:flex-row justify-between mb-12">
          <h2 className="text-3xl md:text-4xl font-bold max-w-md mb-4 md:mb-0">
            Transforming ideas into <span className="text-primary">digital reality</span>
          </h2>
          <p className="text-muted-foreground max-w-md">
            Our comprehensive range of services is designed to help businesses of all sizes establish a strong online presence and achieve their digital goals.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={cn(
                "service-card opacity-0 translate-y-4",
              )}
            >
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.description}
                tags={service.tags}
                index={index}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}