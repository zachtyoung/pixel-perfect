import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Code, Github, Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-muted/50 border-t pt-16 pb-8">
      <div className="container grid gap-8 px-4 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <Code className="h-6 w-6" />
            <span>PixelPerfect</span>
          </Link>
          <p className="text-muted-foreground text-sm max-w-xs">
            Crafting cutting-edge digital experiences that inspire and engage.
            We build websites that work for your business.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
          </div>
        </div>
        
        <div>
          <h3 className="font-medium text-sm mb-4">Services</h3>
          <ul className="space-y-3">
            {["Web Development", "UI/UX Design", "E-Commerce", "Mobile Apps", "SEO Optimization"].map((item) => (
              <li key={item}>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h3 className="font-medium text-sm mb-4">Resources</h3>
          <ul className="space-y-3">
            {["Blog", "Case Studies", "Documentation", "Help Center", "Privacy Policy", "Terms of Service"].map((item) => (
              <li key={item}>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h3 className="font-medium text-sm mb-4">Stay Updated</h3>
          <p className="text-sm text-muted-foreground mb-4">
            Subscribe to our newsletter to get the latest updates.
          </p>
          <div className="flex gap-2">
            <Input
              type="email"
              placeholder="Email address"
              className="max-w-[240px]"
            />
            <Button size="sm" type="submit">
              Subscribe
            </Button>
          </div>
          <p className="text-xs text-muted-foreground mt-4">
            By subscribing, you agree to our Terms of Service and Privacy Policy.
          </p>
        </div>
      </div>
      
      <div className="container px-4 mt-16 pt-8 border-t">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} PixelPerfect. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy", "Terms", "Cookies", "Contact"].map((item) => (
              <Link 
                key={item} 
                href="#" 
                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}