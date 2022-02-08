import React from "react";
import Landing from "../components/Home/Landing";
import styled from "styled-components";

import Speaker from '../components/Speaker/Speaker';
import Judges from '../components/Judges/Judges';
import Mentor from '../components/Mentor/Mentor';


const HomeWrapper = styled.main`
	min-height: 100vh;
	background-color: #09123d;
`;

const Home = () => {
	return (
		<HomeWrapper>
			<Landing />
			<Judges />
			<Mentor />
			<Speaker />
		</HomeWrapper>
	);
};

export default Home;
