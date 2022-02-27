import React, { useState } from "react";
import styled from "styled-components";
import LandingBackground from "../../assets/img/landingBg.png";

const CardBox = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: center;
  overflow: none;
  column-gap: 1rem;
  font: inherit;
  transition: 0.3s;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const Title = styled.h1`
  text-align: center;
`;

const CardContainer = styled.div`
  width: clamp(200px, 100%, 300px);
  background: #12151b;
  box-shadow: 0px 0px 13px rgba(0, 0, 0, 0.5), inset 0px 2px 0px #8946a6;
  border-radius: 8px;
  margin: 50px auto;
  padding: 0.5em 1em;
  font: inherit;
  height: fit-content;

  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  @media (max-width: 768px) {
    margin: 20px auto;
    min-width: 250px;
  }
`;

const Heading = styled.h2`
  cursor: pointer;
  font-size: 1rem;
  color: #ffffff;
  text-shadow: 0px 0px 12px #9226ff;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  justify-content: space-between;
  * {
    font: inherit;
  }
`;

const CardBody = styled.div`
  font: inherit;
  display: none;
`;

const CardBodyList = styled.ul`
  font: inherit;
`;

const CardBodyItem = styled.li`
  font: inherit;
  padding: 10px;
  text-align: justify;
`;

const Card = ({ heading, body }) => {
  const [active, setActive] = useState(false);

  return (
    <CardContainer>
      <Heading onClick={() => setActive(!active)}>
        <span>{heading}</span> <span>{active ? "-" : "+"}</span>
      </Heading>
      <CardBody
        style={{
          display: active ? "block" : "none",
          transition: active ? "0.3s" : "0",
        }}
      >
        <CardBodyList>
          {body.map((item, index) => (
            <CardBodyItem key={index}>{item}</CardBodyItem>
          ))}
        </CardBodyList>
      </CardBody>
    </CardContainer>
  );
};

const Cards = () => {
  const WINNER_PRIZES = [
    {
      heading: "Polygon",
      body: [
        "Cash prize for the best hack built on top of Ethereum (Rs.10000).",
        "Teams that integrate Polygon in their hacks as well the prize money will be (Rs.15000)",
        "Eligibility for Internship/Full-Time role.",
        "Seed funding of upto 5000 USD.",
      ],
    },
    {
      heading: "Tezos",
      body: [
        "20000 INR for best Dapp built on Tezos.",
        "Continuity grant opportunity up to 5,000 USD for an outstanding project.",
        "Every valid submission made in the Tezos track will be rewarded with exclusive Schwag Kits.",
      ],
    },
    {
      heading: "Celo",
      body: ["20000 INR for best Dapp built on Celo."],
    },
    // {
    //   heading: "Filecoin",
    //   body: ["20000 INR for best use of IPFS and/or Filecoin."],
    // },
    // {
    //   heading: "Heading",
    //   body: ["prize information", "prize information", "prize information"],
    // },
    // {
    //   heading: "Heading",
    //   body: ["prize information", "prize information", "prize information"],
    // },
  ];

  const PARTICIPATION_PRIZES = [
    {
      heading: "Heading",
      body: ["prize information", "prize information", "prize information"],
    },
    {
      heading: "Heading",
      body: ["prize information", "prize information", "prize information"],
    },
    {
      heading: "Heading",
      body: ["prize information", "prize information", "prize information"],
    },
    {
      heading: "Heading",
      body: ["prize information", "prize information", "prize information"],
    },
    {
      heading: "Heading",
      body: ["prize information", "prize information", "prize information"],
    },
    {
      heading: "Heading",
      body: ["prize information", "prize information", "prize information"],
    },
  ];

  return (
    <>
      <section
        style={{
          padding: "20px",
          marginTop: "0px",
          backgroundImage: `url(${LandingBackground})`,
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      >
        <Title>Winner Prizes</Title>
        <CardBox>
          {WINNER_PRIZES.map((prize, index) => (
            <Card {...prize} key={index} />
          ))}
        </CardBox>
      </section>
      {/* participation starts */}
      <section
        style={{
          backgroundImage: `url(${LandingBackground})`,

          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
        }}
      >
        {/* <Title>Participation Prizes</Title>
        <CardBox>
          {PARTICIPATION_PRIZES.map((prize, index) => (
            <Card {...prize} key={index} />
          ))}
        </CardBox> */}
      </section>
    </>
  );
};

export default Cards;
