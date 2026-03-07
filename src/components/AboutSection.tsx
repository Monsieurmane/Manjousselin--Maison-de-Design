import { motion } from "framer-motion";
import { Award, Users, Clock, MapPin } from "lucide-react";

const stats = [
  { icon: Award, value: "20+", label: "Projets réalisés" },
  { icon: Users, value: "20+", label: "Clients satisfaits" },
  { icon: Clock, value: "6", label: "Années d'expérience" },
  { icon: MapPin, value: "1", label: "Bureau au Sénégal" },
];

export const AboutSection = () => {
  return (
    <section id="apropos" className="py-16 md:py-32 px-4 md:px-6">
      <div className="container max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="font-body text-[10px] md:text-xs tracking-[0.3em] uppercase text-primary mb-4">
              À propos
            </p>
            <h2 className="font-heading text-3xl md:text-5xl font-light text-foreground mb-6">
              L'Excellence du{" "}
              <span className="italic font-display text-gradient-gold">Design Africain</span>
            </h2>
            <div className="w-16 h-px line-gold mb-8" />
            <p className="font-body text-xs md:text-sm text-muted-foreground leading-[1.8] font-light mb-6">
              Fondé à Hambourg, Manejousselin est un cabinet de conseil en design d'intérieur
              qui conjugue l'élégance contemporaine avec la richesse des traditions
              sénégalaises. Notre approche holistique transforme chaque espace en une
              expérience sensorielle unique.
            </p>
            <p className="font-body text-xs md:text-sm text-muted-foreground leading-[1.8] font-light mb-8">
              Spécialisés en céramique et aménagement d'espaces, nous allions savoir-faire
              artisanal et design contemporain pour créer des intérieurs qui allient
              fonctionnalité et esthétique. Chaque détail, du choix des carreaux à
              l'agencement des volumes, est pensé pour sublimer votre cadre de vie.
            </p>

            <a
              href="#contact"
              className="inline-block px-6 md:px-8 py-3 md:py-3.5 border border-primary text-primary font-body text-[10px] md:text-xs tracking-[0.2em] uppercase hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              En savoir plus
            </a>
          </motion.div>

          {/* Right - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="grid grid-cols-2 gap-px bg-border"
          >
            {stats.map((s) => (
              <div
                key={s.label}
                className="bg-background p-6 md:p-10 text-center"
              >
                <s.icon
                  size={24}
                  strokeWidth={1}
                  className="text-primary mx-auto mb-4"
                />
                <p className="font-display text-3xl md:text-4xl text-foreground mb-2">{s.value}</p>
                <p className="font-body text-[10px] md:text-xs tracking-[0.15em] uppercase text-muted-foreground">
                  {s.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
