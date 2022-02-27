import React from "react";
import MarqueeR from "./Marquee";
import styled from "styled-components";
import Den from "../../assets/sponsor-logos/General/den.png";
import Devfolio from "../../assets/sponsor-logos/General/devfolio.png";
import Fibonalabs from "../../assets/sponsor-logos/General/Fibonalabs.png";
import Hack_Club from "../../assets/sponsor-logos/General/Hack_Club.png";
import MSLA from "../../assets/sponsor-logos/General/MSLA.png";
import Wolfram from "../../assets/sponsor-logos/General/wolfram.png";
import Matic from "../../assets/sponsor-logos/Gold/matic.png";
import LandingBackground from "../../assets/img/landingBg.png";

// copied
const Logos = styled.img`
  @media (max-width: 768px) {
    max-height: 150px;
    max-width: 220px;
    margin-left: 0;
    margin-right: 0;
    margin: auto;
    margin-top: 20px;
  }
  max-height: 150px;
  max-width: 220px;
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 15px;
`;

const Wrapper = styled.main`
  width: 100%;
  margin: auto;
  padding: 2em 0;
  /* background: #040309; */
  display: flex;
  justify-content: center;
  overflow: none;
  @media (max-width: 768px) {
    flex-direction: column;
    margin: auto;
    align-items: center;
  }
`;

const GlowWrapper = styled.main`
  width: 100%;
  margin: auto;
  padding-top: 1em;
  padding-bottom: 4em;
  /* background: #040309; */
  display: flex;
  justify-content: center;
  overflow: none;
  @media (max-width: 768px) {
    flex-direction: column;
    margin: auto;
    align-items: center;
  }
`;
const Sponbutton = styled.button`
  padding: 20px;
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(15px);
  -webkit-backdrop-filter: blur(5px);
  border-radius: 15px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  z-index: 100;
  position: relative;
  transition: all 0.3s;

  &::hover {
    filter: blur(2em);
    opacity: 0.7;
    transform: perspective(1.5em) rotateX(35deg) scale(1, 0.6);
  }

  &:active {
    box-shadow: 0 0 0.6em 0.25em var(--glow-color),
      0 0 2.5em 2em var(--glow-spread-color),
      inset 0 0 0.5em 0.25em var(--glow-color);
  }
`;
const SponserTitle = styled.h1`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
  font-size: 48px;
  @media (max-width: 768px) {
    font-size: 44px;
  }
  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

const Heading = styled.h2`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const P = styled.h6`
  display: flex;
  align-items: center;
  color: #ffffff;
  text-shadow: 0px 0px 50px #b741ff;
  justify-content: center;
`;

const SponserText = styled.p`
  font-family: "Bios", sans-serif;
  font-size: 1rem;
  margin-top: 10px;
`;
const Sponsors = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${LandingBackground})`,
        height: "100%",
        width: "100%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
      }}
      id="Sponsors"
    >
      <SponserTitle style={{ paddingTop: "100px" }}>Our Sponsers</SponserTitle>
      <Heading style={{ paddingTop: "100px" }}>Platinum Sponsors</Heading>
      <Wrapper>
        <a href="https://devfolio.co/" target="_blank" rel="noreferrer">
          <Logos src={Devfolio} />
        </a>
        {/* <a
          href="https://www.wolfram.com/wolfram-one/"
          target="_blank"
          rel="noreferrer"
        >
          <Logos src={Wolfram} />
        </a> */}
        <a href="https://polygon.technology/" target="_blank" rel="noreferrer">
          <Logos src={Matic} />
        </a>
      </Wrapper>

      <MarqueeR />
      {/* <Heading style={{ paddingTop: "100px" }}>Community Sponsor</Heading>
      <Wrapper>
        <a
          href="https://studentambassadors.microsoft.com/"
          target="_blank"
          rel="noreferrer"
        >
          <Logos src={MSLA} />
        </a>
      </Wrapper> */}

      {/* <Heading style={{ paddingTop: "100px" }}>Internship Partner</Heading>
      <Wrapper>
        <a
          href="https://www.fibonalabs.com/index.html"
          target="_blank"
          rel="noreferrer"
        >
          <Logos src={Fibonalabs} />
        </a>
      </Wrapper> */}

      {/* <Heading style={{ paddingTop: "100px" }}>Goodies Sponsor</Heading>
      <Wrapper>
        <a href="https://hackclub.com/brand/" target="_blank" rel="noreferrer">
          <Logos src={Hack_Club} />
        </a>
      </Wrapper> */}

      {/* <Heading style={{ paddingTop: "100px" }}>Domain Sponsor</Heading>
      <Wrapper>
        <a href="https://www.dennetworks.com/" target="_blank" rel="noreferrer">
          <Logos src={Den} />
        </a>
      </Wrapper> */}
      <P style={{ paddingTop: "100px" }}>Special sponsers coming up here!</P>
      <GlowWrapper>
        <a href="mailto:ieee@srmist.edu.in" target="_blank" rel="noreferrer">
          {" "}
          <Sponbutton>
            <SponserText className="sponserText">Sponsor Us</SponserText>
          </Sponbutton>
        </a>
      </GlowWrapper>
    </div>
  );
};

export default Sponsors;
