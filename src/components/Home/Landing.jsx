import React from "react";
import styled from "styled-components";
import Hero from "./Hero";
import Countdown from "./Countdown";

const Container = styled.section`
	min-height: 100vh;
	display: grid;
	place-items: center;

	> div {
		max-width: 512px;
		margin-bottom: 1rem;
		min-width: fit-content;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
`;

const Landing = () => {
	return (
		<Container>
			<div>
				<Hero />
				<Countdown />
			</div>
		</Container>
	);
};

export default Landing;
