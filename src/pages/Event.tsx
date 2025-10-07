import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin, Trophy, Users, Flag } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Event = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".event-title", {
        opacity: 0,
        scale: 0.5,
        duration: 1,
        ease: "back.out(1.7)",
      });

      gsap.from(".event-subtitle", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: 0.3,
      });

      gsap.from(".detail-card", {
        scrollTrigger: {
          trigger: ".detail-card",
          start: "top 85%",
        },
        opacity: 0,
        x: -800,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(".prize-card", {
        scrollTrigger: {
          trigger: ".prize-card",
          start: "top 85%",
        },
        opacity: 0,
        x: 800,
        duration: 1,
        ease: "power3.out",
      });

      gsap.utils.toArray(".category-card").forEach((card, i) => {
        gsap.from(card as HTMLElement, {
          scrollTrigger: {
            trigger: card as HTMLElement,
            start: "top 85%",
          },
          opacity: 0,
          scale: 0.8,
          duration: 0.6,
          ease: "back.out(1.7)",
          delay: i * 0.1,
        });
      });

      gsap.from(".cta-section", {
        scrollTrigger: {
          trigger: ".cta-section",
          start: "top 80%",
        },
        opacity: 0,
        y: 80,
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
          <h1 className="event-title text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-center haunted">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Spooky CTF 2024
            </span>
          </h1>
          <p className="event-subtitle text-lg sm:text-xl md:text-2xl text-center text-muted-foreground mb-10 md:mb-12 spooky">
            The Most Haunting Cybersecurity Challenge of the Year
          </p>

          {/* Event Details */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
            <div className="detail-card bg-card border border-primary/30 rounded-lg p-6 md:p-8 transform hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(255,115,0,0.2)]">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary quick">Event Details</h2>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Calendar className="w-5 h-5 md:w-6 md:h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold tricktreat text-base md:text-2xl">Date</h3>
                    <p className="text-sm md:text-lg text-muted-foreground ">October 31st, 2024</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="w-5 h-5 md:w-6 md:h-6 text-secondary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-base tricktreat  md:text-2xl">Duration</h3>
                    <p className="text-sm md:text-base text-muted-foreground">48 Hours of Pure Terror</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="w-5 h-5 md:w-6 md:h-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold tricktreat text-base md:text-2xl">Location</h3>
                    <p className="text-sm md:text-base text-muted-foreground">Online - From the Comfort of Your Crypt</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Users className="w-5 h-5 md:w-6 md:h-6 text-secondary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold tricktreat text-base md:text-2xl">Format</h3>
                    <p className="text-sm md:text-base text-muted-foreground">Team-based (1-4 members)</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="prize-card bg-card border border-secondary/30 rounded-lg p-6 md:p-8 transform hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(139,0,139,0.2)]">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-secondary quick">Prizes</h2>
              
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-primary/20 to-transparent p-4 rounded-lg border border-primary/30">
                  <div className="flex items-center gap-2 mb-2">
                    <Trophy className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                    <h3 className="font-bold text-lg md:text-2xl text-primary tricktreat">1st Place</h3>
                  </div>
                  <p className="text-xl md:text-2xl font-bold">$5,000</p>
                  <p className="text-xs md:text-sm text-muted-foreground">+ Eternal Glory</p>
                </div>

                <div className="bg-gradient-to-r from-secondary/20 to-transparent p-4 rounded-lg border border-secondary/30">
                  <div className="flex items-center gap-2 mb-2">
                    <Trophy className="w-5 h-5 md:w-6 md:h-6 text-secondary" />
                    <h3 className="font-bold text-lg md:text-2xl text-primary tricktreat">2nd Place</h3>
                  </div>
                  <p className="text-xl md:text-2xl font-bold">$3,000</p>
                  <p className="text-xs md:text-sm text-muted-foreground">+ Spooky Swag</p>
                </div>

                <div className="bg-gradient-to-r from-primary/20 to-transparent p-4 rounded-lg border border-primary/30">
                  <div className="flex items-center gap-2 mb-2">
                    <Trophy className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                    <h3 className="font-bold text-lg md:text-2xl text-primary tricktreat">3rd Place</h3>
                  </div>
                  <p className="text-xl md:text-2xl font-bold">$1,000</p>
                  <p className="text-xs md:text-sm text-muted-foreground">+ Haunted Merchandise</p>
                </div>
              </div>
            </div>
          </div>

          {/* Challenge Categories */}
          <div className="mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-center text-primary haunted">
              Challenge Categories
            </h2>
            
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {[
                { name: "Web Exploitation", difficulty: "Medium", points: "100-500" },
                { name: "Binary Exploitation", difficulty: "Hard", points: "200-800" },
                { name: "Reverse Engineering", difficulty: "Hard", points: "200-700" },
                { name: "Cryptography", difficulty: "Medium", points: "100-600" },
                { name: "Forensics", difficulty: "Easy", points: "50-400" },
                { name: "Miscellaneous", difficulty: "Variable", points: "50-1000" },
              ].map((category) => (
                <div
                  key={category.name}
                  className="category-card bg-card border border-primary/30 rounded-lg p-4 md:p-6 transform hover:scale-105 transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,115,0,0.3)]"
                >
                  <Flag className="w-6 h-6 md:w-8 md:h-8 text-primary mb-3" />
                  <h3 className="text-base md:text-xl font-bold mb-2 tricktreat">{category.name}</h3>
                  <p className="text-xs md:text-sm text-muted-foreground mb-1">
                    Difficulty: <span className="text-secondary">{category.difficulty}</span>
                  </p>
                  <p className="text-xs md:text-sm text-muted-foreground">
                    Points: <span className="text-primary">{category.points}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Registration CTA */}
          <div className="cta-section text-center bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 border border-primary/30 rounded-lg p-8 md:p-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-primary haunted">Ready to Face Your Fears?</h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 md:mb-8 spooky">
              Registration opens on October 1st. Don't miss your chance to join the hunt!
            </p>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-[0_0_20px_rgba(255,115,0,0.5)] hover:shadow-[0_0_30px_rgba(255,115,0,0.8)] transition-all duration-300 text-base md:text-lg px-6 md:px-8 py-4 md:py-6 quick">
              Register Your Team
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;
