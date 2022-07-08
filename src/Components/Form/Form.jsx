import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./form.css";
import { Divider } from "../Divider/Divider";
import { EmailSend } from "../Email/EmailSend/EmailSend";
import { EmailFail } from "../Email/EmailFail/EmailFail";

export const Form = () => {
	const form = useRef();
	const [send, setSend] = useState(null);

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				"service_voz60m5",
				"template_708ya2h",
				form.current,
				"9AeRIC3yoTHKZ3xRY"
			)
			.then(
				() => {
					setSend(true);
				},
				() => {
					setSend(false);
					setTimeout(() => {
						setSend(null);
					}, 2500);
				}
			);
	};

	return (
		<div className='formContainer'>
			{send === true ? (
				<EmailSend />
			) : send === false ? (
				<EmailFail />
			) : (
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
						minLength='3'
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
						minLength='10'
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
						minLength='10'
					/>
					<Divider />
					<Divider />
					<input
						className='form--button'
						type='submit'
						value='Enviar'
					/>
				</form>
			)}
		</div>
	);
};
