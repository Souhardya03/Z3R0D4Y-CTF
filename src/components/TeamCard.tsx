import { Linkedin, Twitter, Github, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

interface TeamCardProps {
  name: string;
  role: string;
  image: string;
  specialty: string;
  linkedin?: string;
  twitter?: string;
  github?: string;
}

const TeamCard = ({ name, role, image, specialty, linkedin, twitter, github }: TeamCardProps) => {
  return (
    <motion.div 
      className="group relative"
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {/* Animated gradient border */}
      <div className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-primary rounded-2xl opacity-0 group-hover:opacity-100 blur-sm transition-all duration-500 animate-gradient-xy"></div>
      
      {/* Card content */}
      <div className="relative bg-gradient-to-br from-card via-card to-card/80 backdrop-blur-sm border border-primary/20 rounded-2xl overflow-hidden">
        {/* Glassmorphism overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
        
        {/* Decorative corner accent */}
        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/20 to-transparent rounded-bl-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        <div className="relative p-6">
          {/* Image with modern styling */}
          <div className="relative mb-4">
            <div className="relative w-28 h-28 mx-auto">
              {/* Rotating gradient ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-secondary to-primary opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-500 group-hover:animate-spin-slow"></div>
              
              {/* Image container */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-primary/30 group-hover:border-primary/60 transition-all duration-300 shadow-lg">
                <img
                  src={image}
                  alt={name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              {/* Sparkle effect */}
              <motion.div
                className="absolute -top-2 -right-2 text-primary opacity-0 group-hover:opacity-100"
                initial={{ scale: 0, rotate: 0 }}
                whileHover={{ scale: 1, rotate: 180 }}
                transition={{ duration: 0.5 }}
              >
                <Sparkles className="w-6 h-6" />
              </motion.div>
            </div>
          </div>
          
          {/* Name with modern styling */}
          <div className="text-center mb-3">
            <h3 className="text-2xl tricktreat font-bold bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300 inline-block">
              {name}
            </h3>
          </div>
          
          {/* Role badge */}
          <div className="flex justify-center mb-3">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/30 group-hover:border-primary/50 transition-colors duration-300">
              <p className="text-sm haunted font-medium text-foreground">{role}</p>
            </div>
          </div>
          
          {/* Specialty */}
          <p className="text-center text-sm quick text-secondary mb-4 opacity-80 group-hover:opacity-100 transition-opacity duration-300">
            {specialty}
          </p>
          
          {/* Social links with modern design */}
          <div className="flex items-center justify-center gap-4 pt-4 border-t border-primary/10">
            {linkedin && (
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="relative group/link"
                aria-label="LinkedIn"
              >
                <div className="absolute inset-0 bg-primary/20 rounded-lg blur-md opacity-0 group-hover/link:opacity-100 transition-opacity duration-300"></div>
                <div className="relative p-2 rounded-lg bg-card/50 border border-primary/20 hover:border-primary/60 hover:bg-primary/10 transition-all duration-300">
                  <Linkedin className="w-4 h-4 text-muted-foreground group-hover/link:text-primary group-hover/link:scale-110 transition-all duration-300" />
                </div>
              </a>
            )}
            {twitter && (
              <a
                href={twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="relative group/link"
                aria-label="Twitter"
              >
                <div className="absolute inset-0 bg-secondary/20 rounded-lg blur-md opacity-0 group-hover/link:opacity-100 transition-opacity duration-300"></div>
                <div className="relative p-2 rounded-lg bg-card/50 border border-secondary/20 hover:border-secondary/60 hover:bg-secondary/10 transition-all duration-300">
                  <Twitter className="w-4 h-4 text-muted-foreground group-hover/link:text-secondary group-hover/link:scale-110 transition-all duration-300" />
                </div>
              </a>
            )}
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="relative group/link"
                aria-label="GitHub"
              >
                <div className="absolute inset-0 bg-primary/20 rounded-lg blur-md opacity-0 group-hover/link:opacity-100 transition-opacity duration-300"></div>
                <div className="relative p-2 rounded-lg bg-card/50 border border-primary/20 hover:border-primary/60 hover:bg-primary/10 transition-all duration-300">
                  <Github className="w-4 h-4 text-muted-foreground group-hover/link:text-primary group-hover/link:scale-110 transition-all duration-300" />
                </div>
              </a>
            )}
          </div>
        </div>
        
        {/* Bottom accent line */}
        <div className="h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>
      
      <style>{`
        @keyframes gradient-xy {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        
        .animate-gradient-xy {
          background-size: 200% 200%;
          animation: gradient-xy 3s ease infinite;
        }
        
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        .group:hover .group-hover\\:animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
      `}</style>
    </motion.div>
  );
};

export default TeamCard;