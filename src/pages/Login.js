import React, { useState } from 'react';

import './login.css';
import { useGlobalContext } from '../context';



const Login = () => {
	const [ username, setUsername ] = useState('');
	const [ password, setPassword ] = useState('');
	const { setCredentials } = useGlobalContext();
	
	
	
	const handleSubmit = (e) => {
		e.preventDefault();	
		
		if (username && password) {
			setCredentials({
				username,
				password
			});
			
			console.log('setando credenciais.....');
		}
		
		setUsername('');
		setPassword('');
	};
	
	
	return (
		<div className="login-container">
			<header className="login-header">
				<h1>Rocket-X Launches</h1>
				<p>Cadastre-se aqui para poder acompanhar essa saga interestelar!</p>
				
			</header>
			<main className="login-main">
				<section className="login-info">
					<h2>Cadastre usuário</h2>
					<form className="login-form" onSubmit={handleSubmit} >
						
						<div className="input-container">
							<label htmlFor="username">
								Usuário
							</label>
							<input 
								type="text"
								id="username"
								placeholder="nome do usuário"
								value={username}
								onChange={(e) => setUsername(e.target.value)}
								required
							/>
						</div>
						<div className="input-container">
							<label htmlFor="password">
								Senha
							</label>
							<input
								type="password"
								id="password"
								placeholder="sua senha"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								required
							/>
						</div>
						<button type="submit" className="btn-submit">
							Submit
						</button>
					</form>
				</section>
				
			</main>
	</div>
	);
};



export default Login



