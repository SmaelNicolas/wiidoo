import React from "react";
import { CardServices } from "../../Components/CardServices/CardServices";
import "./services.css";
import { FaLaptopCode } from "react-icons/fa";
import { FaUniversalAccess } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import { MdDevices } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { MdScreenSearchDesktop } from "react-icons/md";
import { GrDomain } from "react-icons/gr";
import { GrHost } from "react-icons/gr";
import { GrLock } from "react-icons/gr";
import { ImStatsDots } from "react-icons/im";

export const Services = () => {
	return (
		<div className='services' id='services'>
			{/* <h2 className='services--title'>Servicios</h2> */}
			<div className='serviciosBg'>
				SERVICIOS SERVICIOS SERVICIOS SERVICIOS SERVICIOS SERVICIOS
				SERVICIOS SERVICIOS SERVICIOS SERVICIOS SERVICIOS SERVICIOS
				SERVICIOS SERVICIOS SERVICIOS SERVICIOS SERVICIOS SERVICIOS
				SERVICIOS SERVICIOS SERVICIOS SERVICIOS SERVICIOS SERVICIOS
				SERVICIOS SERVICIOS SERVICIOS SERVICIOS SERVICIOS SERVICIOS
				SERVICIOS SERVICIOS SERVICIOS SERVICIOS SERVICIOS SERVICIOS
				SERVICIOS SERVICIOS SERVICIOS SERVICIOS SERVICIOS SERVICIOS
				SERVICIOS SERVICIOS SERVICIOS SERVICIOS SERVICIOS SERVICIOS
				SERVICIOS SERVICIOS SERVICIOS SERVICIOS
			</div>
			<div className='services--card--cointainer'>
				<CardServices
					img={<FaLaptopCode />}
					title='Desarrollo'
					body='Lorem ipsum dolor sit amet, consectetur adipisicing elit. At
					et ipsam, deleniti ipsa natus quaerat.'
				/>
				<CardServices
					img={<BsSearch />}
					title='Seo'
					body='Lorem ipsum dolor sit amet, consectetur adipisicing elit. At
					et ipsam, deleniti ipsa natus quaerat.'
				/>
				<CardServices
					img={<FaUniversalAccess />}
					title='Accesibilidad'
					body='Lorem ipsum dolor sit amet, consectetur adipisicing elit. At
					et ipsam, deleniti ipsa natus quaerat.'
				/>
				<CardServices
					img={<MdDevices />}
					title='responsive'
					body='Lorem ipsum dolor sit amet, consectetur adipisicing elit. At
					et ipsam, deleniti ipsa natus quaerat.'
				/>
				<CardServices
					img={<GrDomain />}
					title='dominio'
					body='Lorem ipsum dolor sit amet, consectetur adipisicing elit. At
					et ipsam, deleniti ipsa natus quaerat.'
				/>
				<CardServices
					img={<GrHost />}
					title='host'
					body='Lorem ipsum dolor sit amet, consectetur adipisicing elit. At
					et ipsam, deleniti ipsa natus quaerat.'
				/>
				<CardServices
					img={<GrLock />}
					title='Seguridad'
					body='Lorem ipsum dolor sit amet, consectetur adipisicing elit. At
					et ipsam, deleniti ipsa natus quaerat.'
				/>
				<CardServices
					img={<MdEmail />}
					title='Email Marketing'
					body='Lorem ipsum dolor sit amet, consectetur adipisicing elit. At
					et ipsam, deleniti ipsa natus quaerat.'
				/>
				<CardServices
					img={<ImStatsDots />}
					title='Google Analytics'
					body='Lorem ipsum dolor sit amet, consectetur adipisicing elit. At
					et ipsam, deleniti ipsa natus quaerat.'
				/>
				<CardServices
					img={<MdScreenSearchDesktop />}
					title='Google search'
					body='Lorem ipsum dolor sit amet, consectetur adipisicing elit. At
					et ipsam, deleniti ipsa natus quaerat.'
				/>
			</div>
		</div>
	);
};
