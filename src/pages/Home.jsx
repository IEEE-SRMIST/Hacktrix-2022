import React from "react";
import Landing from "../components/Home/Landing";
import styled from "styled-components";
import PrizeFile from "../components/Prizes/PrizesFile";
import Sponsors from "../components/Sponsors/Sponsors";

import Speaker from "../components/Speaker/Speaker";
import Judges from "../components/Judges/Judges";
import Mentor from "../components/Mentor/Mentor";

const HomeWrapper = styled.main`
  min-height: 100vh;
  background-color: #09123d;
`;

const Home = () => {

  return (
    <HomeWrapper>
      <Landing />
      <About />
      <Tracks />
      <Sponsors />
      <Judges />
      <Speaker />
      <Mentor />
      <PrizeFile />
      <Faq />
    </HomeWrapper>
  );
};

export default Home;
