import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="relative h-[60vh] flex items-center justify-center text-center text-white">
      <div className="absolute inset-0 bg-slate-900 opacity-60"></div>
      <img src="https://images.unsplash.com/photo-1589994965851-a8f483c5132c?q=80&w=2070&auto=format&fit=crop" alt="Law office" className="absolute inset-0 w-full h-full object-cover" />
      <div className="relative z-10 p-4">
        <h1 className="text-4xl md:text-6xl font-black tracking-tight">
          ייעוץ משפטי מקצועי, יחס אישי.
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-slate-200">
          משרדנו מעניק ליווי משפטי מקיף במגוון תחומים, תוך מתן דגש על שירות אישי, זמינות ומצוינות.
        </p>
        <div className="mt-8">
          <Button size="lg" asChild>
            <a href="#contact">קבע פגישת ייעוץ</a>
          </Button>
        </div>
      </div>
    </section>
  );
};