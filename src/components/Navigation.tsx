import { Link, useLocation } from "react-router-dom";
import { Ghost, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navigation = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Event", path: "/event" },
    { name: "Team", path: "/team" },
  ];

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const menuVariants = {
    closed: {
      x: "100%",
    },
    open: {
      x: 0,
    },
  };

  const itemVariants = {
    closed: { x: 50, opacity: 0 },
    open: { x: 0, opacity: 1 },
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-primary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-14">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 text-2xl font-bold z-50">
              <img src="/images/Logo.png" className="w-8 h-8 sm:w-10 sm:h-10 text-primary " />
              <span className="bg-gradient-to-r tricktreat text-xl sm:text-2xl lg:text-3xl from-primary to-secondary bg-clip-text text-transparent">
                Z3ROD4Y CTF
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative px-4 py-2 text-lg lg:text-2xl xl:text-3xl haunted transition-all duration-300 ${
                    location.pathname === item.path
                      ? "text-primary"
                      : "text-foreground hover:text-primary"
                  }`}
                >
                  {item.name}
                  {location.pathname === item.path && (
                    <motion.span
                      layoutId="navbar-indicator"
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-primary shadow-[0_0_10px_hsl(var(--primary))]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden z-50 p-2 text-foreground hover:text-primary transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 40,
              }}
              className="fixed top-0 right-0 bottom-0 w-[75%] max-w-sm bg-background border-l border-primary/30 z-40 md:hidden shadow-2xl"
            >
              <div className="flex flex-col h-full pt-24 pb-8 px-6">
                {/* Navigation Items */}
                <nav className="flex-1 flex flex-col gap-2">
                  {navItems.map((item, i) => (
                    <motion.div
                      key={item.path}
                      variants={itemVariants}
                      transition={{
                        delay: i * 0.1,
                        type: "spring",
                        stiffness: 300,
                        damping: 24,
                      }}
                    >
                      <Link
                        to={item.path}
                        className={`group relative haunted block px-6 py-4 text-2xl haunted transition-all duration-300 rounded-lg ${
                          location.pathname === item.path
                            ? "text-primary bg-primary/10"
                            : "text-foreground hover:text-primary hover:bg-primary/5"
                        }`}
                      >
                        <span className="relative z-10">{item.name}</span>
                        {location.pathname === item.path && (
                          <motion.div
                            layoutId="mobile-menu-indicator"
                            className="absolute inset-0 border-2 border-primary rounded-lg shadow-[0_0_20px_rgba(255,115,0,0.3)]"
                            transition={{ type: "spring", stiffness: 380, damping: 30 }}
                          />
                        )}
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <Ghost className="w-5 h-5 text-primary animate-pulse" />
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                {/* Footer Info */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="border-t border-primary/20 pt-6"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <Ghost className="w-6 h-6 text-primary animate-pulse" />
                    <span className="text-sm text-muted-foreground font-mono">
                      Ready to hack?
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Join the spookiest CTF competition
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;