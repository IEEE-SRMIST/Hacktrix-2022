import React from 'react';
import MarqueeR from './Marquee';
import styled from 'styled-components';
import Den from '../../assets/sponsor-logos/General/den.png';
import Devfolio from '../../assets/sponsor-logos/General/devfolio.png';
import Fibonalabs from '../../assets/sponsor-logos/General/Fibonalabs.png';
import Hack_Club from '../../assets/sponsor-logos/General/Hack_Club.png';
import MSLA from '../../assets/sponsor-logos/General/MSLA.png';
import Wolfram from '../../assets/sponsor-logos/General/wolfram.png';

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
// const Title = styled.h1`
//   text-align: center;
//   color: white;
//   font-size: 35px;
//   font-style: normal;
//   font-weight: 400;
//   /* line-height: 48px; */
//   /* letter-spacing: 0.3em; */
//   @media (max-width: 768px) {
//     font-size: 22px;
//   }
// `;
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
  margin-top: 50px;

  --glow-color: rgb(217, 176, 255);
  --glow-spread-color: rgba(191, 123, 255, 0.781);
  --enhanced-glow-color: rgb(231, 206, 255);
  --btn-color: rgb(100, 61, 136);
  border: 0.25em solid var(--glow-color);
  padding: 1em 3em;
  color: var(--glow-color);
  font-size: 15px;
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
    content: '';
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

  &:hover {
    color: var(--btn-color);
    background-color: var(--glow-color);
    box-shadow: 0 0 1em 0.25em var(--glow-color),
      0 0 4em 2em var(--glow-spread-color),
      inset 0 0 0.75em 0.25em var(--glow-color);
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
const Sponsors = () => {
  return (
    <div>
      <Heading>Platinum Sponsors</Heading>
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
      <Heading>Community Sponsor</Heading>
      <Wrapper>
        <a
          href="https://studentambassadors.microsoft.com/"
          target="_blank"
          rel="noreferrer"
        >
          <Logos src={MSLA} />
        </a>
      </Wrapper>

      <Heading>Internship Partner</Heading>
      <Wrapper>
        <a
          href="https://www.fibonalabs.com/index.html"
          target="_blank"
          rel="noreferrer"
        >
          <Logos src={Fibonalabs} />
        </a>
      </Wrapper>

      <Heading>Goodies Sponsor</Heading>
      <Wrapper>
        <a href="https://hackclub.com/brand/" target="_blank" rel="noreferrer">
          <Logos src={Hack_Club} />
        </a>
      </Wrapper>

      <Heading>Domain Sponsor</Heading>
      <Wrapper>
        <a href="https://www.dennetworks.com/" target="_blank" rel="noreferrer">
          <Logos src={Den} />
        </a>
      </Wrapper>
      <GlowWrapper>
        <a href="mailto:ieee@srmist.edu.in" target="_blank" rel="noreferrer">
          {' '}
          <Sponbutton>Sponsor Us</Sponbutton>
        </a>
      </GlowWrapper>
    </div>
  );
};

export default Sponsors;
