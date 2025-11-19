import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Gavel, Home, Users, Briefcase } from "lucide-react";

const services = [
  {
    icon: <Home className="h-8 w-8 text-primary" />,
    title: "מקרקעין ונדל'ן",
    description: "ליווי בעסקאות מכר, רכישה, שכירות, תמ'א 38 ופינוי בינוי. ייצוג מול רשויות וקבלנים.",
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: "דיני משפחה",
    description: "ניהול תיקי גירושין, הסכמי ממון, צוואות וירושות, אפוטרופסות ומשמורת ילדים.",
  },
  {
    icon: <Briefcase className="h-8 w-8 text-primary" />,
    title: "משפט מסחרי",
    description: "הקמת חברות, עריכת חוזים מסחריים, ליווי שוטף לחברות וייצוג בסכסוכים עסקיים.",
  },
  {
    icon: <Gavel className="h-8 w-8 text-primary" />,
    title: "ליטיגציה",
    description: "ייצוג בבתי משפט ובתי דין בכל הערכאות, ניהול תביעות ופתרון סכסוכים מורכבים.",
  },
];

export const PracticeAreas = () => {
  return (
    <section id="services" className="py-16 md:py-24">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-primary">תחומי התמחות</h2>
        <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
          אנו מציעים מגוון רחב של שירותים משפטיים. המומחיות שלנו מאפשרת לנו להעניק פתרונות יצירתיים ומותאמים אישית לכל לקוח.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <Card key={service.title} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto bg-secondary rounded-full p-3 w-fit mb-4">
                  {service.icon}
                </div>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription className="pt-2">{service.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};