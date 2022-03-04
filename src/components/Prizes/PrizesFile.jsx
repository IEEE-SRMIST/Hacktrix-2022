import React from "react";
import Prizes from "./Prizes";
import Cards from "./Cards";
import LandingBackground from "../../assets/img/landingBg.png";
import styled from "styled-components";
import { SectionHeading } from "../../GlobalStyles";

const PrizesSection = styled.section`
	padding: 4rem 1rem;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

const PrizesFile = () => {
	return (
		<PrizesSection id="prizes">
			<SectionHeading>Prizes</SectionHeading>
			<Prizes />
			<Cards />
		</PrizesSection>
	);
};

export default PrizesFile;
