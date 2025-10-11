import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Skull, Trophy, Users } from "lucide-react";
import heroImage from "@/assets/halloween-hero.jpg";
import { useEffect, useMemo, useState, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
	const heroRef = useRef(null);
	const featuresRef = useRef(null);
	const [now, setNow] = useState(() => new Date());
	const target = useMemo(() => {
		// Target Halloween 31st Oct this year at 18:00 local
		const d = new Date();
		const year = d.getFullYear();
		return new Date(`${year}-10-31T18:00:00`);
	}, []);

	useEffect(() => {
		const t = setInterval(() => setNow(new Date()), 1000);
		return () => clearInterval(t);
	}, []);

	useEffect(() => {
		const ctx = gsap.context(() => {
			gsap.from(".hero-title", {
				opacity: 0,
				scale: 0.5,
				duration: 1.5,
				ease: "back.out(1.7)",
			});

			gsap.from(".hero-subtitle", {
				opacity: 0,
				y: 50,
				duration: 1,
				delay: 0.5,
			});

			gsap.from(".hero-buttons", {
				opacity: 0,
				y: 50,
				duration: 0.8,
				delay: 0.8,
			});

			gsap.from(".countdown-box", {
				opacity: 0,
				scale: 0.8,
				stagger: 0.1,
				duration: 0.6,
				delay: 1.2,
				ease: "back.out(1.7)",
			});

			// Animate feature cards with proper ScrollTrigger
			const featureCards = gsap.utils.toArray<HTMLElement>(".feature-card");
			featureCards.forEach((card, i) => {
				gsap.from(card as HTMLElement, {
					scrollTrigger: {
						trigger: card as HTMLElement,
						start: "top 85%",
						end: "bottom 15%",
						toggleActions: "play none none reverse",
					},
					opacity: 0,
					y: 100,
					rotateX: -30,
					duration: 0.2,
					delay: i * 0.4,
					ease: "power3.out",
				});
			});
		}, heroRef);

		return () => ctx.revert();
	}, []);

	const diff = Math.max(0, target.getTime() - now.getTime());
	const days = Math.floor(diff / (1000 * 60 * 60 * 24));
	const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
	const mins = Math.floor((diff / (1000 * 60)) % 60);
	const secs = Math.floor((diff / 1000) % 60);

	return (
		<div className=" bg-background" ref={heroRef}>
			<Navigation />

			{/* Hero Section */}
			<section className="relative pt-32  gap-10 flex items-center justify-center overflow-hidden px-4">
				<div
					className="absolute inset-0 bg-cover bg-center"
					style={{ backgroundImage: `url(${heroImage})` }}>
					<div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-background"></div>
				</div>

				<div className="relative z-10 text-center max-w-6xl mx-auto">
					<h1 className="hero-title text-6xl sm:text-7xl md:text-8xl lg:text-[10em] font-bold mb-6">
						<span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text spooky text-transparent">
							Z3ROD4Y CTF
						</span>
					</h1>
					<p className="hero-subtitle text-lg sm:text-xl md:text-2xl lg:text-3xl spooky mb-8 text-muted-foreground">
						Where Hackers Fear to Tread... But We Do Anyway
					</p>
					<div className="hero-buttons flex flex-col sm:flex-row gap-4 justify-center mb-10 md:mb-14">
						<Link to="/event">
							<Button className="md:w-full w-2/3 sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground text-lg md:text-2xl quick py-6 md:py-8 px-6 shadow-[0_0_20px_rgba(255,115,0,0.5)] hover:shadow-[0_0_30px_rgba(255,115,0,0.8)] transition-all duration-300">
								Join the Hunt
							</Button>
						</Link>
						<Link to="/about">
							<Button
								variant="outline"
								className="md:w-full w-2/3 sm:w-auto hover:text-white transition-colors border-primary shadow-[0_0_20px_rgba(255,115,0,0.5)] text-lg md:text-2xl quick py-6 md:py-8 px-6 text-primary hover:bg-primary/10">
								Learn More
							</Button>
						</Link>
					</div>
					<div className="grid grid-cols-2 sm:grid-cols-4 gap-2 md:gap-4 mx-auto max-w-xl">
						{[
							{ label: "Days", v: days },
							{ label: "Hours", v: hours },
							{ label: "Mins", v: mins },
							{ label: "Secs", v: secs },
						].map((t) => (
							<div
								key={t.label}
								className="countdown-box rounded-lg border bg-zinc-900/40 py-3 md:py-4 hover:scale-110 transition-transform">
								<div className="text-4xl sm:text-3xl md:text-6xl spooky font-extrabold tabular-nums">
									{String(t.v).padStart(2, "0")}
								</div>
								<div className="md:text-[16px] text-[12px] uppercase groovy tracking-widest text-muted-foreground">
									{t.label}
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Features Section */}
			<section className="py-10 md:py-24 px-4" ref={featuresRef}>
				<div className="container mx-auto">
					<div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
						<div className="feature-card text-center p-6 md:p-8 bg-card border border-primary/30 rounded-lg transform hover:scale-105 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,115,0,0.3)]">
							<Skull className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 text-primary" />
							<h3 className="text-xl md:text-2xl quick font-bold mb-3 text-primary">
								Deadly Challenges
							</h3>
							<p className="text-muted-foreground bloodlust text-base md:text-2xl">
								Face the most spine-chilling cybersecurity challenges
							</p>
						</div>

						<div className="feature-card text-center p-6 md:p-8 bg-card border border-secondary/30 rounded-lg transform hover:scale-105 transition-all duration-300 hover:shadow-[0_0_30px_rgba(139,0,139,0.3)]">
							<Trophy className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 text-secondary" />
							<h3 className="text-xl md:text-2xl quick font-bold mb-3 text-secondary">
								Haunting Prizes
							</h3>
							<p className="text-muted-foreground bloodlust text-base md:text-2xl">
								Win rewards that will haunt your dreams (in a good way)
							</p>
						</div>

						<div className="feature-card text-center p-6 md:p-8 bg-card border border-primary/30 rounded-lg transform hover:scale-105 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,115,0,0.3)] sm:col-span-2 md:col-span-1">
							<Users className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 text-primary" />
							<h3 className="text-xl md:text-2xl quick font-bold mb-3 text-primary">
								Elite Team
							</h3>
							<p className="text-muted-foreground bloodlust text-base md:text-2xl">
								Join our coven of elite hackers and security experts
							</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Home;