interface TeamCardProps {
  name: string;
  role: string;
  image: string;
  specialty: string;
}

const TeamCard = ({ name, role, image, specialty }: TeamCardProps) => {
  return (
    <div className="group relative">
      <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-500"></div>
      <div className="relative bg-card border border-primary/30 rounded-lg p-6 transform hover:scale-105 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,115,0,0.4)]">
        <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-primary/50">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        
        <h3 className="text-2xl tricktreat font-bold text-center mb-2 text-primary">
          {name}
        </h3>
        <p className="text-center text-xl text-muted-foreground haunted mb-2">{role}</p>
        <p className="text-center text-sm text-secondary quick">{specialty}</p>
        
        <div className="mt-4 pt-4 border-t border-primary/20 text-center">
          <span className="text-xs text-muted-foreground font-mono">
            [CLASSIFIED]
          </span>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
