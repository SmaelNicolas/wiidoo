import React from "react";
import { BsInstagram } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import "./iconMedia.css";

export const IconMedia = () => {
	return (
		<div className='iconMedia'>
			<div className='iconMedia--icon'>
				<BsInstagram onClick={() => console.log("click")} />
			</div>
			<div className='iconMedia--icon'>
				<BsWhatsapp className='iconMedia--icon' />
			</div>
		</div>
	);
};
