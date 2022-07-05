import React from "react";
import { CardServices } from "../../Components/CardServices/CardServices";
import "./services.css";
import { FaLaptopCode } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import { MdDevices } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { MdScreenSearchDesktop } from "react-icons/md";
import { MdDomainVerification } from "react-icons/md";
import { BsServer } from "react-icons/bs";
import { BsLock } from "react-icons/bs";
import { ImStatsDots } from "react-icons/im";
import { SiGooglemybusiness } from "react-icons/si";
import Serv from "../../Assets/Imgs/serv.gif";

export const Services = () => {
	return (
		<div className='services' id='services'>
			<h2 className='title'>Servicios</h2>
			<div className='services--card--cointainer'>
				<CardServices
					img={<FaLaptopCode />}
					title='Desarrollo'
					body='Creamos tu sitio web desde 0 , sin plantillas. Totalmente personalizado a tus necesidades y gustos.'
				/>
				<CardServices
					img={<BsSearch />}
					title='Seo'
					body='Mejorar la posición de un sitio web en los motores de búsqueda para que los visitantes puedan llegar a través de búsquedas relevantes.'
				/>
				<CardServices
					img={<MdDevices />}
					title='responsive'
					body='Desarrollado para adaptarse a todos los dispositivos, como Smartphones y tablets, importante para alcanzar un público mayor.'
				/>
				<CardServices
					img={<MdDomainVerification />}
					title='dominio'
					body='Los dominio permiten crear tu propia identidad en Internet. Nosotros nos encargamos de registrarlo. '
				/>
				<CardServices
					img={<BsServer />}
					title='host'
					body='Hosting que se ajusta al trafico del sitio. Sin publicidades invasivas y comlpetamente seguro.'
				/>
				<CardServices
					img={<BsLock />}
					title='Seguridad'
					body='Certificados SSL/TLS , para que tu web sea mas segura.'
				/>
				<CardServices
					img={<MdEmail />}
					title='Email Marketing'
					body='Enviamos correos electrónicos efectivos para hacer crecer tu audiencia leal.'
				/>
				<CardServices
					img={<ImStatsDots />}
					title='Google Analytics'
					body='Monitoreá y analizá el perfil de quién accede a tu sitio, las páginas más accedidas, dispositivos, ciudades y muchos datos más.'
				/>
				<CardServices
					img={<MdScreenSearchDesktop />}
					title='Google search'
					body='Monitoreá, mantené y soluciona problemas relacionados con la presencia del sitio en los resultados de búsqueda de Google.'
				/>
				<CardServices
					img={<SiGooglemybusiness />}
					title='Google Business'
					body='Creamos tu ficha en Google My Business con los detalles de tu negocio para hacer que destaques y conviertas esas búsquedas en clientes.'
				/>
			</div>
			<img className='services--img' src={Serv} alt='servicios web' />
		</div>
	);
};
