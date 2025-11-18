export const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">אודות המשרד</h2>
            <p className="text-muted-foreground mb-4">
              משרד עורכי הדין בראשותו של עו"ד דניאל לוי הוקם מתוך חזון להעניק שירות משפטי ברמה הגבוהה ביותר, תוך שמירה על יחס אישי וחם לכל לקוח. אנו מאמינים כי הצלחה משפטית נבנית על יסודות של אמון, מקצועיות והבנה מעמיקה של צרכי הלקוח.
            </p>
            <p className="text-muted-foreground">
              צוות המשרד מורכב מעורכי דין מנוסים ומוכשרים, אשר פועלים ללא לאות על מנת להשיג את התוצאות הטובות ביותר עבור לקוחותינו. אנו מלווים את לקוחותינו בכל שלבי ההליך המשפטי, החל מייעוץ ראשוני ועד לייצוג בערכאות השונות.
            </p>
          </div>
          <div className="flex justify-center">
            <img 
              src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=2070&auto=format&fit=crop" 
              alt="עו'ד דניאל לוי" 
              className="rounded-lg shadow-xl w-full max-w-sm h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};