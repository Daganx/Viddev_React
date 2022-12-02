import React, { useState } from "react";
import Modal from "./Modal";
import "./BannerPromo.css";

const BannerPromo = () => {

  const [show, setShow] = useState(false)

  return (
    <section className="BannerPromo">
      <div className="BannerContainer">
          <h2 className="btnModal" onClick={() => setShow(true)}>Spirited Aways</h2>
          <Modal show={show} setShow={setShow}></Modal>
        <div className="BannerText">
          <p>
            Tale of the fanciful adventures of a ten-year-old girl named
            Chihiro, who discovers a secret world when she and her family get
            lost and venture through a hillside tunnel. When her parents undergo
            a mysterious transformation, Chihiro must fend for herself as she
            encounters strange spirits, assorted creatures and a grumpy
            sorceress who seeks to prevent her from returning to the human
            world.
          </p>
        </div>
        <div className="BannerGenre">
          <p>Anime</p>
          <p>Aventure</p>
          <p>Fantasy</p>
        </div>
      </div>
    </section>
  );
};

export default BannerPromo;
