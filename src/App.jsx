import Home from "./pages/Home";
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
			<Home />
		</ThemeProvider>
	);
}

export default App;
