import HomeScreen from "./pages/HomeScreen";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./GlobalStyles";

const theme = {
	text: "#EFEFEF",

	lightPink: "#DEB7F5",
	pink: "#D898FF",
	glowPink: "#B741FF",

	blue: "#4169E1",
	glowBlue: "#4169E1",
};

function App() {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle />
			<HomeScreen />
		</ThemeProvider>
	);
}

export default App;
