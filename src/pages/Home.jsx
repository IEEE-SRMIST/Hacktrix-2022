import React from "react";
import Landing from "../components/Home/Landing";
import Tracks1 from "../components/Tracks/Tracks1";
import Tracks2 from "../components/Tracks/Tracks2";
import styled from "styled-components";

const HomeWrapper = styled.main`
  min-height: 100vh;
  background-color: #040309;
`;

const Home = () => {
  return (
    <HomeWrapper>
      {/* <Landing /> */}
      <Tracks1 />
    </HomeWrapper>
  );
};

export default Home;
