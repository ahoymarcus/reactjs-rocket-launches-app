// https://github.com/r-spacex/SpaceX-API
// https://docs.microsoft.com/en-us/connectors/rspacexip/
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css'; 

// Pages
import Home from './pages/Home';
import Error from './pages/Error';

// components
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Launches from './pages/Launches';



function App() {


  return (
    <>
      <Router> 
				<Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
					<Route path="/login" element={<Login /> } />
					<Route path="/launches" element={<Launches />} />
          <Route path="*" element={<Error />} />
        </Routes>
				<img className="rocket-image" src="./images/space-x-rest-api.jpg" alt="Plataforma de lançamento da Space X" />
      </Router>
      
    </>
  );
}



export default App;


