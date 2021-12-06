import React, { useState, useContext, useEffect, useCallback } from 'react';



const AppContext = React.createContext();

// Local server
const loginUrl = 'http://localhost:3005/api/v1/login';
const launchesUrl= 'http://localhost:3005/api/v1/launches/';

// on Heroku
const loginHerokuUrl = 'https://nodejs-rocket-lauches-api.herokuapp.com/api/v1/login';
const launchesHerokuUrl= 'https://nodejs-rocket-lauches-api.herokuapp.com/api/v1/launches/';


const AppProvider = ({ children }) => {
	const [ credentials, setCredentials ] = useState({});
	const [ token, setToken ] = useState('');
	const [ queryPage, setQueryPage ] = useState('');
	const [ launchList, setLaunchList ] = useState([]);
	
	

	const loginUser = async (url, credentials) => {
		try {
			const response = await fetch(url, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(credentials)
			});
			const data = await response.json();
			
			console.log(data);
			const { token } = data;
			
			setToken(token);
		} catch (err) {
			console.log(err);
		}
	};
	
	
	useEffect(() => {
		loginUser(loginHerokuUrl, credentials);
	}, [credentials]);
	
	
	const fetchLaunches = async (url) => {
		try {
			const response = await fetch(url, {
				headers: {
					'authorization': `Bearer ${token}`
				}
			});
			const data = await response.json();
			
			console.log(data.length);
			console.log(data);
			
			let launches = [];
			if (queryPage === 'last') {
				launches.push(data);
			}	else if (queryPage === 'next') {
				launches.push(data[0]);
			} else {
				launches = data;
			}	
			
			console.log(launches.length);
			console.log(launches);
			
			setLaunchList(launches);
		} catch (err) {
			console.log(err);
		}
	};
	
	useEffect(() => {
		if (!queryPage) {
			return;
		} else {
			fetchLaunches(`${launchesHerokuUrl}${queryPage}`);
		}
	}, [queryPage]);
	
	
	return (
		<AppContext.Provider 
			value={{
				setCredentials,
				token,
				queryPage,
				setQueryPage,
				launchList
			}}
		>
			{ children }
		</AppContext.Provider>
	);
};


// custom hook
export const useGlobalContext = () => {
	return useContext(AppContext);
};



export { AppContext, AppProvider }




