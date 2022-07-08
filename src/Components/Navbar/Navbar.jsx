import React, { useEffect, useState } from "react";
import LogoW from "../../Assets/WiiDoo/l.png";
import "./navbar.css";

export const Navbar = () => {
	const [prevScrollPos, setPrevScrollPos] = useState(0);
	const [padding, setPadding] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollPos = window.pageYOffset;

			if (prevScrollPos > currentScrollPos) {
				setPadding(false);
			} else {
				setPadding(true);
			}
			setPrevScrollPos(currentScrollPos);
		};

		window.addEventListener("scroll", handleScroll);

		return () => window.removeEventListener("scroll", handleScroll);
	}, [prevScrollPos, padding]);

	return (
		<nav className={padding ? "nav active" : "nav"}>
			<img
				className='logo'
				src={LogoW}
				alt='servicios web'
				onClick={() => window.scrollTo(0, 0)}
			/>
			<ul>
				<li>
					<a href='#us'>Nosotros</a>
				</li>
				<li>
					<a href='#services'>Servicios</a>
				</li>
				<li>
					<a href='#contact'>Contacto</a>
				</li>
			</ul>
		</nav>
	);
};
