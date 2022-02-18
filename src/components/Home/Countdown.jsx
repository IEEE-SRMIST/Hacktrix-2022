import React from "react";
import styled from "styled-components";
import Timer from "react-countdown";

const Container = styled.div`
  width: 100%;
  font-family: "Bios";
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5em 1em;
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(0px);
  -webkit-backdrop-filter: blur(0px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  text-transform: uppercase;
  gap: 1em;
  border-radius: 8px;
  @media (max-width: 800px) {
    font-size: 12px;
    display: block;
  }

  * {
    font-family: "Bios";
  }
`;

const EventDate = styled.div`
  width: 20ch;
  @media (max-width: 800px) {
    width: 100%;
    text-align: center;
    font-size: 1.2rem;
  }
  @media (max-width: 425px) {
    width: 100%;
    text-align: center;
    font-size: 1rem;
  }
`;

const CountdownOver = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75em;
  font-size: 2rem;
`;

const TimeLeft = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75em;
`;

const Time = styled.span`
  font-size: 1.6em;
  padding: 0;
  span {
    font-size: 0.8rem;
    vertical-align: text-top;
  }
  @media (max-width: 425px) {
    font-size: 1em;
    span{
      font-size: 0.4rem;
    }
  }
`;

// Renderer callback with condition
const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return <CountdownOver>Let the Game Begin!</CountdownOver>;
  } else {
    // Render a countdown
    return (
      <TimeLeft>
        <Time>
          {days}
          <span>days</span>
        </Time>
        <Time>
          {hours}
          <span>hours</span>
        </Time>
        <Time>
          {minutes}
          <span>minutes</span>
        </Time>
        <Time>
          {seconds}
          <span>seconds</span>
        </Time>
      </TimeLeft>
    );
  }
};

function Countdown() {
  const endCountdown = new Date("2022-04-01");
  return (
    <Container>
      <EventDate>Prepare to Rumble:</EventDate>
      <Timer date={endCountdown} renderer={renderer} />
    </Container>
  );
}

export default Countdown;
