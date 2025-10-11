import Navigation from "@/components/Navigation";
import Terminal from "@/components/Terminal";
import { Code2, Shield, Zap } from "lucide-react";
import hackerSkull from "@/assets/hacker-skull.jpg";
import { motion } from "framer-motion";
import { useEffect } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Title */}
          <motion.h1
            className="text-5xl sm:text-5xl md:text-6xl font-bold mb-8 text-center haunted"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              About Our Coven
            </span>
          </motion.h1>

          {/* Image + Terminal */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-12 md:mb-16">
            {/* Image */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, scale: 0.8, rotateY: -90 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
                <img
                  src={hackerSkull}
                  alt="Hacker Skull"
                  className="relative rounded-lg w-full shadow-[0_0_30px_rgba(255,115,0,0.3)]"
                />
              </div>
            </motion.div>

            {/* Terminal */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              // viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <Terminal />
            </motion.div>
          </div>

          {/* Skill Cards */}
          <motion.div
            className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            {[
              {
                icon: <Code2 className="w-10 h-10 md:w-12 md:h-12 text-primary mb-4" />,
                title: "Code Wizardry",
                color: "text-primary",
                border: "border-primary/30",
                glow: "hover:shadow-[0_0_30px_rgba(255,115,0,0.3)]",
                desc: "We cast spells in Python, summon demons in C, and brew potions in JavaScript",
              },
              {
                icon: <Shield className="w-10 h-10 md:w-12 md:h-12 text-secondary mb-4" />,
                title: "Security Sorcery",
                color: "text-secondary",
                border: "border-secondary/30",
                glow: "hover:shadow-[0_0_30px_rgba(138,43,226,0.3)]",
                desc: "Breaking systems and protecting them - we know both sides of the dark arts",
              },
              {
                icon: <Zap className="w-10 h-10 md:w-12 md:h-12 text-primary mb-4" />,
                title: "Lightning Speed",
                color: "text-primary",
                border: "border-primary/30",
                glow: "hover:shadow-[0_0_30px_rgba(255,115,0,0.3)]",
                desc: "We hack fast, learn faster, and compete at supernatural speeds",
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                className={`skill-card bg-card ${card.border} rounded-lg p-6 transform hover:scale-105 transition-all duration-300 ${card.glow}`}
                variants={fadeUp}
                transition={{ duration: 0.8, ease: [0.42, 0, 0.58, 1] }}
              >
                {card.icon}
                <h3
                  className={`text-lg md:text-xl font-bold mb-3 ${card.color} quick`}
                >
                  {card.title}
                </h3>
                <p className="text-lg md:text-2xl bloodlust text-muted-foreground">
                  {card.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Mission Section */}
          <motion.div
            className="mission-section bg-card border border-primary/20 rounded-lg p-6 md:p-8"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1, ease: [0.42, 0, 0.58, 1] }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-primary quick">
              Our Dark Mission
            </h2>
            <p className="text-base md:text-xl text-justify text-muted-foreground leading-relaxed bloodlus mb-4">
              October marks Cybersecurity Awareness Month, an important time to emphasize the need for online safety. As our lives become more digital, safeguarding personal and professional information is vital. This month serves as a reminder to adopt smart security practices, like using strong, unique passwords, enabling multi-factor authentication, and being careful with personal data. By staying informed and proactive, we can shield ourselves and our organizations from cyber threats, helping create a safer internet for all.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;