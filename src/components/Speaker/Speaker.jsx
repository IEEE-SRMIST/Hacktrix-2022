import React from 'react';

import styled from 'styled-components';
import bg from '../../assets/overlay.png'

const Heading = styled.h2`
text-align: center;
font-size: 65px;
color: rgba(255, 255, 255, 0.95);
margin-bottom: 130px;
margin-top: 100px;
font-weight: 800;
text-decoration-color: 2px solid #deb7f5;
text-shadow: 0px 0px 50px #b741ff;
  
`;
const myStyle={
  backgroundImage:`url(${bg})`,
  height:'100vh',
  marginTop:'-70px',
  fontSize:'50px',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
};
const Speaker = () => {
  return (
    <div style={myStyle}> 
      <Heading>Speakers</Heading>
      
      
     
    </div>
  );
};

export default Speaker;