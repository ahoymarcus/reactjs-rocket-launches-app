import React from 'react';

import LaunchItem from './LaunchItem';



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
		<div>
			{renderList}
		</div>
	);
};



export default LaunchList


