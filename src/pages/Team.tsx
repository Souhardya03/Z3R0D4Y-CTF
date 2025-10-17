import Navigation from "@/components/Navigation";
import TeamCard from "@/components/TeamCard";
import teamMember1 from "@/assets/team-member-1.jpg";
import { motion, Variants } from "framer-motion";

interface TeamMember {
	name: string;
	role: string;
	image: string;
	specialty: string;
	linkedin: string;
	twitter?: string;
	github: string;
}

const Team: React.FC = () => {
	const eventLeaders: TeamMember[] = [
		{
			name: "Amrik Hore",
			role: "Event Lead",
			image: teamMember1,
			specialty: "ECE'27, JGEC",
			linkedin: "https://www.linkedin.com/in/amrikhore/",
			twitter: "https://www.youtube.com/watch?v=dQw4w9WgXcQ&list=RDdQw4w9WgXcQ&start_radio=1",
			github: "https://github.com/amrikhore86",
		},
		{
			name: "Sarthak Ghosh",
			role: "Event Coordinator",
			image: "/images/Sarthak.jpg",
			specialty: "EE'27, JGEC",
			linkedin: "https://www.linkedin.com/in/sharthak-ghosh-644a69294/",
			twitter: "",
			github: "https://github.com/sgvc7",
		},
	];

	const challengeCreators: TeamMember[] = [
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
			name: "Amrik Hore",
			role: "Challenge Creator",
			image: teamMember1,
			specialty: "ECE'27, JGEC",
			linkedin: "https://www.linkedin.com/in/amrikhore/",
			twitter: "https://www.youtube.com/watch?v=dQw4w9WgXcQ&list=RDdQw4w9WgXcQ&start_radio=1",
			github: "https://github.com/amrikhore86",
		},
		{
			name: "Sarthak Ghosh",
			role: "Challenge Creator",
			image: "/images/Sarthak.jpg",
			specialty: "EE'27, JGEC",
			linkedin: "https://www.linkedin.com/in/sharthak-ghosh-644a69294/",
			twitter: "",
			github: "https://github.com/sgvc7",
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
			image: "/images/Rohit.jpg",
			specialty: "IT'27, JGEC",
			linkedin: "https://www.linkedin.com/in/kaustav258",
			twitter: "https://x.com/Kaustav25821",
			github: "https://github.com/kaustav258",
		},
	];

	const webTeam: TeamMember[] = [
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

	const headerVariants: Variants = {
		hidden: { opacity: 0, y: -80 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 1,
				ease: [0.25, 0.46, 0.45, 0.94]
			}
		}
	};

	const cardContainerVariants: Variants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2
			}
		}
	};

	const cardVariants: Variants = {
		hidden: { 
			opacity: 0, 
			scale: 0.7,
			rotateY: 90
		},
		visible: {
			opacity: 1,
			scale: 1,
			rotateY: 0,
			transition: {
				duration: 1,
				ease: [0.68, -0.55, 0.265, 1.55]
			}
		}
	};

	const statVariants: Variants = {
		hidden: { opacity: 0, y: 60 },
		visible: (i: number) => ({
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.8,
				delay: i * 0.15,
				ease: [0.25, 0.46, 0.45, 0.94]
			}
		})
	};

	const joinVariants: Variants = {
		hidden: { opacity: 0, scale: 0.9 },
		visible: {
			opacity: 1,
			scale: 1,
			transition: {
				duration: 1,
				ease: [0.25, 0.46, 0.45, 0.94]
			}
		}
	};

	return (
		<div className="min-h-screen bg-background">
			<Navigation />

			<div className="pt-24 pb-16 px-4">
				<div className="container mx-auto max-w-6xl">
					<motion.div
						initial="hidden"
						animate="visible"
						variants={headerVariants}
						className="team-header"
					>
						<h1 className="text-5xl sm:text-5xl md:text-6xl font-bold mb-4 text-center haunted">
							<span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
								Meet the Haunters
							</span>
						</h1>
						<p className="text-lg sm:text-xl md:text-2xl text-center text-muted-foreground mb-12 md:mb-16 spooky">
							The Elite Spirits Behind Spooky CTF
						</p>
					</motion.div>

					{/* Event Lead & Coordinator Section */}
					<div className="mb-12 md:mb-16">
						<motion.h2
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: "-100px" }}
							transition={{ duration: 0.6 }}
							className="text-3xl md:text-4xl font-bold mb-8 text-center text-primary buggytrick"
						>
							Event Lead & Coordinator
						</motion.h2>
						<motion.div
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true, margin: "-100px" }}
							variants={cardContainerVariants}
							className="grid sm:grid-cols-2 gap-6 md:gap-8 max-w-xl mx-auto"
						>
							{eventLeaders.map((member: TeamMember) => (
								<motion.div
									key={member.name}
									variants={cardVariants}
									className="team-card"
								>
									<TeamCard
										name={member.name}
										role={member.role}
										image={member.image}
										specialty={member.specialty}
										linkedin={member.linkedin}
										twitter={member.twitter}
										github={member.github}
									/>
								</motion.div>
							))}
						</motion.div>
					</div>

					{/* Challenge Creators Section */}
					<div className="mb-12 md:mb-16">
						<motion.h2
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: "-100px" }}
							transition={{ duration: 0.6 }}
							className="text-3xl md:text-4xl font-bold mb-8 text-center text-secondary buggytrick"
						>
							Challenge Creators
						</motion.h2>
						<motion.div
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true, margin: "-100px" }}
							variants={cardContainerVariants}
							className="grid sm:grid-cols-3 lg:grid-cols-4 items-center gap-6 md:gap-8"
						>
							{challengeCreators.map((member: TeamMember, index: number) => (
								<motion.div
									key={`${member.name}-${member.specialty}-${index}`}
									variants={cardVariants}
									className="team-card"
								>
									<TeamCard
										name={member.name}
										role={member.role}
										image={member.image}
										specialty={member.specialty}
										linkedin={member.linkedin}
										twitter={member.twitter}
										github={member.github}
									/>
								</motion.div>
							))}
						</motion.div>
					</div>

					{/* Web & Design Team Section */}
					<div className="mb-12 md:mb-16">
						<motion.h2
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, margin: "-100px" }}
							transition={{ duration: 0.6 }}
							className="text-3xl md:text-4xl font-bold mb-8 text-center text-primary buggytrick"
						>
							Web & Design Team
						</motion.h2>
						<motion.div
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true, margin: "-100px" }}
							variants={cardContainerVariants}
							className="grid sm:grid-cols-3 lg:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto"
						>
							{webTeam.map((member: TeamMember) => (
								<motion.div
									key={member.name}
									variants={cardVariants}
									className="team-card"
								>
									<TeamCard
										name={member.name}
										role={member.role}
										image={member.image}
										specialty={member.specialty}
										linkedin={member.linkedin}
										twitter={member.twitter}
										github={member.github}
									/>
								</motion.div>
							))}
						</motion.div>
					</div>

					{/* Team Stats */}
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, margin: "-100px" }}
						className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16"
					>
						<motion.div
							custom={0}
							variants={statVariants}
							className="stat-card text-center bg-card border border-primary/30 rounded-lg p-6 md:p-8 transform hover:scale-105 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,115,0,0.3)]"
						>
							<div className="text-4xl md:text-5xl font-bold text-primary mb-2 groovy">
								50+
							</div>
							<p className="text-sm bloodlust md:text-3xl text-muted-foreground">
								CTFs Won
							</p>
						</motion.div>

						<motion.div
							custom={1}
							variants={statVariants}
							className="stat-card text-center bg-card border border-secondary/30 rounded-lg p-6 md:p-8 transform hover:scale-105 transition-all duration-300 hover:shadow-[0_0_30px_rgba(138,43,226,0.3)]"
						>
							<div className="text-4xl md:text-5xl font-bold text-secondary mb-2 groovy">
								100+
							</div>
							<p className="text-sm bloodlust md:text-3xl text-muted-foreground">
								Challenges Solved
							</p>
						</motion.div>

						<motion.div
							custom={2}
							variants={statVariants}
							className="stat-card text-center bg-card border border-primary/30 rounded-lg p-6 md:p-8 transform hover:scale-105 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,115,0,0.3)] sm:col-span-2 md:col-span-1"
						>
							<div className="text-4xl md:text-5xl font-bold text-primary mb-2 groovy">
								1000+
							</div>
							<p className="text-sm bloodlust md:text-3xl text-muted-foreground">
								Hours Hacking
							</p>
						</motion.div>
					</motion.div>

					{/* Join Section */}
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, margin: "-100px" }}
						variants={joinVariants}
						className="join-section bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 border border-primary/30 rounded-lg p-8 md:p-12 text-center"
					>
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
					</motion.div>
				</div>
			</div>
		</div>
	);
};

export default Team;