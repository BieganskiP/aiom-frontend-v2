import { Hero } from "@/components/organisims/Hero";
import { Features } from "@/components/organisims/Features";
import { Pricing } from "@/components/organisims/Pricing";

import { Contact } from "@/components/organisims/Contact";

export default function Home() {
  return (
    <div>
      <Hero />
      <Features />
      <Pricing />
      <Contact />
    
    </div>
  );
}
