import React from "react";
import EmailS from "../../../Assets/Imgs/mails.svg";

import "../email.css";

export const EmailSend = () => {
	return (
		<div className='emailContainer'>
			<img
				className='emailImg'
				src={EmailS}
				alt='email enviado correctamente'
			/>
			<div className='emailText'>¡Gracias por tu mensaje! 🥳</div>
			<div className='emailText'>En breve nos pondremos en contacto </div>
		</div>
	);
};
