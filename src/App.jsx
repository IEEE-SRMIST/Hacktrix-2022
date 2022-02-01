import Home from "./pages/Home";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
	*, *::after, *::before {
		margin: 0;
		box-sizing: border-box;
	}
`;

function App() {
	return (
		<>
			<GlobalStyle />
			<Home />
		</>
	);
}

export default App;
