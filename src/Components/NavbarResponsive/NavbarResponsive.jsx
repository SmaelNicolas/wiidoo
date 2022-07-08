import React, { useState } from "react";

import "./navbarResponsive.css";

export const NavbarResponsive = () => {
	const [open, setOpen] = useState(false);
	return (
		<div className='navbarResponsiveContainer'>
			<div
				className={open ? "menu open " : "menu "}
				onClick={() => setOpen(!open)}
			>
				<div className={open ? "button open " : "button "}>
					<a className='responsiveLink' href='#us'>
						Nosotros
					</a>
				</div>
				<div className={open ? "button open " : "button"}>
					<a className='responsiveLink' href='#services'>
						Servicios
					</a>
				</div>
				<div className={open ? "button open " : "button"}>
					<a className='responsiveLink' href='#contact'>
						Contacto
					</a>
				</div>
			</div>
		</div>
	);
};
