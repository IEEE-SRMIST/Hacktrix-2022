import React from 'react';
import Marquee from 'react-fast-marquee';
import GoldData from './Golddata';
import SilverData from './Silverdata';
import BronzeData from './Bronzedata';
import styled from 'styled-components';

const MarqueeWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;
  margin-top: 25px;
`;
const ImageTag = styled.img`
  height: 100px;
  width: auto;
  margin: 0 2rem;
  @media (max-width: 768px) {
    height: 35px;
    margin: 0 1rem;
  }
`;
const Heading = styled.h2`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
`;

const MarqueeR = () => {
  return (
    <>
      {/* gold sponsors */}
      <Heading>Gold Sponsors</Heading>
      <MarqueeWrapper>
        <Marquee speed="90" pauseOnHover={true} gradient={false}>
          <div>
            {GoldData.map((client, i) => {
              return (
                <a
                  key={i}
                  href={client.websiteLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  <ImageTag src={client.logo} alt="" />
                </a>
              );
            })}
          </div>
        </Marquee>
      </MarqueeWrapper>
      {/* silver marquee */}
      <Heading>Silver Sponsors</Heading>
      <MarqueeWrapper>
        <Marquee speed="90" pauseOnHover={true} gradient={false}>
          <div>
            {SilverData.map((client, i) => {
              return (
                <a key={i} href={client.websiteLink}>
                  <ImageTag src={client.logo} alt="" />
                </a>
              );
            })}
          </div>
        </Marquee>
      </MarqueeWrapper>
      {/* Bronze sponsors */}
      <Heading>Bronze Sponsors</Heading>
      <MarqueeWrapper>
        <Marquee speed="90" pauseOnHover={true} gradient={false}>
          <div>
            {BronzeData.map((client, i) => {
              return (
                <a key={i} href={client.websiteLink}>
                  <ImageTag src={client.logo} alt="" />
                </a>
              );
            })}
          </div>
        </Marquee>
      </MarqueeWrapper>
      {/* end of bronze */}
    </>
  );
};

export default MarqueeR;
