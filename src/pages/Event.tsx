import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin, Trophy, Users, Flag } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Event = () => {
	return (
		<div className="min-h-screen bg-background">
			<Navigation />

			<div className="pt-24  pb-16 md:px-4">
				<div className="md:container mx-auto md:max-w-6xl">
					<motion.h1
						initial={{ opacity: 0, scale: 0.5 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 1, ease: "backOut" }}
						className="text-5xl sm:text-5xl md:text-6xl font-bold mb-4 text-center haunted">
						<span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
							Z3R0D4Y CTF 2025
						</span>
					</motion.h1>

					<motion.p
						initial={{ opacity: 0, y: 50 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.3 }}
						className="text-lg sm:text-xl md:text-2xl text-center text-muted-foreground mb-10 md:mb-12 spooky">
						The Most Haunting Cybersecurity Challenge of the Year
					</motion.p>

					{/* Event Details and Prizes with Zoom Effect */}
					<div className="grid md:grid-cols-2 overflow-x-clip  py-8 px-10 gap-6 md:gap-8 mb-12 md:mb-16 relative">
						<motion.div
							initial={{ opacity: 0, x: -50 }}
							whileInView={{ opacity: 1, x: 0, scale: 1 }}
							viewport={{ once: false, amount: 0.3 }}
							transition={{ duration: 1, ease: "easeOut" }}
							className="bg-card border border-primary/30 rounded-lg p-6 md:p-8 shadow-[0_0_30px_rgba(255,115,0,0.2)] transition-shadow duration-300">
							<h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary quick">
								Event Details
							</h2>

							<div className="space-y-4">
								<div className="flex items-start gap-4">
									<Calendar className="w-5 h-5 md:w-6 md:h-6 text-primary mt-1 flex-shrink-0" />
									<div>
										<h3 className="font-bold tricktreat text-base md:text-2xl">
											Date
										</h3>
										<p className="text-sm md:text-lg text-muted-foreground">
											October 31st, 2025
										</p>
									</div>
								</div>

								<div className="flex items-start gap-4">
									<Clock className="w-5 h-5 md:w-6 md:h-6 text-secondary mt-1 flex-shrink-0" />
									<div>
										<h3 className="font-bold text-base tricktreat md:text-2xl">
											Time
										</h3>
										<p className="text-sm md:text-base text-muted-foreground">
											12 A.M. to 11:59 P.M. IST
										</p>
									</div>
								</div>

								<div className="flex items-start gap-4">
									<MapPin className="w-5 h-5 md:w-6 md:h-6 text-primary mt-1 flex-shrink-0" />
									<div>
										<h3 className="font-bold tricktreat text-base md:text-2xl">
											Location
										</h3>
										<p className="text-sm md:text-base text-muted-foreground">
											Online - From the Comfort of Your Crypt
										</p>
									</div>
								</div>

								<div className="flex items-start gap-4">
									<Users className="w-5 h-5 md:w-6 md:h-6 text-secondary mt-1 flex-shrink-0" />
									<div>
										<h3 className="font-bold tricktreat text-base md:text-2xl">
											Format
										</h3>
										<p className="text-sm md:text-base text-muted-foreground">
											Solo
										</p>
									</div>
								</div>
							</div>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, x: 50 }}
							whileInView={{ opacity: 1, x: 0, scale: 1 }}
							viewport={{ once: false, amount: 0.3 }}
							transition={{ duration: 1, ease: "easeOut" }}
							className="bg-card border border-secondary/30 rounded-lg p-6 md:p-8 shadow-[0_0_30px_rgba(139,0,139,0.2)] transition-shadow duration-300">
							<h2 className="text-2xl md:text-3xl font-bold mb-6 text-secondary quick">
								Prizes
							</h2>

							<div className="space-y-4">
								<div className="bg-gradient-to-r from-primary/20 to-transparent p-6 rounded-lg border border-primary/30 text-center">
									<div className="flex items-center justify-center gap-2 mb-4">
										<Trophy className="w-6 h-6 md:w-8 md:h-8 text-primary" />
										<h3 className="font-bold text-xl md:text-2xl text-primary tricktreat">
											Coming Soon
										</h3>
										<Trophy className="w-6 h-6 md:w-8 md:h-8 text-primary" />
									</div>
									<p className="text-base md:text-lg text-muted-foreground mb-2">
										Exciting prizes will be announced soon!
									</p>
									<p className="text-sm md:text-base text-muted-foreground/80">
										Stay tuned for spooky rewards and eternal glory 👻
									</p>
								</div>

								<div className="bg-gradient-to-r from-secondary/20 to-transparent p-4 rounded-lg border border-secondary/30">
									<p className="text-sm md:text-base text-center text-muted-foreground">
										All participants will receive recognition for their haunting
										contributions ✨
									</p>
								</div>
							</div>
						</motion.div>
					</div>

					{/* Challenge Categories - Coming from between */}
					<motion.div
						initial={{ opacity: 0, scale: 0.5, y: -100 }}
						whileInView={{ opacity: 1, scale: 1, y: 0 }}
						viewport={{ once: false, amount: 0.2 }}
						transition={{ duration: 1, ease: "backOut" }}
						className="mb-12 px-8 md:mb-16">
						<h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-center text-primary haunted">
							Challenge Categories
						</h2>

						<div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
							{[
								{
									name: "Web Exploitation",
									difficulty: "Medium",
									// points: "100-500",
								},
								{
									name: "General Skills",
									difficulty: "Hard",
									// points: "200-800",
								},
								{
									name: "Reverse Engineering",
									difficulty: "Hard",
									// points: "200-700",
								},
								{
									name: "Cryptography",
									difficulty: "Medium",
									// points: "100-600",
								},
								{ name: "Forensics", difficulty: "Easy", points: "50-400" },
							].map((category, i) => (
								<motion.div
									key={category.name}
									initial={{ opacity: 0, scale: 0.8 }}
									whileInView={{ opacity: 1, scale: 1 }}
									viewport={{ once: false, amount: 0.3 }}
									transition={{
										duration: 0.6,
										delay: i * 0.1,
										ease: "backOut",
									}}
									whileHover={{
										scale: 1.05,
										boxShadow: "0 0 20px rgba(255,115,0,0.3)",
									}}
									className="bg-card border border-primary/30 rounded-lg p-4 md:p-6 transition-all duration-300">
									<Flag className="w-6 h-6 md:w-8 md:h-8 text-primary mb-3" />
									<h3 className="text-base md:text-xl font-bold mb-2 tricktreat">
										{category.name}
									</h3>
									<p className="text-xs md:text-sm text-muted-foreground mb-1">
										Difficulty:{" "}
										<span className="text-secondary">
											{category.difficulty}
										</span>
									</p>
									{/* <p className="text-xs md:text-sm text-muted-foreground">
										Points:{" "}
										<span className="text-primary">{category.points}</span>
									</p> */}
								</motion.div>
							))}
						</div>
					</motion.div>

					{/* Registration CTA */}
					<motion.div
						initial={{ opacity: 0, y: 80 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: false, amount: 0.3 }}
						transition={{ duration: 1, ease: "easeOut" }}
						className="text-center bg-gradient-to-r mx-8 from-primary/20 via-secondary/20 to-primary/20 border border-primary/30 rounded-lg p-8 md:p-12">
						<h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-primary haunted">
							Ready to Face Your Fears?
						</h2>
						<p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 md:mb-8 spooky">
							Registration opens on October 1st. Don't miss your chance to join
							the hunt!
						</p>
						<Link
							to={"https://zeroday.zerologon.co.in/"}
							target="_blank">
							<Button className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-[0_0_20px_rgba(255,115,0,0.5)] hover:shadow-[0_0_30px_rgba(255,115,0,0.8)] transition-all duration-300 text-base md:text-lg px-6 md:px-8 py-4 md:py-6 quick">
								Register
							</Button>
						</Link>
					</motion.div>
				</div>
			</div>
		</div>
	);
};

export default Event;
