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
										{token === '' ? <Link to="/login" className="home-toggle-link" >Next Launch</Link> : <span className="home-toggle-link" >Next Launch</span>} 
										{token && <span className="home-query" onClick={() => handleQuery('next')} > just hold tight...</span>}
									</li>
									<li>
										{token === '' ? <Link to="/login" className="home-toggle-link" >Next Launches</Link> : <span className="home-toggle-link" >Next Launches</span>}
										 
										{token && <span className="home-query" onClick={() =>handleQuery('next-list')} > let's go...</span>}
									</li>
									<li>
										{token === '' ? <Link to="/login" className="home-toggle-link" >Last Launch</Link> : <span className="home-toggle-link" >Last Launch</span>}
										 
										{token && <span className="home-query" onClick={() => handleQuery('last')} > here...</span>}
									</li>
									<li>
										{token === '' ? <Link to="/login" className="home-toggle-link" >Past Launches</Link> : <span className="home-toggle-link" >Past Launches</span>}
										 
										{token && <span className="home-query" onClick={() => handleQuery('past')} > just come along...</span>}
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



