import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';



const ErrorPage = styled.div`
	background-color: #000938;
	min-height: 600px;
`;

const Image = styled.img`
	width: 100%;
	height: 300px;
`;

const SectionInfo = styled.div`
	color: gray;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const H1 = styled.h1`
	margin: 45px 0;
`;

const BtnRedirect = styled.button`
	color: gray;
	background-color: white;
	padding: 8px;
	border-radius: 7px;
	margin-top: 30px;
`;

export default function Error() {


    return (
        <ErrorPage>
					<Image src="./images/space-x-in-space.webp" alt="Plataforma de lançamento da Space X" /> 
					<SectionInfo>
						<H1>404 - Página não encontrada</H1>
						<p>Hora de retornar para Home Page</p> 
						<BtnRedirect>
							<Link to="/" style={{textDecoration: "none"}} >Redirect Home</Link>
						</BtnRedirect>
					</SectionInfo>
				</ErrorPage>
    );
};


