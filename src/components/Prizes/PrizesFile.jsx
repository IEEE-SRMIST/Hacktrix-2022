import React from "react";
import Prizes from "./Prizes";
import Cards from "./Cards";
import LandingBackground from "../../assets/img/landingBg.png";
const PrizesFile = () => {
  return (
    <div
      style={{
        backgroundPosition: "center",
        paddingTop: "20px",
      }}
      id="Prizes"
    >
      <Prizes />
      {/* <Cards /> */}
    </div>
  );
};

export default PrizesFile;
