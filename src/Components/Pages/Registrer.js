import React from "react";
import Footer from "../Children/Footer";
import Header from "../Children/Header";

const Registrer = () => {
  return (
    <div>
      <div>
        <Header />
        <section className="divLogin">
          <h2>
            Viddev/<span>Register</span>
          </h2>
        </section>
        <section className="loginContainer">
          <div className="login">
            <div className="loginTitle">
              <h2>Register</h2>
              <input type="mail" placeholder="Email" />
              <input type="password" placeholder="Password" />
            </div>
            <div className="btnLogin">
              <button type="submit">Register</button>
            </div>
          </div>
        </section>
      </div>
      <Footer/>
    </div>
  );
};

export default Registrer;
