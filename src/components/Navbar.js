import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
	
	
	return (
		<div className="nav-container">
			<h2><Link to="/" className="logo" >Rocket-X Launches App</Link></h2>
			<div>
				<Link to="/" className="nav-links" >
					Login
				</Link>
				<Link to="/rooms" className="nav-links" >
					Launches
				</Link>
			</div>
		</div>
	);
};


export default Navbar


