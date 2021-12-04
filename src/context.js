import React, { useState, useContext, useEffect, useCallback } from 'react';


const url = 'http://localhost:3000';


const AppContext = React.createContext();


const AppProvider = ({ children }) => {
	const [ username, setUsername ] = useState('');
	const [ password, setPassword ] = useState('');
	
	
	
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




