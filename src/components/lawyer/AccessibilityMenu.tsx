import { useState, useEffect } from "react";
import { Accessibility, ZoomIn, ZoomOut, Contrast, Link, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";

const FONT_STEP = 2;
const INITIAL_FONT_SIZE = 16; // Assuming base is 16px

export const AccessibilityMenu = () => {
  const [fontSize, setFontSize] = useState(INITIAL_FONT_SIZE);
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [areLinksHighlighted, setAreLinksHighlighted] = useState(false);
  const [isReadableFont, setIsReadableFont] = useState(false);
  const [areAnimationsBlocked, setAreAnimationsBlocked] = useState(false);

  useEffect(() => {
    // Load settings from localStorage on mount
    const savedFontSize = localStorage.getItem("accessibility-font-size");
    const savedHighContrast = localStorage.getItem("accessibility-high-contrast");
    const savedHighlightLinks = localStorage.getItem("accessibility-highlight-links");
    const savedReadableFont = localStorage.getItem("accessibility-readable-font");
    const savedAnimationsBlocked = localStorage.getItem("accessibility-animations-blocked");

    const initialFontSize = savedFontSize ? parseInt(savedFontSize, 10) : INITIAL_FONT_SIZE;
    const initialHighContrast = savedHighContrast === "true";
    const initialHighlightLinks = savedHighlightLinks === "true";
    const initialReadableFont = savedReadableFont === "true";
    const initialAnimationsBlocked = savedAnimationsBlocked === "true";

    setFontSize(initialFontSize);
    setIsHighContrast(initialHighContrast);
    setAreLinksHighlighted(initialHighlightLinks);
    setIsReadableFont(initialReadableFont);
    setAreAnimationsBlocked(initialAnimationsBlocked);

    applySettings(initialFontSize, initialHighContrast, initialHighlightLinks, initialReadableFont, initialAnimationsBlocked);
  }, []);

  const applySettings = (size: number, contrast: boolean, links: boolean, font: boolean, animations: boolean) => {
    if (size !== INITIAL_FONT_SIZE) {
      document.documentElement.style.fontSize = `${size}px`;
    } else {
      document.documentElement.style.fontSize = '';
    }
    document.documentElement.classList.toggle("high-contrast", contrast);
    document.documentElement.classList.toggle("highlight-links", links);
    document.documentElement.classList.toggle("readable-font", font);
    document.documentElement.classList.toggle("block-animations", animations);
  };

  const handleFontSizeChange = (increase: boolean) => {
    const newSize = increase ? fontSize + FONT_STEP : fontSize - FONT_STEP;
    if (newSize >= 12 && newSize <= 24) { // Set reasonable limits
      setFontSize(newSize);
      localStorage.setItem("accessibility-font-size", newSize.toString());
      document.documentElement.style.fontSize = `${newSize}px`;
    }
  };

  const toggleHighContrast = () => {
    const newContrast = !isHighContrast;
    setIsHighContrast(newContrast);
    localStorage.setItem("accessibility-high-contrast", newContrast.toString());
    document.documentElement.classList.toggle("high-contrast", newContrast);
  };

  const toggleHighlightLinks = () => {
    const newHighlight = !areLinksHighlighted;
    setAreLinksHighlighted(newHighlight);
    localStorage.setItem("accessibility-highlight-links", newHighlight.toString());
    document.documentElement.classList.toggle("highlight-links", newHighlight);
  };

  const toggleReadableFont = () => {
    const newFont = !isReadableFont;
    setIsReadableFont(newFont);
    localStorage.setItem("accessibility-readable-font", newFont.toString());
    document.documentElement.classList.toggle("readable-font", newFont);
  };

  const toggleBlockAnimations = () => {
    const newAnimations = !areAnimationsBlocked;
    setAreAnimationsBlocked(newAnimations);
    localStorage.setItem("accessibility-animations-blocked", newAnimations.toString());
    document.documentElement.classList.toggle("block-animations", newAnimations);
  };

  const resetSettings = () => {
    setFontSize(INITIAL_FONT_SIZE);
    setIsHighContrast(false);
    setAreLinksHighlighted(false);
    setIsReadableFont(false);
    setAreAnimationsBlocked(false);

    localStorage.removeItem("accessibility-font-size");
    localStorage.removeItem("accessibility-high-contrast");
    localStorage.removeItem("accessibility-highlight-links");
    localStorage.removeItem("accessibility-readable-font");
    localStorage.removeItem("accessibility-animations-blocked");

    applySettings(INITIAL_FONT_SIZE, false, false, false, false);
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="secondary"
          size="icon"
          className="fixed bottom-4 left-4 z-50 rounded-full h-14 w-14 shadow-lg"
          aria-label="תפריט נגישות"
        >
          <Accessibility className="h-7 w-7" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-72 mr-4" align="start" side="top">
        <div className="space-y-4 p-2">
          <p className="font-bold text-center text-lg">תפריט נגישות</p>
          <Separator />
          <div className="flex items-center justify-between">
            <span className="font-medium">גודל טקסט</span>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="icon" onClick={() => handleFontSizeChange(true)} aria-label="הגדל טקסט">
                <ZoomIn className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="icon" onClick={() => handleFontSizeChange(false)} aria-label="הקטן טקסט">
                <ZoomOut className="h-5 w-5" />
              </Button>
            </div>
          </div>
          <button className="w-full flex items-center justify-between p-2 rounded-md hover:bg-accent" onClick={toggleHighContrast}>
            <span className="font-medium">ניגודיות גבוהה</span>
            <div className={`w-10 h-6 rounded-full p-1 flex items-center transition-colors ${isHighContrast ? 'bg-primary' : 'bg-muted'}`}>
              <div className={`w-4 h-4 rounded-full bg-background transform transition-transform ${isHighContrast ? 'translate-x-4' : ''}`}></div>
            </div>
          </button>
          <button className="w-full flex items-center justify-between p-2 rounded-md hover:bg-accent" onClick={toggleHighlightLinks}>
            <span className="font-medium">הדגשת קישורים</span>
            <div className={`w-10 h-6 rounded-full p-1 flex items-center transition-colors ${areLinksHighlighted ? 'bg-primary' : 'bg-muted'}`}>
              <div className={`w-4 h-4 rounded-full bg-background transform transition-transform ${areLinksHighlighted ? 'translate-x-4' : ''}`}></div>
            </div>
          </button>
          <button className="w-full flex items-center justify-between p-2 rounded-md hover:bg-accent" onClick={toggleReadableFont}>
            <span className="font-medium">פונט קריא</span>
            <div className={`w-10 h-6 rounded-full p-1 flex items-center transition-colors ${isReadableFont ? 'bg-primary' : 'bg-muted'}`}>
              <div className={`w-4 h-4 rounded-full bg-background transform transition-transform ${isReadableFont ? 'translate-x-4' : ''}`}></div>
            </div>
          </button>
          <button className="w-full flex items-center justify-between p-2 rounded-md hover:bg-accent" onClick={toggleBlockAnimations}>
            <span className="font-medium">חסימת אנימציות</span>
            <div className={`w-10 h-6 rounded-full p-1 flex items-center transition-colors ${areAnimationsBlocked ? 'bg-primary' : 'bg-muted'}`}>
              <div className={`w-4 h-4 rounded-full bg-background transform transition-transform ${areAnimationsBlocked ? 'translate-x-4' : ''}`}></div>
            </div>
          </button>
          <Separator />
          <Button variant="ghost" className="w-full" onClick={resetSettings}>
            <RotateCcw className="h-4 w-4 mr-2" />
            איפוס הגדרות
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
};