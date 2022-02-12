import React from "react";
import styled from "styled-components";
import BG from "../../assets/img/BG.png";
const CardBox = styled.div`
  width: 100%;
  height: 100%;
  margin: 5% auto 0px auto;
  padding: 10% 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  /* grid-auto-rows: minmax(100px, auto);
  grid-auto-columns: minmax(100px, auto); */
  justify-content: center;
  overflow: none;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
const CardContainer = styled.div`
  min-width: 400px;
  min-height: 450px;
  background: #12151b;
  box-shadow: 0px 0px 13px rgba(0, 0, 0, 0.5), inset 0px 10px 0px #2ca0e2;
  border-radius: 8px;
  margin: 50px auto;
  @media (max-width: 768px) {
    margin: 20px auto;
    min-width: 300px;
    min-height: 300px;
  }
`;
const TextHolder = styled.p`
  padding: 10px;
  margin: 20px auto;
`;
const Heading = styled.h2`
  text-align: center;

  color: #ffffff;
  text-shadow: 0px 0px 12px #9226ff;
`;
const Cards = () => {
  return (
    <>
      <section
        style={{
          paddingTop: "20px",
          marginTop: "0px",
          backgroundImage: `url(${BG})`,
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      >
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
      <section
        style={{
          backgroundImage: `url(${BG})`,
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      >
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
