import React from 'react';

import './launchItem.css';



/*
id
flight_number
links.webcast
links.wikipedia
cores.landing_attempt
cores.reused
name
success
date_utc
*/
const LaunchItem = ({ id, flight_number, name, date_unix, links }) => {
	let newDate = new Date(date_unix * 1000);
	console.log(newDate);
	
	let day = newDate.getDate();
	let month = newDate.getMonth() + 1;
	let year = newDate.getFullYear();
	
	const formattedTime = `${day}/${month}/${year}`;
	
	
	/*
	links.webcast
links.wikipedia
links.patch.small
							[0]
	*/
	return (
		<article className="item-card" >
			<img src={links.patch.small} alt="logo da missão" />
			<h4 className="item-name">Missão: {name}</h4>
			<div className="item-info-container">
				<p className="item-info">missão nº {flight_number}</p>
				<p className="item-info">lançamento: {formattedTime}</p>
			</div>	
				
			<div className="item-links-container">
				<p className="item-links"><a target="blank" href={links.webcast}>{links.webcast}</a></p>
				<p className="item-links"><a target="blank" href={links.wikipedia}>{links.wikipedia}</a></p>
			</div>
		</article>
	);
};



export default LaunchItem



