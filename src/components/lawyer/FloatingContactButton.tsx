import { Phone, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

const WHATSAPP_NUMBER = "972501234567"; // מספר בפורמט בינלאומי לוואטסאפ
const PHONE_NUMBER = "050-1234567";

export const FloatingContactButton = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          size="icon"
          className="fixed bottom-24 left-4 z-50 rounded-full h-14 w-14 shadow-lg bg-green-600 hover:bg-green-700 text-white"
          aria-label="צור קשר"
        >
          <Phone className="h-7 w-7" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-56 mr-4 p-2" align="start" side="top">
        <div className="flex flex-col gap-2">
          <Button variant="ghost" asChild className="justify-start">
            <a href={`tel:${PHONE_NUMBER}`}>
              <Phone className="h-4 w-4 ml-2" />
              שיחת טלפון
            </a>
          </Button>
          <Button variant="ghost" asChild className="justify-start">
            <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer">
              <MessageSquare className="h-4 w-4 ml-2" />
              שליחת הודעת וואטסאפ
            </a>
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
};