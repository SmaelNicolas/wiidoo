import React, { useEffect, useState } from "react";
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
			<div className='logo'>LOGO</div>
			<ul>
				<li>
					<a href='#asd'>Nosotros</a>
				</li>
				<li>
					<a href='#asd'>Servicios</a>
				</li>
				<li>
					<a href='#asd'>Contacto</a>
				</li>
			</ul>
		</nav>
	);
};
