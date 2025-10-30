import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Skull, Trophy, Users, ExternalLink, Sparkles } from "lucide-react";
import heroImage from "@/assets/halloween-hero.jpg";
import { useEffect, useMemo, useState, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
	const heroRef = useRef(null);
	const featuresRef = useRef(null);
	const sponsorsRef = useRef(null);
	const [now, setNow] = useState(() => new Date());
	const target = useMemo(() => {
		const d = new Date();
		const year = d.getFullYear();
		return new Date(`${year}-10-30T18:30:00`);
	}, []);

	// Sponsor data with placeholder logos
	const sponsors = [
		{
			name: "AceInt",
			logo: "/images/sponsor1.png",
			url: "https://aceint.ai/",
			tier: "platinum",
		},
		// {
		// 	name: "HackForge Labs",
		// 	logo: "https://via.placeholder.com/220x90/8B008B/FFFFFF?text=HackForge+Labs",
		// 	url: "https://example.com/hackforge",
		// 	tier: "platinum"
		// },
		// {
		// 	name: "SecureNet Systems",
		// 	logo: "https://via.placeholder.com/200x80/FF7300/FFFFFF?text=SecureNet",
		// 	url: "https://example.com/securenet",
		// 	tier: "gold"
		// },
		// {
		// 	name: "ByteGuard Pro",
		// 	logo: "https://via.placeholder.com/200x80/8B008B/FFFFFF?text=ByteGuard",
		// 	url: "https://example.com/byteguard",
		// 	tier: "gold"
		// },
		// {
		// 	name: "CodeShield",
		// 	logo: "https://via.placeholder.com/180x70/FF7300/FFFFFF?text=CodeShield",
		// 	url: "https://example.com/codeshield",
		// 	tier: "gold"
		// },
		// {
		// 	name: "DataVault Inc",
		// 	logo: "https://via.placeholder.com/170x65/8B008B/FFFFFF?text=DataVault",
		// 	url: "https://example.com/datavault",
		// 	tier: "silver"
		// },
		// {
		// 	name: "NetDefender",
		// 	logo: "https://via.placeholder.com/170x65/FF7300/FFFFFF?text=NetDefender",
		// 	url: "https://example.com/netdefender",
		// 	tier: "silver"
		// },
		// {
		// 	name: "CryptoLabs",
		// 	logo: "https://via.placeholder.com/170x65/8B008B/FFFFFF?text=CryptoLabs",
		// 	url: "https://example.com/cryptolabs",
		// 	tier: "silver"
		// },
		// {
		// 	name: "ShieldTech",
		// 	logo: "https://via.placeholder.com/170x65/FF7300/FFFFFF?text=ShieldTech",
		// 	url: "https://example.com/shieldtech",
		// 	tier: "silver"
		// }
	];

	useEffect(() => {
		const t = setInterval(() => setNow(new Date()), 1000);
		return () => clearInterval(t);
	}, []);

	useEffect(() => {
		const ctx = gsap.context(() => {
			// Hero animations
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

			// Feature cards animation
			const featureCards = gsap.utils.toArray<HTMLElement>(".feature-card");
			featureCards.forEach((card, i) => {
				gsap.from(card as HTMLElement, {
					scrollTrigger: {
						trigger: card as HTMLElement,
						start: "top 85%",
						toggleActions: "play none none reverse",
					},
					opacity: 0,
					y: 100,
					rotateX: -30,
					duration: 0.8,
					delay: i * 0.2,
					ease: "power3.out",
				});
			});

			// Sponsor section animations
			gsap.from(".sponsor-header", {
				scrollTrigger: {
					trigger: ".sponsor-header",
					start: "top 85%",
					toggleActions: "play none none reverse",
				},
				opacity: 0,
				y: 50,
				duration: 1,
				ease: "power2.out",
			});

			const sponsorCards = gsap.utils.toArray<HTMLElement>(".sponsor-card");
			sponsorCards.forEach((card, i) => {
				gsap.from(card as HTMLElement, {
					scrollTrigger: {
						trigger: card as HTMLElement,
						start: "top 90%",
						toggleActions: "play none none reverse",
					},
					opacity: 0,
					y: 60,
					scale: 0.85,
					duration: 0.7,
					delay: i * 0.08,
					ease: "back.out(1.4)",
				});
			});

			// Floating animation for sponsor tier badges
			gsap.to(".tier-badge", {
				y: -5,
				duration: 2,
				repeat: -1,
				yoyo: true,
				ease: "sine.inOut",
				stagger: 0.3,
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
		<div
			className="bg-background"
			ref={heroRef}>
			<Navigation />

			{/* Hero Section */}
			<section className="relative pt-32 gap-10 flex items-center justify-center overflow-hidden px-4">
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

			{/* Sponsors Section */}
			<section
				className="pb-10 pt-32 px-4 relative overflow-hidden"
				ref={sponsorsRef}>
				{/* Animated background elements */}
				<div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background"></div>
				<div className="absolute top-20 left-10 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px] animate-pulse"></div>
				<div
					className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[150px] animate-pulse"
					style={{ animationDelay: "1s" }}></div>

				<div className="container mx-auto relative z-10">
					{/* Header */}
					<div className="sponsor-header text-center mb-16 md:mb-20">
						<div className="inline-block mb-4">
							<Sparkles className="w-8 h-8 md:w-12 md:h-12 text-primary animate-pulse mx-auto" />
						</div>
						<h2 className="text-4xl md:text-6xl lg:text-7xl spooky font-bold mb-6">
							<span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
								Our Dark Patrons
							</span>
						</h2>
						<p className="text-muted-foreground text-lg md:text-2xl bloodlust max-w-3xl mx-auto">
							These fearless organizations fuel our descent into cybersecurity
							chaos
						</p>
					</div>

					{/* Platinum Tier */}
					<div className="mb-16 md:mb-20">
						<div className="flex items-center justify-center gap-3 mb-10">
							<div className="h-px w-20 bg-gradient-to-r from-transparent to-primary"></div>
							<h3 className="tier-badge text-2xl md:text-3xl lg:text-4xl quick font-bold text-primary inline-flex items-center gap-2">
								<Trophy className="w-6 h-6 md:w-8 md:h-8" />
								Platinum Tier
							</h3>
							<div className="h-px w-20 bg-gradient-to-l from-transparent to-primary"></div>
						</div>
						<div className="grid sm:grid-cols-1 gap-8 md:gap-10 max-w-xl mx-auto">
							{sponsors
								.filter((s) => s.tier === "platinum")
								.map((sponsor, i) => (
									<a
										key={i}
										href={sponsor.url}
										target="_blank"
										rel="noopener noreferrer"
										className="sponsor-card group relative block">
										<div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
										<div className="relative p-10 md:p-12 bg-gradient-to-br from-zinc-900/90 to-zinc-950/90 backdrop-blur-xl border-2 border-primary/40 rounded-2xl transform transition-all duration-500 group-hover:scale-105 group-hover:border-primary group-hover:shadow-[0_0_50px_rgba(255,115,0,0.5)]">
											<div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/10 group-hover:to-secondary/10 rounded-2xl transition-all duration-500"></div>

											<div className="relative flex items-center justify-center min-h-[120px] md:min-h-[140px]">
												<img
													src={sponsor.logo}
													alt={sponsor.name}
													className="max-w-full max-h-full object-contain filter brightness-90 group-hover:brightness-110 group-hover:scale-110 transition-all duration-500"
												/>
											</div>

											<div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:rotate-12">
												<ExternalLink className="w-6 h-6 text-primary drop-shadow-[0_0_8px_rgba(255,115,0,0.8)]" />
											</div>

											{/* Sparkle effect */}
											<div className="absolute -top-2 -right-2 w-4 h-4 bg-primary rounded-full opacity-0 group-hover:opacity-100 animate-ping"></div>
										</div>
									</a>
								))}
						</div>
					</div>

					{/* Gold Tier */}
					{/* <div className="mb-16 md:mb-20">
						<div className="flex items-center justify-center gap-3 mb-8">
							<div className="h-px w-16 bg-gradient-to-r from-transparent to-secondary"></div>
							<h3 className="tier-badge text-xl md:text-2xl lg:text-3xl quick font-bold text-secondary inline-flex items-center gap-2">
								<Trophy className="w-5 h-5 md:w-7 md:h-7" />
								Gold Tier
							</h3>
							<div className="h-px w-16 bg-gradient-to-l from-transparent to-secondary"></div>
						</div>
						<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
							{sponsors.filter(s => s.tier === "gold").map((sponsor, i) => (
								<a
									key={i}
									href={sponsor.url}
									target="_blank"
									rel="noopener noreferrer"
									className="sponsor-card group relative block">
									<div className="absolute inset-0 bg-gradient-to-br from-secondary/15 to-primary/15 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
									<div className="relative p-8 md:p-10 bg-gradient-to-br from-zinc-900/80 to-zinc-950/80 backdrop-blur-lg border border-secondary/30 rounded-xl transform transition-all duration-500 group-hover:scale-105 group-hover:border-secondary group-hover:shadow-[0_0_40px_rgba(139,0,139,0.4)]">
										<div className="absolute inset-0 bg-gradient-to-br from-secondary/0 to-secondary/0 group-hover:from-secondary/5 group-hover:to-primary/5 rounded-xl transition-all duration-500"></div>
										
										<div className="relative flex items-center justify-center min-h-[100px] md:min-h-[110px]">
											<img 
												src={sponsor.logo} 
												alt={sponsor.name}
												className="max-w-full max-h-full object-contain filter brightness-90 group-hover:brightness-110 group-hover:scale-110 transition-all duration-500"
											/>
										</div>
										
										<div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:rotate-12">
											<ExternalLink className="w-5 h-5 text-secondary drop-shadow-[0_0_6px_rgba(139,0,139,0.8)]" />
										</div>
									</div>
								</a>
							))}
						</div>
					</div> */}

					{/* Silver Tier */}
					{/* <div className="mb-16">
						<div className="flex items-center justify-center gap-3 mb-8">
							<div className="h-px w-12 bg-gradient-to-r from-transparent to-zinc-500"></div>
							<h3 className="tier-badge text-lg md:text-xl lg:text-2xl quick font-bold text-zinc-400 inline-flex items-center gap-2">
								<Trophy className="w-5 h-5 md:w-6 md:h-6" />
								Silver Tier
							</h3>
							<div className="h-px w-12 bg-gradient-to-l from-transparent to-zinc-500"></div>
						</div>
						<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
							{sponsors.filter(s => s.tier === "silver").map((sponsor, i) => (
								<a
									key={i}
									href={sponsor.url}
									target="_blank"
									rel="noopener noreferrer"
									className="sponsor-card group relative block">
									<div className="absolute inset-0 bg-primary/10 rounded-lg blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
									<div className="relative p-6 bg-gradient-to-br from-zinc-900/70 to-zinc-950/70 backdrop-blur-md border border-zinc-700/30 rounded-lg transform transition-all duration-500 group-hover:scale-110 group-hover:border-primary/40 group-hover:shadow-[0_0_25px_rgba(255,115,0,0.3)]">
										<div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-secondary/5 rounded-lg transition-all duration-500"></div>
										
										<div className="relative flex items-center justify-center min-h-[80px]">
											<img 
												src={sponsor.logo} 
												alt={sponsor.name}
												className="max-w-full max-h-full object-contain filter brightness-85 group-hover:brightness-110 group-hover:scale-110 transition-all duration-500"
											/>
										</div>
										
										<div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
											<ExternalLink className="w-4 h-4 text-primary" />
										</div>
									</div>
								</a>
							))}
						</div>
					</div> */}

					{/* Call to Action */}
					{/* <div className="text-center mt-20">
						<div className="inline-block relative">
							<div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-2xl"></div>
							<div className="relative p-10 md:p-12 bg-gradient-to-br from-zinc-900/70 to-zinc-950/70 backdrop-blur-xl border border-primary/30 rounded-2xl">
								<Sparkles className="w-10 h-10 text-primary mx-auto mb-4 animate-pulse" />
								<p className="text-xl md:text-2xl text-muted-foreground mb-6 bloodlust max-w-md">
									Dare to join our legion of sponsors?
								</p>
								<Button className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white text-lg md:text-xl quick py-6 md:py-8 px-8 md:px-12 shadow-[0_0_30px_rgba(255,115,0,0.4)] hover:shadow-[0_0_50px_rgba(255,115,0,0.6)] transition-all duration-300 hover:scale-105">
									Become a Sponsor
								</Button>
							</div>
						</div>
					</div> */}
				</div>
			</section>

			{/* Features Section */}
			<section
				className="py-18 md:pb-20 md:pt-16 px-4"
				ref={featuresRef}>
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
