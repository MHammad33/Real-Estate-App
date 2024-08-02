import { FC, useState } from "react";
import "./navbar.scss";

const Navbar: FC = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<nav>
			<div className="left">
				<a href="/" className="logo">
					<img src="/logo.png" alt="Logo" />
					<span>MohalEstate</span>
				</a>
				<a href="/">Home</a>
				<a href="/">About</a>
				<a href="/">Contact</a>
				<a href="/">Agents</a>
			</div>
			<div className="right">
				<a href="/">Sign in</a>
				<a href="/" className="register">
					Sign up
				</a>

				<div
					className="menuIcon"
					onClick={() => setIsMenuOpen((prev) => !prev)}
				>
					<img src="/menu.png" alt="Menu" />
				</div>

				<div className={isMenuOpen ? "menu active" : "menu"}>
					<a href="/">Home</a>
					<a href="/">About</a>
					<a href="/">Contact</a>
					<a href="/">Agents</a>
					<a href="/">Sign in</a>
					<a href="/">Sign up</a>
				</div>
			</div>
		</nav>
	);
};
export default Navbar;
