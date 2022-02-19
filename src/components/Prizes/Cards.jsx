import React from "react";
import styled from "styled-components";
import LandingBackground from "../../assets/img/landingBg.png";
const CardBox = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 350px 350px 350px;
  justify-content: center;
  overflow: none;
  @media (max-width: 768px) {
    display: flex;
    margin-left: 10px;
    margin-right: 10px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
const CardContainer = styled.div`
  min-width: 300px;
  min-height: 350px;
  background: #12151b;
  box-shadow: 0px 0px 13px rgba(0, 0, 0, 0.5), inset 0px 2px 0px #d7a31a;
  border-radius: 8px;
  margin: 50px auto;
  @media (max-width: 768px) {
    margin: 20px auto;
    min-width: 250px;
    min-height: 250px;
  }
`;
const TextHolder = styled.p`
  padding: 10px;
  margin: 20px auto;
`;
const Heading = styled.h2`
  padding: 10% 0px 0px 0px;
  text-align: center;
  color: #ffffff;
  text-shadow: 0px 0px 12px #9226ff;
`;
const Cards = () => {
  return (
    <>
      <section>
        <Heading>Winner Prizes</Heading>
        <CardBox>
          <CardContainer>
            <TextHolder>Hi</TextHolder>
          </CardContainer>
          <CardContainer>
            <TextHolder>Hi</TextHolder>
          </CardContainer>
          <CardContainer>
            <TextHolder>Hi</TextHolder>
          </CardContainer>
          <CardContainer>
            <TextHolder>Hi</TextHolder>
          </CardContainer>
          <CardContainer>
            <TextHolder>Hi</TextHolder>
          </CardContainer>
          <CardContainer>
            <TextHolder>Hi</TextHolder>
          </CardContainer>
        </CardBox>
      </section>
      {/* participation starts */}
      <section>
        <Heading>Participation Prizes</Heading>
        <CardBox>
          <CardContainer>
            <TextHolder>Hi</TextHolder>
          </CardContainer>
          <CardContainer>
            <TextHolder>Hi</TextHolder>
          </CardContainer>
          <CardContainer>
            <TextHolder>Hi</TextHolder>
          </CardContainer>
          <CardContainer>
            <TextHolder>Hi</TextHolder>
          </CardContainer>
          <CardContainer>
            <TextHolder>Hi</TextHolder>
          </CardContainer>
          <CardContainer>
            <TextHolder>Hi</TextHolder>
          </CardContainer>
        </CardBox>
      </section>
    </>
  );
};

export default Cards;
