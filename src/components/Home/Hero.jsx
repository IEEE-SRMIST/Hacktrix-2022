import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  text-align: center;
`;

const Heading = styled.h1`
  font-size: 6rem;
  text-shadow: 0px 0px 50px #b741ff;
  @media (max-width: 800px) {
    font-size: 3rem;
  }
`;

const Heading2 = styled.h2`
  z-index: 1;
  font-size: 2rem;
  position: relative;

  .date-before {
    font: inherit;
    color: #d898ff;
    text-shadow: 0px 0px 24px #b741ff;
  }

  .date {
    font: inherit;
    color: #fff;
    text-shadow: 0px 0px 55px #4169e1;
  }

  div {
    width: fit-content;
    font: inherit;
    margin: 0 auto;
    background-color: #10061f;
    padding: 0 1em;
  }

  ::after {
    position: absolute;
    z-index: -1;
    top: 12px;
    left: 0;
    width: 100%;
    background: rgba(216, 152, 255, 1);
    height: 1px;
    content: "";
  }

  ::before {
    position: absolute;
    z-index: -1;
    bottom: 10px;
    left: 0;
    width: 100%;
    background: rgba(65, 105, 225, 1);
    height: 1px;
    content: "";
  }
`;

const Tagline = styled.h3`
  color: #d898ff;
  text-shadow: 0px 0px 24px #b741ff;
  font-size: 30px;
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

function Hero() {
  return (
    <Container>
      <Heading>Hacktrix</Heading>
      <Heading2>
        <div>
          <span className="date-before">2</span>
          <span className="date">02</span>
          <span className="date-before">2</span>
        </div>
      </Heading2>
      <Tagline>Build . Debug . Hack</Tagline>
    </Container>
  );
}

export default Hero;
