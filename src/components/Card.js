import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

const Card = (props) => {
	const { src, title, body, btnText } = props;
	return (
		<div className='card'>
			<img src={src} alt='' />
			<div className='card_content'>
				<h3>{title}</h3>
				<p>{body}</p>
				<button>
					<Link to='/editor'> {btnText}</Link>
				</button>
			</div>
		</div>
	);
};

export default Card;
