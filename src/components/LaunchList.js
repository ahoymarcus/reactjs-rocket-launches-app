import React from 'react';

import LaunchItem from './LaunchItem';



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

const LaunchList = ({ launchList }) => {
	const renderList = launchList.map((item, index) => {
		return (
			<LaunchItem 
				key={index} 
				{...item} 
			/>
		);
	});
	
	return (
		<article>
			teste
		</article>
	);
};



export default LaunchList


