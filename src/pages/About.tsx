import Navigation from "@/components/Navigation";
import Terminal from "@/components/Terminal";
import { Code2, Shield, Zap } from "lucide-react";
import hackerSkull from "@/assets/hacker-skull.jpg";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-title", {
        opacity: 0,
        y: -50,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(".about-image", {
        scrollTrigger: {
          trigger: ".about-image",
          start: "top 80%",
        },
        opacity: 0,
        scale: 0.8,
        rotateY: -90,
        duration: 1.2,
        ease: "power3.out",
      });

      gsap.from(".about-terminal", {
        scrollTrigger: {
          trigger: ".about-terminal",
          start: "top 80%",
        },
        opacity: 0,
        x: 100,
        duration: 1,
        ease: "power3.out",
      });

        gsap.utils.toArray(".skill-card").forEach((card, i) => {
          gsap.from(card as HTMLElement, {
            scrollTrigger: {
              trigger: card as HTMLElement,
              start: "top 85%",
            },
            opacity: 0,
            y: 80,
            duration: 0.8,
            ease: "back.out(1.7)",
            delay: i * 0.2,
          });
        });

      gsap.from(".mission-section", {
        scrollTrigger: {
          trigger: ".mission-section",
          start: "top 80%",
        },
        opacity: 0,
        y: 60,
        duration: 1,
        ease: "power3.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-background" ref={containerRef}>
      <Navigation />
      
      <div className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h1 className="about-title text-4xl sm:text-5xl md:text-6xl font-bold mb-8 text-center haunted">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              About Our Coven
            </span>
          </h1>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-12 md:mb-16">
            <div className="about-image space-y-6">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
                <img
                  src={hackerSkull}
                  alt="Hacker Skull"
                  className="relative rounded-lg w-full shadow-[0_0_30px_rgba(255,115,0,0.3)]"
                />
              </div>
            </div>

            <div className="about-terminal space-y-6">
              <Terminal />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
            <div className="skill-card bg-card border border-primary/30 rounded-lg p-6 transform hover:scale-105 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,115,0,0.3)]">
              <Code2 className="w-10 h-10 md:w-12 md:h-12 text-primary mb-4" />
              <h3 className="text-lg md:text-xl font-bold mb-3 text-primary quick">Code Wizardry</h3>
              <p className="text-sm md:text-2xl bloodlust text-muted-foreground">
                We cast spells in Python, summon demons in C, and brew potions in JavaScript
              </p>
            </div>

            <div className="skill-card bg-card border border-secondary/30 rounded-lg p-6 transform hover:scale-105 transition-all duration-300 hover:shadow-[0_0_30px_rgba(138,43,226,0.3)]">
              <Shield className="w-10 h-10 md:w-12 md:h-12 text-secondary mb-4" />
              <h3 className="text-lg md:text-xl font-bold mb-3 text-secondary quick">Security Sorcery</h3>
              <p className="text-sm md:text-2xl bloodlust text-muted-foreground">
                Breaking systems and protecting them - we know both sides of the dark arts
              </p>
            </div>

            <div className="skill-card bg-card border border-primary/30 rounded-lg p-6 transform hover:scale-105 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,115,0,0.3)] sm:col-span-2 md:col-span-1">
              <Zap className="w-10 h-10 md:w-12 md:h-12 text-primary mb-4" />
              <h3 className="text-lg md:text-xl font-bold mb-3 text-primary quick">Lightning Speed</h3>
              <p className="text-sm md:text-2xl bloodlust text-muted-foreground">
                We hack fast, learn faster, and compete at supernatural speeds
              </p>
            </div>
          </div>

          <div className="mission-section bg-card border border-primary/20 rounded-lg p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-primary quick">Our Dark Mission</h2>
            <p className="text-base md:text-xl text-justify text-muted-foreground leading-relaxed bloodlus mb-4">
              October marks Cybersecurity Awareness Month, an important time to emphasize the need for online safety. As our lives become more digital, safeguarding personal and professional information is vital. This month serves as a reminder to adopt smart security practices, like using strong, unique passwords, enabling multi-factor authentication, and being careful with personal data. By staying informed and proactive, we can shield ourselves and our organizations from cyber threats, helping create a safer internet for all.
            </p>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
