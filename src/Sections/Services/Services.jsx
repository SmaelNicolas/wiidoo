import React from "react";
import { CardServices } from "../../Components/CardServices/CardServices";
import "./services.css";
import { FaLaptopCode } from "react-icons/fa";
import { FaUniversalAccess } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import { MdDevices } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { MdScreenSearchDesktop } from "react-icons/md";
import { MdDomainVerification } from "react-icons/md";
import { BsServer } from "react-icons/bs";
import { BsLock } from "react-icons/bs";
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
					body='Creamos tu sitio web desde 0 , sin plantillas. Totalmente personalizado a tus necesidades.'
				/>
				<CardServices
					img={<BsSearch />}
					title='Seo'
					body='Optimizar el contenido del sitio y obtener más visibilidad y clasificar más alto en los motores de búsqueda. '
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
					img={<MdDomainVerification />}
					title='dominio'
					body='Lorem ipsum dolor sit amet, consectetur adipisicing elit. At
					et ipsam, deleniti ipsa natus quaerat.'
				/>
				<CardServices
					img={<BsServer />}
					title='host'
					body='Lorem ipsum dolor sit amet, consectetur adipisicing elit. At
					et ipsam, deleniti ipsa natus quaerat.'
				/>
				<CardServices
					img={<BsLock />}
					title='Seguridad'
					body='Lorem ipsum dolor sit amet, consectetur adipisicing elit. At
					et ipsam, deleniti ipsa natus quaerat.'
				/>
				<CardServices
					img={<MdEmail />}
					title='Email Marketing'
					body='Envia correos electrónicos efectivos y hace crecer tu audiencia leal.'
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
