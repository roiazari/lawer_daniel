import { Header } from "@/components/lawyer/Header";
import { Hero } from "@/components/lawyer/Hero";
import { About } from "@/components/lawyer/About";
import { PracticeAreas } from "@/components/lawyer/PracticeAreas";
import { Testimonials } from "@/components/lawyer/Testimonials";
import { Contact } from "@/components/lawyer/Contact";
import { Footer } from "@/components/lawyer/Footer";
import { AccessibilityMenu } from "@/components/lawyer/AccessibilityMenu";
import { FloatingContactButton } from "@/components/lawyer/FloatingContactButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Header />
      <main>
        <Hero />
        <About />
        <PracticeAreas />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <FloatingContactButton />
      <AccessibilityMenu />
    </div>
  );
};

export default Index;