import React from "react";
import Landing from "../components/Home/Landing";
import styled from "styled-components";
import PrizeFile from "../components/Prizes/PrizesFile";
import Sponsors from "../components/Sponsors/Sponsors";
import About from "../components/About/About";
import Tracks from "../components/Tracks/Tracks";
import Faq from "../components/FAQ/FAQs";
import Speaker from "../components/Speaker/Speaker";
import Footer from "../components/Footer/Footer";
import Judges from "../components/Judges/Judges";
import Mentor from "../components/Mentor/Mentor";
import Schedule from "../components/Schedule/Schedule";

const HomeWrapper = styled.main`
  min-height: 100vh;
  background-color: #040309;
`;

const Home = () => {
  return (
    <HomeWrapper>
      <Landing />
      <About />
      <Schedule />
      <PrizeFile />
      <Sponsors />
      <Tracks />
      <Judges />
      <Speaker />
      <Mentor />
      <Faq />
      <Footer />
    </HomeWrapper>
  );
};

export default Home;
