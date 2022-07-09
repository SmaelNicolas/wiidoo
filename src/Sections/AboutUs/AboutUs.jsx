import React from "react";
import { FcIdea } from "react-icons/fc";

import Hand from "../../Assets/Imgs/hand.gif";
import Us from "../../Assets/Imgs/us.gif";

import "./aboutUs.css";

export const AboutUs = () => {
	return (
		<div className='aboutUs' id='us'>
			<h2 className='title'>Nosotros</h2>
			<div className='aboutUs--content'>
				En <span className='aboutUs--content--name'>WiiDoo</span> nos
				enfocamos en la creación de sitios webs útiles para
				emprendedores, locales gastronómicos, profesionales
				independientes, servicios inmobiliarios y más!
			</div>
			<div className='aboutUs--content'>
				¿Queres mostrar tus productos? ¿Ofrecer tus servicios? ¿Un menú
				para tu local? Estamos para ayudarte a decidir lo mejor para vos
				y llevar tu
				<FcIdea className='aboutUs--content--idea' />a la web!
			</div>
			<div className='aboutUs--content'>
				¡Escribinos! Armamos un presupuesto acorde a tus necesidades
			</div>
			<div className='aboutUs--content'>
				<a className='aboutUs--content--link' href='#contact'>
					¡Quiero mi WEB
					<img
						className='aboutUs--content--hand'
						src={Hand}
						alt='hola! quiero mi web'
					/>
					!
				</a>
			</div>

			<img className='aboutUs--image' src={Us} alt='Hacemos webs' />
		</div>
	);
};
