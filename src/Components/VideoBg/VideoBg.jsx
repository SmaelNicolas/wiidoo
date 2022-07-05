import React from "react";
import "./videoBg.css";

import Vid from "../../Assets/Videos/vid.mp4";
import Vid2 from "../../Assets/Videos/vid2.mp4";

export const VideoBg = () => {
	return (
		<video className='videoBg' muted loop autoPlay>
			<source src={Vid2} type='video/mp4' />
		</video>
	);
};
