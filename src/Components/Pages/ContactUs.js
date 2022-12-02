import React from "react";
import Header from "../Children/Header";
import "../../assets/css/ContactUs.css";
import Footer from "../Children/Footer";

const Contact = () => {
  return (
    <div>
      <Header />
      <section className="formContainer">
        <form id="formContact" action="">
          <div id="contactImage">
            <img
              id="contactMail"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Circle-icons-mail.svg/2048px-Circle-icons-mail.svg.png"
              alt=""
            />
            <h2>CONTACT US :D</h2>
          </div>
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your E-mail" />
          <input type="text" name="" id="" placeholder="Message" />
          <button type="submit" id="btnContact">
            SEND
          </button>
        </form>
      </section>
      <Footer/>
    </div>
  );
};

export default Contact;
