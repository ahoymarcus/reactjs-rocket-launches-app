import React from 'react';
import styled from 'styled-components';

import { useGlobalContext } from '../context';
import LaunchItem from './LaunchItem';



const ListContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const ListTitle = styled.h2`
	font-size: 2.6rem;
	text-decoration: underline;
	margin: 20px 0 20px;
`;

const LaunchList = ({ launchList }) => {
	const { queryPage } = useGlobalContext();
	
	
	const renderQueryTitle = (query) => {
		switch(queryPage) {
			case 'next':
				return <ListTitle>Próximo Lançamento</ListTitle>;
			case 'next-list':
				return <ListTitle>Próximos Lançamentos</ListTitle>;
			case 'last':
				return <ListTitle>Último Lançamento</ListTitle>;
			case 'past':
				return <ListTitle>Lançamentos Passados</ListTitle>;
			default:
				return;
		}
		
		if (queryPage === 'next') {
			return 
		}
	};
	
	
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
			{renderQueryTitle()}
			{renderList}
		</ListContainer>
	);
};



export default LaunchList


