import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

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
  {
    name: "רון פרץ",
    quote: "מקצועיות, אמינות ושירותיות ברמה הגבוהה ביותר. הרגשתי שיש על מי לסמוך לאורך כל הדרך.",
    stars: 5,
  },
  {
    name: "מיכל אדרי",
    quote: "עו'ד לוי והצוות היו קשובים, סבלניים ומקצועיים. הם השיגו עבורנו תוצאה מצוינת. מומלץ בחום!",
    stars: 5,
  },
  {
    name: "יוסי כהן",
    quote: "הליווי המשפטי שקיבלנו היה לא פחות ממצוין. תודה על הזמינות, המסירות והתוצאות.",
    stars: 5,
  },
];

export const Testimonials = () => {
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section id="testimonials" className="py-16 md:py-24">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-primary">מה לקוחותינו אומרים</h2>
        <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
          אנו גאים באמון שלקוחותינו נותנים בנו. הנה כמה מההמלצות שקיבלנו.
        </p>
        <div 
          className="w-full overflow-hidden group relative"
          style={{ maskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)" }}
        >
          <div className="flex animate-scroll-rtl group-hover:[animation-play-state:paused]">
            {duplicatedTestimonials.map((testimonial, index) => (
              <div key={index} className="flex-shrink-0 basis-full sm:basis-1/2 lg:basis-1/3 p-4">
                <Card className="h-full flex flex-col justify-between text-right shadow-md hover:shadow-xl transition-shadow">
                  <CardContent className="flex flex-col items-start p-6">
                    <div className="flex mb-4">
                      {Array.from({ length: testimonial.stars }).map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                    <p className="text-muted-foreground italic mb-4 text-sm min-h-[120px]">"{testimonial.quote}"</p>
                    <span className="font-bold text-primary mt-auto">{testimonial.name}</span>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};