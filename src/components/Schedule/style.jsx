import styled from "styled-components";
import topDegign from '../../assets/image/ScheduleTop.png'
import bottomDegign from '../../assets/image/ScheduleBottom.png'

export const ScheduleWrapper = styled.div`
    position: relative;
    // min-height: 100vh;
    // width: 100vw;
    // padding: 10% 20%;
    background: #040309;
    display: flex;
    justify-content: center;
    // align-items: center;
`
export const BottomDegign = styled.div`
    position: absolute;
    right: 0;
    bottom: 0;
    width: 40vw;
    height: 80vh;
    z-index: 10;
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
    width: 45vw;
    height: 75vh;
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

    @media (max-width:780px){
        width: 95%;
    }
    @media (max-width:460px){
        width: 99%;
    }
`
export const Heading = styled.div`
    // width: 417px;
    // height: 64px;
    
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

    display: flex;
    justify-content: center;
    align-items: center;
    
    @media (max-width:940px){
        margin-top: 7vh;
        margin-bottom: 7vh;
        font-size: 48px;
        line-height: 56px;
    }
    
    @media (max-width:460px){
        margin-top: 7vh;
        margin-bottom: 7vh;
        font-size: 36px;
        line-height: 56px;
    }
`
export const Hex =  styled.div`
    background: #040309;
    position: relative;
  width: 0.79em;
  height: 1.36em;
  border-radius: 0.1em/0.05em;
  border: 2px solid #9A35FF;
  transition: opacity .5s;
  font-size: 42px;
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
        border-top: 2px solid #9A35FF;
        border-bottom: 2px solid #9A35FF;
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
        border-top: 2px solid #9A35FF;
        border-bottom: 2px solid #9A35FF;
      }

    @media (max-width:940px){
        font-size: 30px;
    }
    @media (max-width:780px){
        font-size: 26px;
    }
    @media (max-width:430px){
        font-size: 22px;
        border: 1px solid #9A35FF;
        :before {
        border-top: 1px solid #9A35FF;
        border-bottom: 1px solid #9A35FF;
        }
        :after {
        border-top: 1px solid #9A35FF;
        border-bottom: 1px solid #9A35FF;
        }
    }

`
export const HexText = styled.div`
    font-family: Chakra Petch;
    font-style: normal;
    font-weight: normal;
    font-size: 38px;
    line-height: 62px;
    color: #FFFFFF;
    z-index:20;
    transform: rotate(-90deg);

    @media (max-width:940px){
        font-size: 26px;
    }
    @media (max-width:780px){
        font-size: 22px;
    }
    @media (max-width:460px){
        font-size: 18px;
    }
`
export const Text = styled.div`
    text-align: ${props=>props.align};
    font-family: Gothic A1;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 1.4em;
    letter-spacing: 0.1em;
    width: 39%;
    color: #D898FF;
    padding-left:${props=>props.ml?props.ml:0}px;
    padding-right:${props=>props.mr?props.mr:0}px;


    @media (max-width:1024px){
        font-size: 18px;
        line-height: 37px;
        width:38.2%;
    }

    @media (max-width:780px){
        font-size: 16px;
        line-height: 22px;
        // letter-spacing: 0.1em;
        width:41%;
        padding-left:${props=>props.ml?17:0}px;
        padding-right:${props=>props.mr?17:0}px;
    }
    @media (max-width:460px){
        font-size: 12px;
        line-height: 22px;
        // letter-spacing: 0.1em;
        padding-left:${props=>props.ml?13:8}px;
        padding-right:${props=>props.mr?13:8}px;
        width:41%;
    }
    @media (max-width:345px){
        font-size: 12px;
        line-height: 22px;
        // letter-spacing: 0.1em;
        padding-left:${props=>props.ml?10:0}px;
        padding-right:${props=>props.mr?10:0}px;
        width:41%;
    }

`
export const Item = styled.div`
    width: 100%;
    min-height: 140px;
    display: flex;
    justify-content: ${props=>props.justifyContent};
    align-items: center;
    
    @media (max-width: 1024px){
        min-height: 122px;
    }

    @media (max-width: 940px){
        min-height: 100px;
    }

    @media (max-width: 780px){
        min-height: 68px;
    }
    @media (max-width: 320px){
        min-height: 55px;
    }
`
export const Digonal = styled.div`
    border: 1px dashed #FFFFFF;
    transform: ${props=>props.direction?
                `rotate(146.98deg)`:
                `matrix(0.84, 0.54, 0.54, -0.84, 0, 0)`};
    width: 17%;

    @media (max-width: 1024px){
        width: 17.2%;
    }
    @media (max-width: 780px){
        width: 12%;
    }
    @media (max-width: 460px){
        width: 15.2%;
    }
`