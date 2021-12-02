import React from 'react';

import { useGlobalContext } from '../context';



const Home = () => {
		const data = useGlobalContext();
		console.log(data);
		
		

    return (
        <div>
            Home page
        </div>
    );
}; 



export default Home



