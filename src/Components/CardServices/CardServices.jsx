import React from "react";
import { Divider } from "../Divider/Divider";
import "./cardServices.css";

export const CardServices = ({ img, title, body }) => {
	return (
		<div className='card'>
			<Divider />
			<div className='card--icon'>{img}</div>
			<div className='cardContent'>
				<div className='cardContent--title'>{title}</div>
				<Divider />
				<div className='cardContent--body'>{body}</div>
			</div>
		</div>
	);
};
