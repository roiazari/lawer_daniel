import { motion } from "framer-motion";

const videos = [
  "7318323738983042347", // TikTok's own video
  "7284951559622937899", // Google's video
  "7299803181838322987", // Microsoft's video
  "7308385524373294382", // Amazon's video
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

export const TikTokVideos = () => {
  return (
    <section id="videos" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-primary">מהטיקטוק שלנו</h2>
        <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
          צפו בקטעים קצרים וטיפים משפטיים מעמוד הטיקטוק שלנו.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {videos.map((videoId, index) => (
            <motion.div
              key={videoId}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="h-full w-full flex justify-center"
            >
              <blockquote
                className="tiktok-embed"
                cite={`https://www.tiktok.com/embed/v2/${videoId}`}
                data-video-id={videoId}
                style={{ maxWidth: "605px", minWidth: "325px", margin: "0 auto" }}
              >
                <section></section>
              </blockquote>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};