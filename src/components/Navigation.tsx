import { Link, useLocation } from "react-router-dom";
import { Ghost } from "lucide-react";

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Event", path: "/event" },
    { name: "Team", path: "/team" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-primary/30">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 text-2xl font-bold">
            <Ghost className="w-8 h-8 text-primary animate-pulse" />
            <span className="bg-gradient-to-r tricktreat text-3xl  from-primary to-secondary bg-clip-text text-transparent">
              Z3ROD4Y CTF
            </span>
          </Link>

          <div className="flex gap-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative px-4 py-2 text-3xl haunted transition-all duration-300 ${
                  location.pathname === item.path
                    ? "text-primary"
                    : "text-foreground hover:text-primary"
                }`}
              >
                {item.name}
                {location.pathname === item.path && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary shadow-[0_0_10px_hsl(var(--primary))]" />
                )}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
