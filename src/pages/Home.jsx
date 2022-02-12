import React from "react";
import Landing from "../components/Home/Landing";
import About from "../components/About/About";
import styled from "styled-components";
import Faq from "../components/FAQ/FAQs";

const HomeWrapper = styled.main`
  min-height: 100vh;
  background-color: #050308;
`;

const Home = () => {
  return (
    <HomeWrapper>
      <Landing />
      <Faq />
      <About />
    </HomeWrapper>
  );
};

export default Home;
