import React from "react";
import { BsInstagram } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { FaHandPointRight } from "react-icons/fa";
import { openInNewTab } from "../../Helpers/openInNewTab";
import "./iconMedia.css";

export const IconMedia = () => {
	return (
		<div className='iconMedia'>
			<div
				className='iconMedia--line'
				onClick={() =>
					openInNewTab("https://www.instagram.com/wiidoowebs/")
				}
			>
				<BsInstagram className='iconMedia--line--icon' />
				<FaHandPointRight className='iconMedia--line--hand' />
				<div className='iconMedia--line--text'>@wiidoowebs</div>
			</div>
			<div
				className='iconMedia--line'
				onClick={() =>
					openInNewTab(
						"https://api.whatsapp.com/send/?phone=2914405917"
					)
				}
			>
				<BsWhatsapp className='iconMedia--line--icon' />
				<FaHandPointRight className='iconMedia--line--hand' />

				<div className='iconMedia--line--text'>+54 291 4405917</div>
			</div>
		</div>
	);
};
