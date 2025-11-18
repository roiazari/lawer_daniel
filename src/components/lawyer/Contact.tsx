import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-primary">צרו קשר</h2>
          <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
            זקוקים לייעוץ משפטי? השאירו פרטים ונחזור אליכם בהקדם, או צרו קשר ישירות באחת מהדרכים הבאות.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <MapPin className="h-6 w-6 text-primary" />
              <span>רחוב הדוגמה 123, תל אביב</span>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="h-6 w-6 text-primary" />
              <a href="tel:050-1234567" className="hover:underline">050-1234567</a>
            </div>
            <div className="flex items-center gap-4">
              <Mail className="h-6 w-6 text-primary" />
              <a href="mailto:office@danielevi.law" className="hover:underline">office@danielevi.law</a>
            </div>
          </div>
          <form className="space-y-4">
            <Input placeholder="שם מלא" />
            <Input type="email" placeholder="כתובת אימייל" />
            <Input placeholder="נושא הפנייה" />
            <Textarea placeholder="הודעה" />
            <Button type="submit" className="w-full">שליחה</Button>
          </form>
        </div>
      </div>
    </section>
  );
};