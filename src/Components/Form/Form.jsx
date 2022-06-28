import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./form.css";
import { Divider } from "../Divider/Divider";

export const Form = () => {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				"service_y8e92yp",
				"template_ax1jfps",
				form.current,
				"H5NVG-btlz5IueCJD"
			)
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);
	};

	return (
		<div className='formContainer'>
			<form className='form' ref={form} onSubmit={sendEmail}>
				<label className='form--label' htmlFor='name'>
					Nombre
				</label>
				<input
					className='form--input'
					type='text'
					id='name'
					name='from_name'
					required
					minlength='3'
				/>
				<Divider />
				<label className='form--label' htmlFor='email'>
					Email
				</label>
				<input
					className='form--input'
					type='email'
					id='email'
					name='user_email'
					required
					minlength='10'
				/>
				<Divider />
				<label className='form--label' htmlFor='msg'>
					Mensaje
				</label>
				<textarea
					className='form--textarea'
					name='message'
					id='msg'
					required
					minlength='10'
				/>
				<Divider />
				<Divider />
				<input className='form--button' type='submit' value='Enviar' />
			</form>
		</div>
	);
};
