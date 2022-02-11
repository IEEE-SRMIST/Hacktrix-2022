import styled from "styled-components";
import topDegign from '../../assets/image/ScheduleTop.png'
import bottomDegign from '../../assets/image/ScheduleBottom.png'

export const ScheduleWrapper = styled.div`
    position: relative;
    min-height: 100vh;
    width: 100vw;
    // padding: 10% 20%;
    background: #040309;
    display: flex;
    justify-content: center;
    // align-items: center;
`
export const BottomDegign = styled.div`
    position: absolute;
    right: 0;
    bottom: 2%;
    width: 500px;
    height: 420px;
    z-imdex: 10;
    // transform: matrix(0.88, 0.32, -0.56, 0.93, 0, 0);
    background-image: url(${bottomDegign});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

`
export const TopDesign = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    width: 600px;
    height: 420px;
    background-image: url(${topDegign});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    // transform: rotate(25.31deg);
`
export const Wrapper = styled.div`
    display: flex;
    // justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 90%;
`
export const Heading = styled.div`
    width: 417px;
    height: 64px;
    
    font-family: Bios;
    font-style: normal;
    font-weight: normal;
    font-size: 56px;
    line-height: 64px;
    letter-spacing: 0.3em;

    color: #FFFFFF;

    text-shadow: 0px 0px 12px #9226FF;

    margin-top: 10vh;
    margin-bottom: 10vh;
`
export const Hex =  styled.div`
    background: #8946A6;
    position: relative;
  width: 0.8em;
  height: 1.4em;
  border-radius: 0.1em/0.05em;
  transition: opacity .5s;
  font-size: 48px;
  line-height: 62px;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: rotate(90deg);

    :before {
        position: absolute;
        width: inherit;
        height: inherit;
        border-radius: inherit;
        background: inherit;
        content: '';
        -webkit-transform: rotate(-60deg); 
        -ms-transform: rotate(-60deg);  
        transform: rotate(-60deg);
    }
    :after {
        position: absolute;
        width: inherit;
        height: inherit;
        border-radius: inherit;
        background: inherit;
        content: '';
        -webkit-transform: rotate(60deg); 
        -ms-transform: rotate(60deg);  
        transform: rotate(60deg);
      }

`
export const HexText = styled.div`
    font-family: Chakra Petch;
    font-style: normal;
    font-weight: normal;
    font-size: 48px;
    line-height: 62px;
    color: #FFFFFF;
    z-index:20;
    transform: rotate(-90deg);
`
export const Text = styled.div`
    text-align: ${props=>props.align};
    font-family: Gothic A1;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 45px;
    letter-spacing: 0.1em;
    width: 39%;
    color: #D898FF;
    padding-left:${props=>props.ml?props.ml:0}px;
    padding-right:${props=>props.mr?props.mr:0}px;
`
export const Item = styled.div`
    width: 100%;
    min-height: 140px;
    display: flex;
    justify-content: ${props=>props.justifyContent};
    align-items: center;
    
`
export const Digonal = styled.div`
border: 2px dashed #FFFFFF;
transform: ${props=>props.direction?
            `rotate(146.98deg)`:
            `matrix(0.84, 0.54, 0.54, -0.84, 0, 0)`};
width: 16.4%;
`