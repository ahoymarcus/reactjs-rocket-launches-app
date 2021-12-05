import React from 'react';
import styled from 'styled-components';

import LaunchItem from './LaunchItem';



const ListContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

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
		<ListContainer >
			{renderList}
		</ListContainer>
	);
};



export default LaunchList


