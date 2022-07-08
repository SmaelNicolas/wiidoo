import React from "react";
import "./workWith.css";

import Logo1928 from "../../Assets/Logos/1928.jpg";
import LogoGData from "../../Assets/Logos/gData.png";
import LogoDaniel from "../../Assets/Logos/daniel.svg";
import LogoShr from "../../Assets/Logos/shr.png";
import LogoTrek from "../../Assets/Logos/trekS.svg";
import LogoEcm from "../../Assets/Logos/ecm.png";
import LogoPde from "../../Assets/Logos/pde.png";
import LogoDgo from "../../Assets/Logos/dgo.png";

export const WorkWith = () => {
	return (
		<div className='workWithContainer'>
			<h2 className='title title--s'>Nos eligieron</h2>
			<div className='worksContainer'>
				<img className='worksImage' src={Logo1928} alt='imgLogo' />
				<img
					className='worksImage smallLogo'
					src={LogoTrek}
					alt='imgLogo'
				/>
				<img
					className='worksImage bgBlack'
					src={LogoGData}
					alt='imgLogo'
				/>
				<img className='worksImage' src={LogoShr} alt='imgLogo' />

				<img className='worksImage ' src={LogoDaniel} alt='imgLogo' />

				<img className='worksImage' src={LogoEcm} alt='imgLogo' />
				<img className='worksImage' src={LogoPde} alt='imgLogo' />

				<img
					className='worksImage bdrRad'
					src={LogoDgo}
					alt='imgLogo'
				/>
			</div>
		</div>
	);
};
