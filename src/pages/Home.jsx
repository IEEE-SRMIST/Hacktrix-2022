import React from "react";
import Landing from "../components/Home/Landing";
import styled from "styled-components";

import Speaker from "../components/Speaker/Speaker";
import Judges from "../components/Judges/Judges";
import Mentor from "../components/Mentor/Mentor";

const HomeWrapper = styled.main`
  min-height: 100vh;
  background-color: #040309;
`;

const Home = () => {
  return (
    <HomeWrapper>
      <Landing />
      <Judges />
      <Speaker />
      <Mentor />
    </HomeWrapper>
  );
};

export default Home;
