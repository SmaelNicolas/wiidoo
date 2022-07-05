import React from "react";
import { Form } from "../../Components/Form/Form";
import { IconMedia } from "../../Components/IconMedia/IconMedia";
import "./contact.css";

export const Contact = () => {
	return (
		<div className='contact' id='contact'>
			<h2 className='title'>Contactanos</h2>
			<IconMedia />
			<Form />
		</div>
	);
};
