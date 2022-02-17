import React from 'react';
import Prizes from './Prizes';
import Cards from './Cards';
import BG from '../../assets/img/BG.png';
const PrizesFile = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${BG})`,
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        paddingTop: '20px',
      }}
      id='Prizes'
    >
      <Prizes />
      <Cards />
    </div>
  );
};

export default PrizesFile;
