import React, { useState, useContext, useEffect, useCallback } from 'react';


const loginUrl = 'http://localhost:3000/api/v1/login';


const AppContext = React.createContext();


const AppProvider = ({ children }) => {
	const [ username, setUsername ] = useState('');
	const [ password, setPassword ] = useState('');
	
	
	// https://www.digitalocean.com/community/tutorials/how-to-call-web-apis-with-the-useeffect-hook-in-react
	// https://www.digitalocean.com/community/tutorials/how-to-add-login-authentication-to-react-applications
	const fetchLoinToken = async () => {
		try {
			const response = await fetch(loginUrl);
			const data = await response.json();
			
			console.log(data);
			// const token = data.
			
			
		} catch (err) {
			console.log(err);
		}
	};
	
	
	useEffect(() => {
		if (username !== '' && password !== '') {
			fetchLoinToken();
		}
	}, [username, password]);
	
	
	
	return (
		<AppContext.Provider 
			value={{
				username, 
				setUsername,
				password, 
				setPassword
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




