import React from "react";
import Prizes from "./Prizes";
import Cards from "./Cards";
import LandingBackground from "../../assets/img/landingBg.png";
const PrizesFile = () => {
  return (
    <div
    style={{
      backgroundImage: `url(${LandingBackground})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundAttachment: "fixed",
      backgroundSize: "cover",
    }}
      id="Prizes"
    >
      <Prizes />
      <Cards /> 
    </div>
  );
};

export default PrizesFile;
