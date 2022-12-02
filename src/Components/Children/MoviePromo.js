import React from "react";
import "./MoviePromo.css";
import "../../assets/img/Creed.png";

const MoviePromo = () => {
  return (
    <section className="ShowMovie">
      <div className="ShowMovie_Title">
        <h2>
          INCOMING<span className="title_span">/Movie</span>
        </h2>
      </div>
      <section className="ShowMovie_Second">
        <div className="FirstSquare_Movie">
          <p>Scream 6</p>
          <p>03.10.2023</p>
        </div>
        <div className="SecondSquare_Movie">
          <p>Mario Bros : The Movie</p>
          <p>03.29.2023</p>
        </div>
        <div className="ThirdSquare_Movie">
          <p>Creed 3</p>
          <p>03.03.2023</p>
        </div>
        <div className="FourthSquare_Movie">
          <p>Indiana Jones 5</p>
          <p>06.30.2023</p>
        </div>
      </section>
    </section>
  );
};

export default MoviePromo;
