import { Scale } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-6 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center items-center gap-2 mb-2">
          <Scale className="h-5 w-5" />
          <span className="font-bold">דניאל לוי - משרד עורכי דין</span>
        </div>
        <p className="text-sm text-primary-foreground/80">
          © {new Date().getFullYear()} כל הזכויות שמורות.
        </p>
      </div>
    </footer>
  );
};