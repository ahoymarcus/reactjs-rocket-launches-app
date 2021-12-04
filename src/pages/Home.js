import React from 'react';

import './home.css';
import { useGlobalContext } from '../context';



const Home = () => {
		const data = useGlobalContext();
		//console.log(data);
		
		

    return (
        <div className="home-container">
            <header className="home-header">
							<h1>Rocket-X Launches</h1>
							<p>Faça login e acompanhe conosco todos os esforços da empresa Space X no desenvolvimento de seus novos foguetes e conheça um pouco mais de seus lançamentos</p>
							
						</header>
						<main className="home-main">
							<section className="home-info">
								<h2>Acompanhe conosco</h2>
								<ul>
									<li>Next Launch</li>
									<li>Next Launches</li>
									<li>Last Launch</li>
									<li>Past Launches</li>
								</ul>
							</section>
							
						</main>
        </div>
    );
}; 



export default Home



