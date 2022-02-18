import React from "react";
import "./track.css";
import Slide from "react-reveal/Slide";

const Tracks = () => {
  const track_list = [
    {
      src: "./img/icons/healthcare.svg",
      title: "Healthcare",
      content:
        "Usher the world of medicine and healthcare forward with curious and inspired solutions.",
    },
    {
      src: "./img/icons/edtech.svg",
      title: "EdTech",
      content:
        "Help the field of education move from the dark ages to the golden age of technology.",
    },
    {
      src: "./img/icons/sustainability.svg",
      title: "Sustainability",
      content: "Find innovative solutions to bring relief to our planet Earth.",
    },
    {
      src: "./img/icons/fintech.svg",
      title: "FinTech",
      content:
        "Bring change to transactions and cryptocurrency with promising Blockchain and Financial solutions.",
    },
    {
      src: "./img/icons/arvr.svg",
      title: "AR/VR",
      content:
        "Bring the world of virtual reality closer to actual reality with out-of-the-box solutions.",
    },
    {
      src: "./img/icons/robotics.svg",
      title: "Robotics",
      content:
        "Connecting billions of devices with inspired solutions to the world of IoT.",
    },
    {
      src: "./img/icons/iot.svg",
      title: "IOT",
      content:
        "Connecting billions of devices with inspired solutions to the world of IoT.",
    },
    {
      src: "./img/icons/open.svg",
      title: "The Matrix",
      content:
        "In this Open Track, Let loose your imagination and come up with a unique solution to make the world a better place.",
    },
  ];

  return (
    <div className="track" id="tracks">
      <div className="container">
        <div className="track-title">Tracks</div>
        <div className="tracks">
          <div className="row justify-content-evenly w-100">
            {track_list.map((item, index) => {
              return (
                <div
                  key={index}
                  className="col-12 col-md-5 col-lg-4 text-center px-3 py-1"
                >
                  <div className="track-item">
                    <div className="parent">
                      <img
                        alt="HackTrix"
                        src={item.src}
                        className="track-img"
                      />
                    </div>
                    <div className="item-title">
                      <h2 className="tracks-title">{item.title}</h2>
                    </div>
                    <p className="track-content">{item.content}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tracks;
