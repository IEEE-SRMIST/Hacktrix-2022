import React from "react";
import styled from "styled-components";
import polyblue from "../../assets/img/polyblue.png";
import polygold from "../../assets/img/polygold.png";
import polypurple from "../../assets/img/polypurple.png";

const Ellipse3 = styled.div`
	/* blue */
	position: relative;
	/* bottom:30%; */
	width: 196px;
	height: 196px;
	margin: 0 auto;
	background-color: #0c0e11;
	border: 2px solid #0098fa;
	border-radius: 50%;
	box-sizing: border-box;
	box-shadow: 0px 0px 28px #0098fa;
	/* @media (max-width: 768px) {
      display:flex;
      flex-direction:column;
      
      
    } */
`;
const EllipseB = styled.div`
	/* position: absolute; */
	position: absolute;
	top: 90%;
	left: 40%;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 36px;
	height: 36px;
	/* z-index: 1; */
	margin: auto;
	background-color: #0098fa;
	border-radius: 50%;
	/* @media (max-width: 768px) {
      height:5px;
      width:5px; 
    } */
`;
const EllipseG = styled.div`
	position: absolute;
	top: 90%;
	left: 40%;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 36px;
	height: 36px;
	/* z-index: 1; */
	margin: auto;
	background-color: #d7a31a;
	border-radius: 50%;
`;
const EllipseP = styled.div`
	/* position: absolute; */

	position: absolute;
	top: 90%;
	left: 40%;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 36px;
	height: 36px;
	/* z-index: 1; */
	margin: auto;
	background-color: #9a2ed1;
	border-radius: 50%;
`;
const Ellipse2 = styled.div`
	/* Ellipse 2 */
	/* Gold */
	position: relative;
	/* bottom:30%; */
	width: 196px;
	height: 196px;
	margin: 0 auto;
	background-color: #0c0e11;
	border: 2px solid #d7a31a;
	border-radius: 50%;
	box-sizing: border-box;
	box-shadow: 0px 0px 28px #d7a31a;
	/* @media (max-width: 768px) {
      display:flex;
      align-items:center;
      justify-content:center;
    } */
`;

const Ellipse1 = styled.div`
	/* purple */
	position: relative;
	/* bottom:30%; */
	width: 196px;
	height: 196px;
	margin: 0 auto;
	background-color: #0c0e11;
	border: 2px solid #9a2ed1;
	border-radius: 50%;
	box-sizing: border-box;
	box-shadow: 0px 0px 28px #9a2ed1;
	/* @media (max-width: 768px) {
      display:flex;
      align-items:center;
      justify-content:center;
      
    } */
`;
const Prizetext = styled.div`
	display: flex;
	margin: 80px;
	/* z-index: 9; */
	color: #ffffff;
	@media (max-width: 768px) {
		font-size: 20px;
	}
`;
const PrizeWrapper = styled.main`
	width: 60%;
	height: 100%;
	margin: 5px auto;
	padding: 30px 0;
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

const Holder = styled.div`
	/* margin:auto; */
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	margin: 0 20px;
	/* @media (max-width: 768px) {
      display:flex;
      align-items:center;
      justify-content:center;
      
    } */
`;
const Goldholder = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	margin: 0 20px;
	padding-bottom: 100px;
	@media (max-width: 768px) {
		padding-bottom: 0;
	}
`;
const Message = styled.p`
	text-align: center;
	font-size: 16pt;
	font-weight: 500;
	color: ${({ theme }) => theme.text};
	margin: 20px 0 50px 0;
`;

export default function Prizes() {
	return (
		<>
			<Message>Watch out to grab some really cool prizes!</Message>
			{/* <PrizeWrapper>
        <Holder>
          <img src={polypurple} id="purple" />
          <Ellipse1>
            <Prizetext>better</Prizetext>
            <EllipseP>
              <Prizetext>2</Prizetext>
            </EllipseP>
          </Ellipse1>
          <Prizetext />
        </Holder>

        <Goldholder>
          <img src={polygold} id="gold" />
          <Ellipse2>
            <Prizetext>The best!</Prizetext>
            <EllipseG>
              <Prizetext>1</Prizetext>
            </EllipseG>
          </Ellipse2>
          <Prizetext />
        </Goldholder>

        <Holder>
          <img src={polyblue} id="blue" />
          <Ellipse3>
            <Prizetext>A good one!</Prizetext>
            <EllipseB>
              <Prizetext>3</Prizetext>
            </EllipseB>
          </Ellipse3>
          <Prizetext />
        </Holder>
      </PrizeWrapper> */}
		</>
	);
}
