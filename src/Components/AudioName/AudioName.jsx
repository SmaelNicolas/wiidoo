import React from "react";
import { FaBullhorn } from "react-icons/fa";
import "./audioName.css";

export const AudioName = () => {
	let audio = new Audio("/WiiDoo.mp3");

	const start = () => {
		audio.play();
	};

	return (
		<div className='audioContainer'>
			<FaBullhorn className='audioButton' onClick={start} />
		</div>
	);
};
