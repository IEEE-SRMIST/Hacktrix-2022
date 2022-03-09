import React from 'react';
import DiscordIcon from '../../assets/svg/Discord-Logo-White.svg';
import styled from 'styled-components';

const Atag = styled.a`
  text-decoration: none;
  margin-top: 10px;
  font-weight: 500;
  font-size: 16px;
`;
const IMG = styled.img`
  padding: 5px;
`;
const Button = styled.button`
  display: block;
  width: fit-content;
  margin: 10px auto;
  font-size: 16pt;
  font-weight: 500;
  text-decoration: none;
  padding: 0.75rem 1.25rem;
  border-radius: 0.5rem;
  background-color: #5661ec;
  border: none;
`;
const Span = styled.span`
  color: white;
`;

const BelowCountDown = () => {
  return (
    <Button>
      <Atag href="https://discord.gg/cQwSKeFsQA" target="_blank">
        <IMG src={DiscordIcon} alt="discordicon" height="40" width="40"></IMG>
        <Span>Join Hacktrix</Span>
      </Atag>
    </Button>
  );
};

export default BelowCountDown;
