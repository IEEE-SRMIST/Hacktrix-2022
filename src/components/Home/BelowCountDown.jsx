import React from 'react';
import DiscordIcon from '../../assets/svg/discord.svg';
import styled from 'styled-components';

const Atag = styled.a`
  text-decoration: none;
  margin-top: 10px;
`;

const BelowCountDown = () => {
  return (
    <Atag href="https://discord.gg/cQwSKeFsQA" target="_blank">
      <img src={DiscordIcon} alt="discordicon" height="30" width="30"></img>
    </Atag>
  );
};

export default BelowCountDown;
