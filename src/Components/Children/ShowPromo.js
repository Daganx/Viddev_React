import React from "react";
import "./ShowPromo.css";
import "../../assets/img/fSociety.png";

const ShowPromo = () => {
  return (
    <section className="ShowPromo">
      <div className="ShowPromo_Title">
        <h2>
          INCOMING<span className="title_span">/Serie</span>
        </h2>
      </div>
      <section className="ShowPromo_Second">
        <div className="FirstSquare">
          <div className="FirstSquare_text">
            <p className="MrRobot_title">Mr. Robot</p>
            <div className="FirstSquare_info">
              <p>Available in January 2023 !</p>
              <p>Watch Trailer Now :</p>
            </div>
          </div>
        </div>
        <div className="SecondSquare">
          <iframe
            src="https://www.youtube.com/embed/ayW2SS4VmGw?vq=hd1080&modestbranding=1&cc_load_policy=1&iv_load_policy=3&color=white&controls=0"
            width="100%"
            height="100%"
            title="A YouTube video"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>
      </section>
    </section>
  );
};

export default ShowPromo;
