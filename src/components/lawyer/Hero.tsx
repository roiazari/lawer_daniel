import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="relative h-[60vh] flex items-center justify-center text-center text-white">
      <div className="absolute inset-0 bg-slate-900 opacity-60"></div>
      <img src="https://plus.unsplash.com/premium_photo-1695942301094-472c4dbf9130?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGF3JTIwZmlybXxlbnwwfHwwfHx8MA%3D%3D" alt="Law office" className="absolute inset-0 w-full h-full object-cover" />
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