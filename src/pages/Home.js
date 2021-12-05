import React from 'react';
import { Link } from 'react-router-dom';

import './home.css';
import { useGlobalContext } from '../context';
import LaunchList from '../components/LaunchList';



const Home = () => {
		const { token, queryPage, setQueryPage, launchList } = useGlobalContext();
		
		
		
		const handleQuery = (query) => {
			setQueryPage(query);
			
			console.log(query);
		};
		

    return (
        <div className="home-container">
            <header className="home-header">
							<h1>Rocket-X Launches</h1>
							<p>{token !== '' ? 'Entre e pesquise ' : 'Faça login e acompanhe '} conosco todos os esforços da empresa Space X no desenvolvimento de seus novos foguetes e conheça um pouco mais de seus lançamentos</p>
							
						</header>
						<main className="home-main">
							<section className="home-info">
								<h2>Escolha seu próximo destino!</h2>
								<ul>
									<li>
										Next Launch 
										{token && <span className="home-links" onClick={() => handleQuery('next')} > just hold tight...</span>}
									</li>
									<li>
										Next Launches 
										{token && <span className="home-links" onClick={() =>handleQuery('next-list')} > let's go...</span>}
									</li>
									<li>
										Last Launch 
										{token && <span className="home-links" onClick={() => handleQuery('last')} > here...</span>}
									</li>
									<li>
										Past Launches 
										{token && <span className="home-links" onClick={() => handleQuery('past')} > just come along...</span>}
									</li>
								</ul>
							</section>
							<section className="home-list">
								<LaunchList launchList={launchList} />	
							</section>
							
						</main>
        </div>
    );
}; 



export default Home



