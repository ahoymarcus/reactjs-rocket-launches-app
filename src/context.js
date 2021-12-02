import React, { useState, useContext, useEffect, useCallback } from 'react';


const url = '';


const AppContext = React.createContext();


const AppProvider = ({ children }) => {
	
	
	
	return (
		<AppContext.Provider 
			value="Global context..."
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




