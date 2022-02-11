import React from "react";
import Landing from "../components/Home/Landing";
import About from "../components/About/About";
import styled from "styled-components";

const HomeWrapper = styled.main`
  min-height: 100vh;
  background-color: #050308;
`;

const Home = () => {
  return (
    <HomeWrapper>
      {/* <Landing /> */}
      <About />
    </HomeWrapper>
  );
};

export default Home;
