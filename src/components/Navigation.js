import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";
const Navigation = () => {
	return (
		<div className='navigationMain'>
			<Link to={"/"}>
				<svg
					viewBox='0 0 138 26'
					fill='none'
					stroke='#fff'
					stroke-width='2.3'
					stroke-linecap='round'
					stroke-linejoin='round'
					title='CodePen'>
					<path d='M15 8a7 7 0 100 10m7-8.7L33 2l11 7.3v7.4L33 24l-11-7.3zm0 0l11 7.4 11-7.4m0 7.4L33 9.3l-11 7.4M33 2v7.3m0 7.4V24M52 6h5a7 7 0 010 14h-5zm28 0h-9v14h9m-9-7h6m11 1h6a4 4 0 000-8h-6v14m26-14h-9v14h9m-9-7h6m11 7V6l11 14V6'></path>
				</svg>
			</Link>

			<Link className='navLink' to={"/editor"}>
				Start editing
			</Link>
		</div>
	);
};

export default Navigation;
