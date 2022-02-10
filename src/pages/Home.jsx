import React from "react";
import Landing from "../components/Home/Landing";
import styled from "styled-components";
import background from '../components/Home/background.jpg'



const HomeWrapper = styled.main`
	min-height: 100vh;
	background-image: url(${background});
	background-size: 100rem;

`;


const Home = () => {
	return (
		<HomeWrapper>
			<Landing />
		</HomeWrapper>
	);
};

export default Home;
