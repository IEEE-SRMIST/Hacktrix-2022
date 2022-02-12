import React from "react";
import Landing from "../components/Home/Landing";
import Tracks from "../components/Tracks/Tracks";
import About from "../components/About/About";

import styled from "styled-components";
import Faq from "../components/FAQ/FAQs";

const HomeWrapper = styled.main`
  background-color: #09123d;
  min-height: 100vh;
`;

const Home = () => {
  return (
    <HomeWrapper>
      <Landing />
      <About />
      <Tracks />
      <Faq />
    </HomeWrapper>
  );
};

export default Home;
