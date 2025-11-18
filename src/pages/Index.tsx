import { Header } from "@/components/lawyer/Header";
import { Hero } from "@/components/lawyer/Hero";
import { About } from "@/components/lawyer/About";
import { PracticeAreas } from "@/components/lawyer/PracticeAreas";
import { Contact } from "@/components/lawyer/Contact";
import { Footer } from "@/components/lawyer/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Header />
      <main>
        <Hero />
        <About />
        <PracticeAreas />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;