import Home from "./pages/Home";
import About from "./pages/About";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./GlobalStyles";

const theme = {
	text: "#EFEFEF",
	primary: "#9226FF",
};

function App() {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<About />
		</ThemeProvider>
	);
}

export default App;
