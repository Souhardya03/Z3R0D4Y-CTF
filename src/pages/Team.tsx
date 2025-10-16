import Navigation from "@/components/Navigation";
import TeamCard from "@/components/TeamCard";
import teamMember1 from "@/assets/team-member-1.jpg";
import teamMember2 from "@/assets/team-member-2.jpg";
import teamMember3 from "@/assets/team-member-3.jpg";
import teamMember4 from "@/assets/team-member-4.jpg";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Team = () => {
	const containerRef = useRef(null);

	useEffect(() => {
		const ctx = gsap.context(() => {
			gsap.from(".team-header", {
				opacity: 0,
				y: -80,
				duration: 1,
				ease: "power3.out",
			});

			gsap.from(".team-card", {
				scrollTrigger: {
					trigger: ".team-card",
					start: "top 85%",
					toggleActions: "play none none reverse",
				},
				opacity: 0,
				scale: 0.7,
				rotateY: 90,
				stagger: 0.2,
				duration: 1,
				ease: "back.out(1.7)",
			});

			gsap.utils.toArray(".stat-card").forEach((card, i) => {
				gsap.from(card as HTMLElement, {
					scrollTrigger: {
						trigger: card as HTMLElement,
						start: "top 85%",
						toggleActions: "play none none reverse",
					},
					opacity: 0,
					y: 60,
					duration: 0.8,
					ease: "power3.out",
					delay: i * 0.15,
				});
			});

			gsap.from(".join-section", {
				scrollTrigger: {
					trigger: ".join-section",
					start: "top 80%",
					toggleActions: "play none none reverse",
				},
				opacity: 0,
				scale: 0.9,
				duration: 1,
				ease: "power3.out",
			});
		}, containerRef);

		return () => ctx.revert();
	}, []);

	const eventLeaders = [
		{
			name: "Amrik Hore",
			role: "Event Lead & Challenge Creator",
			image: teamMember1,
			specialty: "ECE'27, JGEC",
			linkedin: "",
			twitter: "",
			github: "",
		},
		{
			name: "Sarthak Ghosh",
			role: "Event Coordinator & Challenge Creator",
			image: teamMember1,
			specialty: "ECE'27, JGEC",
			linkedin: "",
			twitter: "",
			github: "",
		},
	];

	const challengeCreators = [
		{
			name: "Purbayan Kr. Das",
			role: "Challenge Creator",
			image: "/images/Purbayan.jpg",
			specialty: "ECE'26, JGEC",
			linkedin:
				"https://www.linkedin.com/in/purbayan-kumar-das-350037256?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
			twitter: "https://x.com/purb03ragnarok",
			github: "https://github.com/purb03ragnarok",
		},
		{
			name: "Kaustav Das",
			role: "Challenge Creator",
			image: "/images/Kaustav.jpg",
			specialty: "EE'26, JGEC",
			linkedin: "https://www.linkedin.com/in/kaustav258",
			twitter: "https://x.com/Kaustav25821",
			github: "https://github.com/kaustav258",
		},
		{
			name: "Dharitri Roy",
			role: "Challenge Creator",
			image: "/images/Kaustav.jpg",
			specialty: "IT'27, JGEC",
			linkedin: "https://www.linkedin.com/in/kaustav258",
			twitter: "https://x.com/Kaustav25821",
			github: "https://github.com/kaustav258",
		},
		{
			name: "Agniva Shee",
			role: "Challenge Creator",
			image: "/images/Kaustav.jpg",
			specialty: "EE'27, JGEC",
			linkedin: "https://www.linkedin.com/in/kaustav258",
			twitter: "https://x.com/Kaustav25821",
			github: "https://github.com/kaustav258",
		},
		{
			name: "Rohit Siddha",
			role: "Challenge Creator",
			image: "/images/Kaustav.jpg",
			specialty: "IT'27, JGEC",
			linkedin: "https://www.linkedin.com/in/kaustav258",
			twitter: "https://x.com/Kaustav25821",
			github: "https://github.com/kaustav258",
		},
	];

	const webTeam = [
		{
			name: "Souhardya Deb",
			role: "Web Lead",
			image: "/images/Souhardya.jpg",
			specialty: "ECE'26, JGEC",
			linkedin: "https://www.linkedin.com/in/souhardya-deb-921578254/",
			twitter: "https://x.com/DarkWarrio28389",
			github: "https://github.com/Souhardya03",
		},
		{
			name: "Rajdip Pal",
			role: "Web Team",
			image: "/images/rajdip.png",
			specialty: "CSE'27, JGEC",
			linkedin: "https://www.linkedin.com/in/rajdip-pal/",
			// twitter: "https://x.com/DarkWarrio28389",
			github: "https://github.com/Rajdip-Pal",
		},
		{
			name: "Dipesh Das",
			role: "Designer",
			image: "/images/Dipesh.jpg",
			specialty: "CSE'28, JGEC",
			linkedin: "https://www.linkedin.com/in/d1p3sh-d4s-4b1dd3n?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
			twitter: "https://x.com/dipeshdas0125?t=CvhLJIrpEKxxMSjgj-NI5A&s=09",
			github: "https://github.com/dipesh-2874",
		},
	];

	return (
		<div
			className="min-h-screen bg-background"
			ref={containerRef}>
			<Navigation />

			<div className="pt-24 pb-16 px-4">
				<div className="container mx-auto max-w-6xl">
					<div className="team-header">
						<h1 className="text-5xl sm:text-5xl md:text-6xl font-bold mb-4 text-center haunted">
							<span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
								Meet the Haunters
							</span>
						</h1>
						<p className="text-lg sm:text-xl md:text-2xl text-center text-muted-foreground mb-12 md:mb-16 spooky">
							The Elite Spirits Behind Spooky CTF
						</p>
					</div>

					{/* Event Lead & Coordinator Section */}
					<div className="mb-12 md:mb-16">
						<h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-primary buggytrick">
							Event Lead & Coordinator
						</h2>
						<div className="grid sm:grid-cols-2 gap-6 md:gap-8 max-w-xl mx-auto">
							{eventLeaders.map((member) => (
								<div
									key={member.name}
									className="team-card">
									<TeamCard
										name={member.name}
										role={member.role}
										image={member.image}
										specialty={member.specialty}
										linkedin={member.linkedin}
										twitter={member.twitter}
										github={member.github}
									/>
								</div>
							))}
						</div>
					</div>

					{/* Challenge Creators Section */}
					<div className="mb-12 md:mb-16">
						<h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-secondary buggytrick">
							Challenge Creators
						</h2>
						<div className="grid sm:grid-cols-2 lg:grid-cols-4 items-center gap-6 md:gap-8">
							{challengeCreators.map((member) => (
								<div
									key={member.name}
									className="team-card">
									<TeamCard
										name={member.name}
										role={member.role}
										image={member.image}
										specialty={member.specialty}
										linkedin={member.linkedin}
										twitter={member.twitter}
										github={member.github}
									/>
								</div>
							))}
						</div>
					</div>

					{/* Web & Design Team Section */}
					<div className="mb-12 md:mb-16">
						<h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-primary buggytrick">
							Web & Design Team
						</h2>
						<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto">
							{webTeam.map((member) => (
								<div
									key={member.name}
									className="team-card">
									<TeamCard
										name={member.name}
										role={member.role}
										image={member.image}
										specialty={member.specialty}
										linkedin={member.linkedin}
										twitter={member.twitter}
										github={member.github}
									/>
								</div>
							))}
						</div>
					</div>

					{/* Team Stats */}
					<div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
						<div className="stat-card text-center bg-card border border-primary/30 rounded-lg p-6 md:p-8 transform hover:scale-105 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,115,0,0.3)]">
							<div className="text-4xl md:text-5xl font-bold text-primary mb-2 groovy">
								50+
							</div>
							<p className="text-sm bloodlust md:text-3xl text-muted-foreground">
								CTFs Won
							</p>
						</div>

						<div className="stat-card text-center bg-card border border-secondary/30 rounded-lg p-6 md:p-8 transform hover:scale-105 transition-all duration-300 hover:shadow-[0_0_30px_rgba(138,43,226,0.3)]">
							<div className="text-4xl md:text-5xl font-bold text-secondary mb-2 groovy">
								100+
							</div>
							<p className="text-sm bloodlust md:text-3xl text-muted-foreground">
								Challenges Solved
							</p>
						</div>

						<div className="stat-card text-center bg-card border border-primary/30 rounded-lg p-6 md:p-8 transform hover:scale-105 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,115,0,0.3)] sm:col-span-2 md:col-span-1">
							<div className="text-4xl md:text-5xl font-bold text-primary mb-2 groovy">
								1000+
							</div>
							<p className="text-sm bloodlust md:text-3xl text-muted-foreground">
								Hours Hacking
							</p>
						</div>
					</div>

					{/* Join Section */}
					<div className="join-section bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 border border-primary/30 rounded-lg p-8 md:p-12 text-center">
						<h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-primary haunted">
							Join Our Coven
						</h2>
						<p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 max-w-2xl mx-auto">
							We're always looking for talented hackers to join our ranks.
							Whether you're a beginner or an expert, if you have the passion
							and the drive, we want you!
						</p>
						<div className="font-mono text-xs sm:text-sm md:text-base text-muted-foreground">
							<p>$ echo "info@zerologon.co.in"</p>
							<p className="text-primary mt-2">
								&gt; Ready to embrace the darkness?
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Team;
