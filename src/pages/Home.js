import React from 'react';

import './home.css';
import { useGlobalContext } from '../context';
import { Link } from 'react-router-dom';



const Home = () => {
		const { token, queryPage, setQueryPage } = useGlobalContext();
		
		
		
		// const handleQuery = (query) => {
			// setQueryPage(query);
		// };
		

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
										{token && <span className="home-links" onClick={setQueryPage('next')} > just hold tight...</span>}
									</li>
									<li>
										Next Launches 
										{token && <span className="home-links" onClick={setQueryPage('next-launches')} > let's go...</span>}
									</li>
									<li>
										Last Launch 
										{token && <span className="home-links" onClick={setQueryPage('last')} > here...</span>}
									</li>
									<li>
										Past Launches 
										{token && <span className="home-links" onClick={setQueryPage('past')} > just come along...</span>}
									</li>
								</ul>
							</section>
							<section className="home-list">
								<p>{queryPage}</p>
							</section>
							
						</main>
        </div>
    );
}; 



export default Home



