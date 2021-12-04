import React, { useState, useContext, useEffect, useCallback } from 'react';


const loginUrl = 'http://localhost:3005/api/v1/login';


const AppContext = React.createContext();


const AppProvider = ({ children }) => {
	const [ credentials, setCredentials ] = useState({});
	const [ token, setToken ] = useState('');
	
	

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
	
	
	
	return (
		<AppContext.Provider 
			value={{
				setCredentials,
				token
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




