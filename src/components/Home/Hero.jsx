import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	width: 100%;
	text-align: center;
`;

const Heading = styled.h1`
	font-size: 6rem;
	@media (max-width: 800px) {
		font-size: 4rem;
	}
`;

const Heading2 = styled.h2`
	z-index: 1;
	font-size: 2rem;
	position: relative;

	span {
		font: inherit;
		color: #d898ff;
		text-shadow: 0px 0px 24px #b741ff;
	}

	div {
		width: fit-content;
		font: inherit;
        margin: 0 auto;
        background-color: #10061F;
        padding: 0 1em;
	}

	::after {
		position: absolute;
		z-index: -1;
		top: 12px;
		left: 0;
		width: 100%;
		background: #fff;
		height: 1px;
		content: '';
	}

	::before {
		position: absolute;
		z-index: -1;
		bottom: 10px;
		left: 0;
		width: 100%;
		background: #fff;
		height: 1px;
		content: '';
	}
`;

const Tagline = styled.h3`
	color: #d898ff;
	text-shadow: 0px 0px 24px #b741ff;
`;

function Hero() {
	return (
		<Container>
			<Heading>Hacktrix</Heading>
			<Heading2>
				<div>
					<span>2</span>02<span>2</span>
				</div>
			</Heading2>
			<Tagline>Build . Debug . Hack</Tagline>
		</Container>
	);
}

export default Hero;
