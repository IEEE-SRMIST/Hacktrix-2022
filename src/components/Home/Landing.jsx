import React from "react";
import styled from "styled-components";
import { GlitchedImage } from "react-image-glitch";
import Navbar from "./Navbar";
import Hero from "./Hero";
import LandingBackground from "../../assets/img/landingBg.png";
import Countdown from "./Countdown";

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  > * {
    margin-top: 4em;
  }
`;

const Landing = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${LandingBackground})`,
        height: "100vh",
        width: "100%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        position: "relative",
      }}
      id="Home"
    >
      <Navbar />
      <Container>
        <Hero />
        <Countdown />
      </Container>
    </div>
  );
};

export default Landing;
