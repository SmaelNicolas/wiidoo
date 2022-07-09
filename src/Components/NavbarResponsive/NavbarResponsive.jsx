import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

import "./navbarResponsive.css";

export const NavbarResponsive = () => {
	const [open, setOpen] = useState(false);
	return (
		<div className='navbarResponsiveContainer'>
			<div
				className={open ? "menu open " : "menu "}
				onClick={() => setOpen(!open)}
			>
				{open ? (
					<AiOutlineClose className='iconMenu' />
				) : (
					<AiOutlineMenu className='iconMenu' />
				)}
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
