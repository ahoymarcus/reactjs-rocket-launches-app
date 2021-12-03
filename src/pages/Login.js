import React from 'react';

import './login.css';



const Login = () => {
	
	
	return (
		<div className="login-container">
			<header className="login-header">
				<h1>Rocket-X Launches</h1>
				<p>Cadastre-se aqui para poder acompanhar essa saga interestelar!</p>
				
			</header>
			<main className="login-main">
				<section className="login-info">
					<h2>Cadastre usuário</h2>
					<form className="login-form" >
						<div className="input-container">
							<label htmlFor="username">
								Usuário
							</label>
							<input 
								type="text"
								id="username"
								placeholder="nome do usuário"
							/>
						</div>
						<div className="input-container">
							<label htmlFor="password">
								Senha
							</label>
							<input
								type="text"
								id="password"
								placeholder="sua senha"
							/>
						</div>
					</form>
				</section>
				
			</main>
	</div>
	);
};



export default Login



