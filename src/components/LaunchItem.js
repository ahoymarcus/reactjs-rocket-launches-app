import React from 'react';



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
const LaunchItem = ({ id, flight_number, name, date_unix }) => {
	let newDate = new Date(date_unix * 1000);
	console.log(newDate);
	
	let day = newDate.getDate();
	let month = newDate.getMonth() + 1;
	let year = newDate.getFullYear();
	
	const formattedTime = `${day}/${month}/${year}`;
	
	
	/*
	links.webcast
links.wikipedia
	*/
	return (
		<article>
			<h4>Nome da missão: {name}</h4>
			<h4>Número do lançamento: {flight_number}</h4>
			<h4>Data do lançamento: {formattedTime}</h4>
		</article>
	);
};



export default LaunchItem



