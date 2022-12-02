import React from "react";
import Header from "../Children/Header";
import "../../assets/css/Login.css";
import Footer from "../Children/Footer";

const Login = () => {
  return (
    <div>
      <Header />
      <section className="divLogin">
        <h2>
          Viddev/<span>Login</span>
        </h2>
      </section>
      <section className="loginContainer">
        <div className="login">
          <div className="loginTitle">
            <h2>Login</h2>
            <input
              id="inputLoginMail"
              type="mail"
              placeholder="Email"
            />
            <input
              id="inputLoginPassword"
              type="password"
              placeholder="Password"
            />
          </div>
          <div className="btnLogin">
            <button id="BtnLogin" type="submit">
              Log in
            </button>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default Login;
