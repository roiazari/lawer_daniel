import { Scale, Facebook, Linkedin, Twitter } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { AccessibilityStatement } from "./AccessibilityStatement";

export const Footer = () => {
  return (
    <footer className="py-8 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center items-center gap-2 mb-4">
          <Scale className="h-5 w-5" />
          <span className="font-bold">דניאל לוי - משרד עורכי דין</span>
        </div>
        <div className="flex justify-center gap-4 mb-4">
          <a href="#" aria-label="Facebook" className="text-primary-foreground/80 hover:text-primary-foreground">
            <Facebook className="h-6 w-6" />
          </a>
          <a href="#" aria-label="LinkedIn" className="text-primary-foreground/80 hover:text-primary-foreground">
            <Linkedin className="h-6 w-6" />
          </a>
          <a href="#" aria-label="Twitter" className="text-primary-foreground/80 hover:text-primary-foreground">
            <Twitter className="h-6 w-6" />
          </a>
        </div>
        <div className="text-sm text-primary-foreground/80 space-y-2">
          <p>
            © {new Date().getFullYear()} כל הזכויות שמורות.
          </p>
          <Dialog>
            <DialogTrigger asChild>
              <button className="underline hover:text-primary-foreground">
                הצהרת נגישות
              </button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[625px]">
              <DialogHeader>
                <DialogTitle className="text-right">הצהרת נגישות</DialogTitle>
              </DialogHeader>
              <ScrollArea className="h-[60vh] pr-4">
                <AccessibilityStatement />
              </ScrollArea>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </footer>
  );
};