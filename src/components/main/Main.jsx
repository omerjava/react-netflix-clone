import React from "react";
import "./Main.css";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function Main() {
  const [toggle, setToggle] = useState(false);

  const handleSubmit = () => {
    return;
  };

  return (
    <div className="main">
      <div className="top"></div>
      <div className="first-wrapper"></div>
      <div className="second-wrapper">
        <form onSubmit={handleSubmit}>
          <div className="sign-in">
            <h1>Sign In</h1>
          </div>
          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control bg-dark text-secondary border border-0 form-input"
              id="floatingInput"
              placeholder="name@example.com"
              minLength="8"
              required
            />
            <label htmlFor="floatingInput">Email or Phone number</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control bg-dark border border-0 form-input"
              id="floatingPassword"
              placeholder="Password"
              minLength='10'
              maxLength="60"
              required
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>
          <div className="formDiv1">
            <input type="submit" className="btn btn1" value="Sign In" />
          </div>
          <div className="formDiv2">
            <div>
            <input type="checkbox" className="checkbox" checked/>
            <label htmlFor="checkbox">Remember me</label>
            </div>
            <span><a className="need-help" href="https://www.netflix.com/be-en/LoginHelp"> Need help?</a></span>
          </div>
          <div className="formDiv3">
            <p className="facebook">Login with Facebook</p>
            <p>
              New to Netflix?{" "}
              <strong><a className="sign-up" href="https://www.netflix.com/be-en/"> Sign up now</a></strong>
            </p>
            <p className="reCAPTCHA">
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot.
              <span className="learn-more" onClick={() => setToggle(!toggle)}> Learn more.</span>
            </p>
            <p className={toggle ? "showTag" : "hideTag"}>
              The information collected by Google reCAPTCHA is subject to the
              Google Privacy Policy and Terms of Service, and is used for
              providing, maintaining, and improving the reCAPTCHA service and
              for general security purposes (it is not used for personalized
              advertising by Google).
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Main;
