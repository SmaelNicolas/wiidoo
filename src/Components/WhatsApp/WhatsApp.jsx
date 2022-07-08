import React from "react";
import imgWhatsapp from "../../Assets/Imgs/wtspgreen.svg";
import { openInNewTab } from "../../Helpers/openInNewTab";

import "./whatsApp.css";

export const WhatsApp = () => {
	return (
		<img
			src={imgWhatsapp}
			alt='wtsp redirect'
			onClick={() =>
				openInNewTab("https://api.whatsapp.com/send/?phone=2914405917")
			}
			className='whatsAppButton'
		/>
	);
};
