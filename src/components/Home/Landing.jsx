import React from "react";
import Nav from "../Navbar/Navbar.js"; 
import './Landing.css'
import styled from "styled-components";


const AwesomeHeadline = styled.p`
    font-family: 'Bios';
`;


const Landing = () => {
	return (
		<div className="Landing">
			<section>
				<Nav />
			</section>
			<div className="Name">
				
			</div>
			
		</div>
		
	);
};

export default Landing;
