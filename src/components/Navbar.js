import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
	
	
	return (
		<div className="nav-container">
			<h2>The Space X API Launch</h2>
			<div>
				<Link to="/" className="nav-links" >
					Home
				</Link>
				<Link to="/rooms" className="nav-links" >
					Space X
				</Link>
			</div>
		</div>
	);
};


export default Navbar


