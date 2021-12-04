import React, { useState, useContext, useEffect, useCallback } from 'react';


const loginUrl = 'http://localhost:3005/api/v1/login';
const launchesUrl= 'http://localhost:3005/api/v1/launches/';


const AppContext = React.createContext();


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
		loginUser(loginUrl, credentials);
	}, [credentials]);
	
	
	const fetchLaunches = async (url) => {
		try {
			const response = await fetch(url);
			const launches = await response.json();
			
			console.log(launches);
			
			
		} catch (err) {
			console.log(err);
		}
	};
	
	useEffect(() => {
		if (!queryPage) {
			return;
		} else {
			fetchLaunches(`${launchesUrl}${queryPage}`);
		}
	}, [queryPage]);
	
	
	return (
		<AppContext.Provider 
			value={{
				setCredentials,
				token,
				queryPage,
				setQueryPage
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




