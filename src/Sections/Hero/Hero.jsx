import React from "react";
import { ArrowScroll } from "../../Components/ArrowScroll/ArrowScroll";
import { AudioName } from "../../Components/AudioName/AudioName";
import { Blob } from "../../Components/Blob/Blob";
import { VideoBg } from "../../Components/VideoBg/VideoBg";
import "./hero.css";

export const Hero = () => {
	return (
		<div className='hero'>
			<VideoBg />
			<div className='hero--content'>
				<div className='hero--name'>
					<div>WiiDoo</div>
					<AudioName />
				</div>
				<div className='hero--subname'>SITIOS WEBS</div>
				<div className='hero--subname'>A MEDIDA</div>
			</div>
			<div className='hero--blob'>
				<Blob />
				<a className='hero--blob--text' href='#contact'>
					<div>¡Hablemos!</div>
				</a>
			</div>
			<ArrowScroll />
		</div>
	);
};
