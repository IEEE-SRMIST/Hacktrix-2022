import Home from "./pages/Home";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./GlobalStyles";
import Schedule from "./pages/Schedule";

const theme = {
	text: "#EFEFEF",
	primary: "#9226FF",
};

function App() {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<Home />
			<Schedule />
		</ThemeProvider>
	);
}

export default App;
