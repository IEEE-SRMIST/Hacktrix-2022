import React from "react";
import Landing from "../components/Home/Landing";
import styled from "styled-components";
import PrizeFile from "../components/Prizes/PrizesFile";
import Sponsors from '../components/Sponsors/Sponsors';

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
      <PrizeFile />
      <Faq />
      <Sponsors />
    </HomeWrapper>
  );
};

export default Home;
