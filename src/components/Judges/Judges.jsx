import React from "react";

import "../Judges/judges.css";
import styled from "styled-components";
import bg from "../../assets/overlay.png";

const JUDGES = [
  {
    name: "Cool Guy",
    image: "./img/speaker/judge1.svg",
    designation: "CEO",
    company: "echoAR",
    link: "https://www.linkedin.com/in/alongrinshpoon/",
  },
  {
    name: "Cool Guy",
    image: "./img/speaker/judge1.svg",
    designation: "CEO",
    company: "echoAR",
    link: "https://www.linkedin.com/in/alongrinshpoon/",
  },
  {
    name: "Cool Guy",
    image: "./img/speaker/judge1.svg",
    designation: "CEO",
    company: "echoAR",
    link: "https://www.linkedin.com/in/alongrinshpoon/",
  },
];

const Heading = styled.h2`
  text-align: center;
  font-size: 65px;
  color: rgba(255, 255, 255, 0.95);
  margin-bottom: 50px;
  margin-top: 20px;
  font-weight: 800;
  text-decoration-color: 2px solid #deb7f5;
  text-shadow: 0px 0px 50px #b741ff;
`;
const myStyle = {
  backgroundImage: `url(${bg})`,
  fontSize: "50px",
  height: "100%",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};

const Judges = () => {
  return (
    <div style={myStyle}>
      <Heading>Judges</Heading>
      <div className="row gx-0 py-5 justify-content-center">
        {JUDGES.map((item, index) => {
          return (
            <div className="col-12 col-lg-3 mb-15 speaker">
              <div className="speakers">
                <div className="speaker-img">
                  <img src={`${item.image}`} alt={`${item.name}`} />
                </div>
                <div className="speaker-details ">
                  <div className="speaker-name">{item.name}</div>
                  <div className="speaker-desg">
                    {item.designation}, {item.company}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Judges;
