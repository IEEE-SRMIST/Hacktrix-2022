import styled, { createGlobalStyle } from "styled-components";

import BiosWoff from "./assets/fonts/Bios-Regular.woff";
import BiosWoff2 from "./assets/fonts/Bios-Regular.woff2";
import BiosBoldWoff from "./assets/fonts/Bios-Bold.woff";
import BiosBoldWoff2 from "./assets/fonts/Bios-Bold.woff2";

const GlobalStyle = createGlobalStyle`
	@font-face {
    font-family: 'Bios';
    src: url(${BiosWoff2}) format('woff2'), url(${BiosWoff}) format('woff');
  }

  @font-face {
    font-family: 'Bios';
    src: url(${BiosBoldWoff2}) format('woff2'), url(${BiosBoldWoff}) format('woff');
    font-weight: bold;
  }

	@keyframes flicker {
		0% {
				opacity: 1;
		}
		4% {
				opacity: .9;
		}
		6% {
				opacity: .85;
		}
		8% {
				opacity: .95;
		}
		10% {
				opacity: .9;
		}
		11% {
				opacity: .922;
		}
		12% {
				opacity: .9;
		}
		14% {
				opacity: .95;
		}
		16% {
				opacity: .98;
		}
		17% {
				opacity: .9;
		}
		19% {
				opacity: .93;
		}
		20% {
				opacity: .99;
		}
		24% {
				opacity: 1;
		}
		26% {
				opacity: .94;
		}
		28% {
				opacity: .98;
		}
		37% {
				opacity: .93;
		}
		38% {
				opacity: .5;
		}
		39% {
				opacity: .96;
		}
		42% {
				opacity: 1;
		}
		44% {
				opacity: .97;
		}
		46% {
				opacity: .94;
		}
		56% {
				opacity: .9;
		}
		58% {
				opacity: .9;
		}
		60% {
				opacity: .99;
		}
		68% {
				opacity: 1;
		}
		70% {
				opacity: .9;
		}
		72% {
				opacity: .95;
		}
		93% {
				opacity: .93;
		}
		95% {
				opacity: .95;
		}
		97% {
				opacity: .93;
		}
		100% {
				opacity: 1;
		}
	}

	*, *::after, *::before {
		margin: 0;
		box-sizing: border-box;
		font-family: 'Inter', sans-serif;
		line-height: 1.3;
	}

	button{
		transition: filter 200ms linear;

		&:hover{
			filter: brightness(1.05);
		}

		&:active{
			filter: brightness(0.9);
		}
	}

	h1,h2,h3,h4,h5,h6{
    font-family: 'Bios', sans-serif;
    font-weight: bold;

		* {
			font-family: 'Bios', sans-serif;
    	font-weight: bold;
		}
	}

	body{	
		background-color: #040309;
		overflow-x:hidden;
		color: ${(props) => props.theme.text};
	}

	::-webkit-scrollbar {
		width: 8px;
		height: 8px;
		background: inherit;
	}

	::-webkit-scrollbar-thumb {
		background: #d125e0;
		border: 2px solid #040309;
		border-radius: 8px;
	}
`;

export default GlobalStyle;

export const SectionHeading = styled.h2`
	text-align: center;
	font-size: clamp(20pt, 6vw, 32pt);
	color: ${({ theme }) => theme.lightPink};
	text-shadow: 0 0 12px ${({ theme }) => theme.glowPink};
	animation: 3s ease 0s infinite normal none running flicker;
`;

export const TopGlyph = styled.div`
	position: absolute;
	z-index: -1;
	left: -10%;
	top: -8rem;
	width: clamp(260px, 40vw, 600px);
	transform: rotate(25deg);

	svg {
		width: 100%;
		height: auto;
	}
`;

export const BottomGlyph = styled.div`
	position: absolute;
	z-index: -1;
	right: -15%;
	bottom: -2rem;
	width: clamp(260px, 40vw, 600px);
	z-index: 10;
	transform: rotate(-30deg);

	svg {
		width: 100%;
		height: auto;
	}
`;
