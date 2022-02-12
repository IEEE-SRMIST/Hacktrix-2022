import React from "react";
import Landing from "../components/Home/Landing";
import Tracks from "../components/Tracks/Tracks";
import About from "../components/About/About";

import styled from "styled-components";

const HomeWrapper = styled.main`

	background-color: #09123d;
  min-height: 100vh;

`;

const Home = () => {
  return (
    <HomeWrapper>
      <About />
    <Tracks />

    </HomeWrapper>
  );
};

export default Home;
