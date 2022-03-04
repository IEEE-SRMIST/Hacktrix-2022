import React from "react";
import styled from "styled-components";

const Container = styled.article`
	text-align: center;
	white-space: nowrap;
	margin-bottom: 3rem;

	h1 {
		font-size: clamp(28pt, 10vw, 64pt);
		letter-spacing: clamp(0.2em, 1vw, 0.3em);
		text-shadow: 0 0 12px ${(props) => props.theme.glowPink};
		margin-bottom: 0.5rem;
	}

	h2 {
		font-size: clamp(20pt, 5vw, 34pt);
		color: ${({ theme }) => theme.pink};
		text-shadow: 0 0 12px ${(props) => props.theme.glowPink};
		letter-spacing: 0.1em;
		margin-bottom: 2rem;
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;

		::before,
		::after {
			content: "";
			display: block;
			margin: 0 0.5rem;
			margin-top: 0.375rem;
			min-width: 20%;
			padding: clamp(0.125rem, 5vw, 0.375rem) 0;
			border-bottom: 2px solid ${({ theme }) => theme.blue};
			border-top: 2px solid ${({ theme }) => theme.pink};
			border-radius: 2px;

			@media screen and (max-width: 480px) {
				display: none;
			}
		}

		div {
			margin-right: -0.1em;

			span {
				text-shadow: 0 0 12px ${(props) => props.theme.glowBlue};
				color: ${({ theme }) => theme.text};
			}
		}
	}

	.tagline {
		font-size: clamp(16pt, 3vw, 22pt);
		font-family: monospace;
		color: ${({ theme }) => theme.pink};
		font-weight: bold;
		text-shadow: 0 0 12px ${(props) => props.theme.glowPink};
	}
`;

function Hero() {
	return (
		<Container>
			<h1>Hacktrix</h1>
			<h2>
				<div>
					2<span className="white">02</span>2
				</div>
			</h2>
			<div className="tagline">build().debug().hack();</div>
		</Container>
	);
}

export default Hero;
