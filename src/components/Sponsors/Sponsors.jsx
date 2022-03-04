import React from "react";
import MarqueeR from "./Marquee";
import styled from "styled-components";
import Devfolio from "../../assets/sponsor-logos/General/devfolio.png";
import Polygon from "../../assets/sponsor-logos/Gold/polygon.png";
import { SectionHeading } from "../../GlobalStyles";

// copied
const Logos = styled.img`
	@media (max-width: 768px) {
		max-height: 150px;
		max-width: 220px;
		margin-left: 0;
		margin-right: 0;
		margin: auto;
		margin-top: 20px;
	}
	max-height: 150px;
	max-width: 220px;
	margin-left: 20px;
	margin-right: 20px;
	margin-top: 15px;
`;

const Wrapper = styled.main`
	width: 100%;
	margin: auto;
	padding: 2em 0;
	/* background: #040309; */
	display: flex;
	justify-content: center;
	overflow: none;
	@media (max-width: 768px) {
		flex-direction: column;
		margin: auto;
		align-items: center;
	}
`;

const GlowWrapper = styled.main`
	width: 100%;
	margin: auto;
	padding-top: 1em;
	padding-bottom: 4em;
	/* background: #040309; */
	display: flex;
	justify-content: center;
	overflow: none;
	@media (max-width: 768px) {
		flex-direction: column;
		margin: auto;
		align-items: center;
	}
`;

const Sponbutton = styled.button`
	padding: 20px;
	background: rgba(255, 255, 255, 0.1);
	box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
	backdrop-filter: blur(15px);
	-webkit-backdrop-filter: blur(5px);
	border-radius: 15px;
	border: 1px solid rgba(255, 255, 255, 0.18);
	z-index: 100;
	position: relative;
	transition: all 0.3s;

	&::hover {
		filter: blur(2em);
		opacity: 0.7;
		transform: perspective(1.5em) rotateX(35deg) scale(1, 0.6);
	}

	&:active {
		box-shadow: 0 0 0.6em 0.25em var(--glow-color),
			0 0 2.5em 2em var(--glow-spread-color),
			inset 0 0 0.5em 0.25em var(--glow-color);
	}
`;

const Heading = styled.h2`
	display: flex;
	align-items: center;
	justify-content: center;
`;

const P = styled.p`
	text-align: center;
	margin: 2rem 0;
`;

const SponsorsSection = styled.section`
	padding: 4rem 1rem;

	.sponsor {
		display: block;
		width: fit-content;
		margin: 0 auto;
		font-size: 14pt;
		font-weight: 500;
		text-decoration: none;
		padding: 1rem 2rem;
		border-radius: 0.5rem;
		transition: all 200ms ease;
		animation: 3s ease 0s infinite normal none running flicker;

		color: ${({ theme }) => theme.lightPink};
		text-shadow: 0 0 12px ${({ theme }) => theme.glowPink};
		border: 3px solid ${({ theme }) => theme.lightPink};
		box-shadow: 0 0 12px ${({ theme }) => theme.glowPink},
			inset 0 0 12px ${({ theme }) => theme.glowPink};

		&:hover {
			filter: brightness(1.2);
		}
	}
`;

const Sponsors = () => {
	return (
		<SponsorsSection id="sponsors">
			<SectionHeading>Our Sponsers</SectionHeading>
			<Heading style={{ paddingTop: "100px" }}>Platinum Sponsors</Heading>
			<Wrapper>
				<a href="https://devfolio.co/" target="_blank" rel="noreferrer">
					<Logos src={Devfolio} />
				</a>
				<a href="https://polygon.technology/" target="_blank" rel="noreferrer">
					<Logos src={Polygon} />
				</a>
			</Wrapper>

			<MarqueeR />
			{/* <Heading style={{ paddingTop: "100px" }}>Community Sponsor</Heading>
      <Wrapper>
        <a
          href="https://studentambassadors.microsoft.com/"
          target="_blank"
          rel="noreferrer"
        >
          <Logos src={MSLA} />
        </a>
      </Wrapper> */}

			{/* <Heading style={{ paddingTop: "100px" }}>Internship Partner</Heading>
      <Wrapper>
        <a
          href="https://www.fibonalabs.com/index.html"
          target="_blank"
          rel="noreferrer"
        >
          <Logos src={Fibonalabs} />
        </a>
      </Wrapper> */}

			{/* <Heading style={{ paddingTop: "100px" }}>Goodies Sponsor</Heading>
      <Wrapper>
        <a href="https://hackclub.com/brand/" target="_blank" rel="noreferrer">
          <Logos src={Hack_Club} />
        </a>
      </Wrapper> */}

			{/* <Heading style={{ paddingTop: "100px" }}>Domain Sponsor</Heading>
      <Wrapper>
        <a href="https://www.dennetworks.com/" target="_blank" rel="noreferrer">
          <Logos src={Den} />
        </a>
      </Wrapper> */}
			<P>Special sponsers coming up here!</P>
			<a
				href="mailto:ieee@srmist.edu.in"
				target="_blank"
				rel="noreferrer"
				className="sponsor"
			>
				Sponsor Us
			</a>
		</SponsorsSection>
	);
};

export default Sponsors;
