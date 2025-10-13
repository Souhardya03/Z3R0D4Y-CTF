import {
	Ghost,
	Github,
	Twitter,
	Linkedin,
	Mail,
	MapPin,
	Calendar,
} from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
	const currentYear = new Date().getFullYear();

	const socialLinks = [
		{
			icon: <Github className="w-5 h-5" />,
			href: "https://github.com/yourteam",
			label: "GitHub",
		},
		{
			icon: <Twitter className="w-5 h-5" />,
			href: "https://twitter.com/yourteam",
			label: "Twitter",
		},
		{
			icon: <Linkedin className="w-5 h-5" />,
			href: "https://linkedin.com/company/yourteam",
			label: "LinkedIn",
		},
		{
			icon: <Mail className="w-5 h-5" />,
			href: "mailto:contact@zeroday.com",
			label: "Email",
		},
	];

	const quickLinks = [
		{ name: "Home", path: "/" },
		{ name: "About", path: "/about" },
		{ name: "Event", path: "/event" },
		{ name: "Team", path: "/team" },
	];

	return (
		<footer className="relative bg-gradient-to-b from-background to-black border-t border-primary/30 overflow-hidden">
			{/* Animated background elements */}
			<div className="absolute inset-0 opacity-10">
				<div className="absolute top-10 left-10 w-32 h-32 bg-primary rounded-full blur-3xl animate-pulse"></div>
				<div className="absolute bottom-10 right-10 w-40 h-40 bg-secondary rounded-full blur-3xl animate-pulse delay-1000"></div>
			</div>

			<div className="relative container mx-auto px-4 py-12 md:py-16">
				{/* Main Footer Content */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12">
					{/* Brand Section */}
					<div className="space-y-4 lg:col-span-2">
						<div className="flex items-center gap-3 mb-4">
							<img
								src="/images/Logo.png"
								className="w-10 h-10 text-primary "
							/>
							<h3 className="text-2xl md:text-3xl font-bold tricktreat bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
								Z3ROD4Y CTF
							</h3>
						</div>
						<p className="text-muted-foreground text-sm md:text-base max-w-md leading-relaxed">
							Join the spookiest cybersecurity competition. Test your hacking
							skills, solve challenges, and compete for eternal glory in the
							digital realm.
						</p>
						<div className="flex flex-col gap-2 text-sm text-muted-foreground">
							<div className="flex items-center gap-2">
								<Calendar className="w-4 h-4 text-primary" />
								<span>October 31st, 2025</span>
							</div>
							<div className="flex items-center gap-2">
								<MapPin className="w-4 h-4 text-secondary" />
								<span>Online - From the Comfort of Your Crypt</span>
							</div>
						</div>
					</div>

					{/* Quick Links */}
					<div className="space-y-4">
						<h4 className="text-lg md:text-xl font-bold text-primary haunted">
							Quick Links
						</h4>
						<ul className="space-y-2">
							{quickLinks.map((link) => (
								<li key={link.path}>
									<Link
										to={link.path}
										className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm md:text-base flex items-center gap-2 group">
										<span className="w-0 h-0.5 bg-primary group-hover:w-4 transition-all duration-300"></span>
										{link.name}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Contact & Social */}
					<div className="space-y-4">
						<h4 className="text-lg md:text-xl font-bold text-secondary haunted">
							Connect With Us
						</h4>
						<div className="flex gap-3">
							{socialLinks.map((social) => (
								<a
									key={social.label}
									href={social.href}
									target="_blank"
									rel="noopener noreferrer"
									aria-label={social.label}
									className="group relative p-3 bg-card border border-primary/30 rounded-lg hover:border-primary hover:shadow-[0_0_20px_rgba(255,115,0,0.3)] transition-all duration-300">
									<div className="text-muted-foreground group-hover:text-primary transition-colors duration-300">
										{social.icon}
									</div>
								</a>
							))}
						</div>
						<div className="mt-6 p-4 bg-card/50 border border-primary/20 rounded-lg">
							<p className="text-xs text-muted-foreground font-mono">
								<span className="text-primary">$ </span>echo
								"contact@zeroday.com"
							</p>
						</div>
					</div>
				</div>

				{/* Divider */}
				<div className="h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent mb-8"></div>

				{/* Bottom Bar */}
				<div className="flex flex-col md:flex-row items-center justify-between gap-4">
					<div className="text-center md:text-left">
						<p className="text-sm text-muted-foreground">
							© {currentYear}{" "}
							<span className="text-primary font-semibold">Z3R0D4Y CTF</span>.
							All rights reserved.
						</p>
						<p className="text-xs text-muted-foreground mt-1">
							Crafted with 💀 by the Z3R0D4Y CTF Team
						</p>
					</div>

					<div className="flex gap-2 md:gap-6 text-xs text-muted-foreground">
						<a
							href="#"
							className="hover:text-primary transition-colors duration-300">
							Privacy Policy
						</a>
						<span>•</span>
						<a
							href="#"
							className="hover:text-primary transition-colors duration-300">
							Terms of Service
						</a>
						<span>•</span>
						<a
							href="#"
							className="hover:text-primary transition-colors duration-300">
							Code of Conduct
						</a>
					</div>
				</div>

				{/* Spooky Message */}
				<div className="mt-8 text-center">
					<p className="text-xs text-muted-foreground font-mono animate-pulse">
						<Ghost className="w-3 h-3 inline-block mr-1" />
						"In the shadows of the digital realm, legends are born"
						<Ghost className="w-3 h-3 inline-block ml-1" />
					</p>
				</div>
			</div>

			{/* Bottom glow effect */}
			<div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>
		</footer>
	);
};

export default Footer;
