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



function App() {


  return (
    <>
      <Router>
				<Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
      
    </>
  );
}



export default App;


