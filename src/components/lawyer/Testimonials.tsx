import React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Star } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    name: "יעל כהן",
    quote: "השירות היה מקצועי, אדיב ומהיר. עו'ד לוי ליווה אותנו בכל שלב בתהליך רכישת הדירה ועזר לנו להרגיש בטוחים. ממליצה בחום!",
    stars: 5,
  },
  {
    name: "משה לוי",
    quote: "קיבלתי ייצוג משפטי מעולה בתיק מורכב. הצוות הפגין בקיאות מרשימה, יצירתיות ומסירות עד להשגת התוצאה הטובה ביותר עבורי.",
    stars: 5,
  },
  {
    name: "שרה ישראלי",
    quote: "פניתי למשרד לצורך עריכת צוואה. התהליך היה ברור, מסודר ונעשה ברגישות רבה. הרגשתי שאני בידיים טובות.",
    stars: 5,
  },
  {
    name: "אבי גולן",
    quote: "ליווי עסקי ברמה הגבוהה ביותר. עו'ד לוי עזר לנו לנווט בסוגיות משפטיות מורכבות ולהגן על האינטרסים של החברה שלנו. אין ספק שנמשיך לעבוד יחד.",
    stars: 5,
  },
  {
    name: "דנה שחר",
    quote: "טיפול מהיר ויעיל בתיק גירושין. הצוות היה זמין לכל שאלה וסיפק תמיכה וליווי לאורך כל הדרך. תודה רבה!",
    stars: 5,
  },
];

export const Testimonials = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  return (
    <section id="testimonials" className="py-16 md:py-24">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-primary">מה לקוחותינו אומרים</h2>
        <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
          אנו גאים באמון שלקוחותינו נותנים בנו. הנה כמה מההמלצות שקיבלנו.
        </p>
        <Carousel
          plugins={[plugin.current]}
          className="w-full max-w-4xl mx-auto"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1 h-full">
                  <Card className="h-full flex flex-col justify-between text-right shadow-md hover:shadow-xl transition-shadow">
                    <CardContent className="flex flex-col items-start p-6">
                      <div className="flex mb-4">
                        {Array.from({ length: testimonial.stars }).map((_, i) => (
                          <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                        ))}
                      </div>
                      <p className="text-muted-foreground italic mb-4 text-sm">"{testimonial.quote}"</p>
                      <span className="font-bold text-primary mt-auto">{testimonial.name}</span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
    </section>
  );
};