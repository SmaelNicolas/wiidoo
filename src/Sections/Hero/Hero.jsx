import React from "react";
import { AudioName } from "../../Components/AudioName/AudioName";
import "./hero.css";

export const Hero = () => {
	return (
		<div className='hero'>
			<div className='hero--content'>
				<div className='hero--name'>
					<div>WiiDoo</div>
					<AudioName />
				</div>
				<div className='hero--subname'>SITIOS WEBS</div>
				<div className='hero--subname'>A MEDIDA</div>
			</div>
		</div>
	);
};
