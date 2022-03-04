import Landing from "../components/Home/Landing";
import styled from "styled-components";
import PrizeFile from "../components/Prizes/PrizesFile";
import Sponsors from "../components/Sponsors/Sponsors";
import About from "../components/About/About";
import Tracks from "../components/Tracks/Tracks";
import Faq from "../components/FAQ/FAQs";
import Footer from "../components/Footer/Footer";
import People from "../components/People/People";
import Schedule from "../components/Schedule/Schedule";
import Navbar from "../components/Home/Navbar";
import Backdrop from "../components/Backdrop";
import { JUDGES, MENTOR, SPEAKER } from "../config";

const HomeWrapper = styled.main`
	min-height: 100vh;
	overflow-x: hidden;
`;

const HomeScreen = () => {
	return (
		<HomeWrapper>
			<Navbar />
			<Backdrop />
			<Landing />
			<About />
			<Schedule />
			<PrizeFile />
			<Sponsors />
			<Tracks />
			{/* END FIXED */}

			{/* START UNFIXED */}
			<People title={"Judges"} data={JUDGES} />
			<People title={"Speakers"} data={SPEAKER} />
			<People title={"Mentors"} data={MENTOR} />

			<Faq />
			<Footer />
		</HomeWrapper>
	);
};

export default HomeScreen;
