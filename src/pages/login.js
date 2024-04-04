import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
//Actions
//Images
import { SiteLogo } from "../assets/pathConstant";

const Login = () => {
  const dispatch = useDispatch();
  const [inputText, setInputText] = useState();
  const [password, setPassword] = useState();

  const loginHandler = async (e) => {};
  return (
    <section className="login__section section">
      <div className="container">
        <div className="form__container">
          <form>
            <img src={SiteLogo} alt="" className="login__logo" />
            <input
              type="text"
              name="email"
              id=""
              placeholder="E-mail"
              onChange={(e) => setInputText(e.target.value)}
            />
            <input
              type="password"
              name="password"
              id=""
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Link to="forgot-password">Forgot Password?</Link>
            <button
              onClick={(e) => {
                loginHandler(e);
              }}
              className="btn"
            >
              Login
            </button>
            <div className="form__footer">
              <p>
                Don't have an account <Link to="signup">Sign up</Link>
              </p>
              <p>
                By signing in to your account, you agree to JOBSTER Terms of
                Services and consent to our Cookie Policy and Privacy Policy.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
