import React from "react";
import "./BannerPromo.css";

const Modal = ({ show, setShow }) => {
  const content = show && (
    <div className="modal">
      <button
        className="modalClose"
        type="button"
        onClick={() => setShow(false)}
      >
        X
      </button>
      <div className="modalBody">
        <div><iframe width="560" height="315" src="https://www.youtube.com/embed/ByXuk9QqQkk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen='true'></iframe></div>
      </div>
    </div>
  );

  return content;
};

export default Modal;
