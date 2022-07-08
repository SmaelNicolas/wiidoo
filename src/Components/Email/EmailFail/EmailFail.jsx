import React from "react";
import EmailF from "../../../Assets/Imgs/mailf.svg";

import "../email.css";

export const EmailFail = () => {
	return (
		<div className='emailContainer'>
			<img className='emailImg' src={EmailF} alt='email rechazado' />
			<div className='emailText'>¡Ooooooops!</div>
			<div className='emailText'>
				Hubo un Error 😩, por favor intenta denuevo
			</div>
			<div className='emailText'>Ahora te redireccionamos ⏳</div>
		</div>
	);
};
