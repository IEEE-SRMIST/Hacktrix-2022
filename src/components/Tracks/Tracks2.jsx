import React from "react";
import "./track.css";

const imageURL = "./img/icons";

const Tracks2 = () => {
  const track_list = [
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
      title: "Matrix (open track)",
      content:
        "Let loose your imagination come up with a unique solution to make the world a better place.",
    },
  ];

  return (
    <section>
      <div className="track" id="tracks">
        <div className="container">
          <div className="track-title">Tracks</div>
          <div className="tracks">
            <div className="row justify-content-evenly w-100">
              {track_list.slice(0, 3).map((item, index) => {
                return (
                  <div
                    key={index}
                    className="track-container col-20 col-md-4 col-lg-4 text-center px-3 py-1"
                  >
                    <div className="track-item">
                      <img
                        alt="some"
                        src={item.src}
                        className="track-img"
                        width="90"
                      />
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
    </section>
  );
};

export default Tracks2;
