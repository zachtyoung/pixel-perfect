import Hero from '@/components/sections/hero'
import Services from '@/components/sections/services'
import Portfolio from '@/components/sections/portfolio'
import Process from '@/components/sections/process'
import Team from '@/components/sections/team'
import Testimonials from '@/components/sections/testimonials'
import Contact from '@/components/sections/contact'

export default function Home() {
  return (
    <div className="relative">
      <Hero />
      <Services />
      <Portfolio />
      <Process />
      <Team />
      <Testimonials />
      <Contact />
    </div>
  );
}