import React from "react";
import MarqueeR from "./Marquee";
import styled from "styled-components";
import Den from "../../assets/sponsor-logos/General/den.png";
import Devfolio from "../../assets/sponsor-logos/General/devfolio.png";
import Fibonalabs from "../../assets/sponsor-logos/General/Fibonalabs.png";
import Hack_Club from "../../assets/sponsor-logos/General/Hack_Club.png";
import MSLA from "../../assets/sponsor-logos/General/MSLA.png";
import Wolfram from "../../assets/sponsor-logos/General/wolfram.png";
import BackG from "../../assets/sponsor-logos/Backdrop.png";

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
  padding: 1em 0;
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
  margin-top: 20px;

  --glow-color: rgb(230, 204, 255);

  --btn-color: rgb(100, 61, 136);
  border: 0.25em solid var(--glow-color);
  padding: 1em 2em;
  color: var(--glow-color);
  font-family: "Gothic A1", sans-serif;
  font-size: 25px;
  font-weight: bold;
  background-color: var(--btn-color);
  border-radius: 1em;
  outline: none;
  box-shadow: 0 0 1em 0.25em var(--glow-color),
    0 0 4em 1em var(--glow-spread-color),
    inset 0 0 0.75em 0.25em var(--glow-color);
  text-shadow: 0 0 0.5em var(--glow-color);
  position: relative;
  transition: all 0.3s;

  &::after {
    pointer-events: none;
    content: "";
    position: absolute;
    top: 120%;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: var(--glow-spread-color);
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
const Heading = styled.h2`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
`;

const SponserText = styled.p`
  font-family: "Gothic A1", sans-serif;
`;
const Sponsors = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${BackG})`,
        height: "100%",
        width: "100%",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
      }}
    >
      <Heading style={{ paddingTop: "200px" }}>Platinum Sponsors</Heading>
      <Wrapper>
        <a href="https://devfolio.co/" target="_blank" rel="noreferrer">
          <Logos src={Devfolio} />
        </a>
        <a
          href="https://www.wolfram.com/wolfram-one/"
          target="_blank"
          rel="noreferrer"
        >
          <Logos src={Wolfram} />
        </a>
      </Wrapper>
      <MarqueeR />
      <Heading style={{ paddingTop: "100px" }}>Community Sponsor</Heading>
      <Wrapper>
        <a
          href="https://studentambassadors.microsoft.com/"
          target="_blank"
          rel="noreferrer"
        >
          <Logos src={MSLA} />
        </a>
      </Wrapper>

      <Heading style={{ paddingTop: "100px" }}>Internship Partner</Heading>
      <Wrapper>
        <a
          href="https://www.fibonalabs.com/index.html"
          target="_blank"
          rel="noreferrer"
        >
          <Logos src={Fibonalabs} />
        </a>
      </Wrapper>

      <Heading style={{ paddingTop: "100px" }}>Goodies Sponsor</Heading>
      <Wrapper>
        <a href="https://hackclub.com/brand/" target="_blank" rel="noreferrer">
          <Logos src={Hack_Club} />
        </a>
      </Wrapper>

      <Heading style={{ paddingTop: "100px" }}>Domain Sponsor</Heading>
      <Wrapper>
        <a href="https://www.dennetworks.com/" target="_blank" rel="noreferrer">
          <Logos src={Den} />
        </a>
      </Wrapper>
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
