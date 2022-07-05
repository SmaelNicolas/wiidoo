import React from "react";
import { BsInstagram } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { FaHandPointRight } from "react-icons/fa";
import "./iconMedia.css";

export const IconMedia = () => {
	return (
		<div className='iconMedia'>
			<div className='iconMedia--line'>
				<BsInstagram
					className='iconMedia--line--icon'
					onClick={() => console.log("click")}
				/>
				<FaHandPointRight className='iconMedia--line--hand' />
				<div className='iconMedia--line--text'>@wiidoowebs</div>
			</div>
			<div className='iconMedia--line'>
				<BsWhatsapp
					className='iconMedia--line--icon'
					onClick={() => console.log("click")}
				/>
				<FaHandPointRight className='iconMedia--line--hand' />

				<div className='iconMedia--line--text'>+54 291 422 82 43</div>
			</div>
		</div>
	);
};
