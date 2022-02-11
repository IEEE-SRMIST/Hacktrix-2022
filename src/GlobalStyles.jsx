import { createGlobalStyle } from "styled-components";

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

	*, *::after, *::before {
		margin: 0;
		box-sizing: border-box;
		font-family: 'Gothic A1', sans-serif;
		line-height: 1.3;
		color: ${(props) => props.theme.text};
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
	}
	overflow-x:hidden;
`;

export default GlobalStyle;
