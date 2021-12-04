import React from 'react';

import './home.css';
import { useGlobalContext } from '../context';
import { Link } from 'react-router-dom';



const Home = () => {
		const { token } = useGlobalContext();
		//console.log(data);
		
		

    return (
        <div className="home-container">
            <header className="home-header">
							<h1>Rocket-X Launches</h1>
							<p>{token !== '' ? 'Entre e pesquise ' : 'Faça login e acompanhe '} conosco todos os esforços da empresa Space X no desenvolvimento de seus novos foguetes e conheça um pouco mais de seus lançamentos</p>
							
						</header>
						<main className="home-main">
							<section className="home-info">
								<h2>Acompanhe conosco</h2>
								<ul>
									<li>
										Next Launch 
										{token && <span><Link to="/launches" className="home-links" > just hold tight...</Link></span>}
									</li>
									<li>
										Next Launches 
										{token && <span><Link to="/launches" className="home-links" > let's go...</Link></span>}
									</li>
									<li>
										Last Launch 
										{token && <span><Link to="/launches" className="home-links" > here...</Link></span>}
									</li>
									<li>
										Past Launches 
										{token && <span><Link to="/launches" className="home-links" > just come along...</Link></span>}
									</li>
								</ul>
							</section>
							
						</main>
        </div>
    );
}; 



export default Home



