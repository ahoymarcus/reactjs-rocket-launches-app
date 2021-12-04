import React from 'react';

import { useGlobalContext } from '../context';

import './launches.css';



const Launches = () => {
	const { queryPage } = useGlobalContext();
	
	
	return (
		<div className="launches-container">
			<header className="launches-header">
				<h1>Rocket-X Launches</h1>
								
			</header>
			<main className="launches-main">
				<section className="launches-info">
					<h2>Launches: {queryPage}</h2>
					
				</section>
				
			</main>
	</div>
	);
};



export default Launches


