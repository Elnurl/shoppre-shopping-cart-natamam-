import React from "react";
import "./login.css";
import { Link } from "react-router-dom";
export default function Login() {
  return (
    <div className="Auth-form-container">
      {/* loginpage
      <ul>
        <li>
          {" "}
        
        </li>

        <li>
          
        </li>
      </ul> */}
      <div className="logo_side">
        <h1>Shopper. </h1>
      </div>
      <div className="login_side">
        <div className="login-container">
          <form>
            <div className="input-container">
              <h2>Sign In</h2>
              <fieldset className="mail">
                {/* <label>Username or Email Address </label> */}
                <input
                  type="text"
                  name="uname"
                  required
                  placeholder="Email Address *"
                />
              </fieldset>
              <fieldset className="pasword">
                {/* <label>Password </label> */}
                <input
                  type="password"
                  name="pass"
                  required
                  placeholder="Password *"
                />
              </fieldset>
            </div>
            <div className="checkboxx">
              <div className="check_inp">
                {" "}
                <input type="checkbox" />
                <p>Remember me</p>
              </div>
              <a href="/">Forgot password?</a>
            </div>
            <div className="button_container">
              <input className="button" type="submit" value="Sing In" />
            </div>
            <div className="header">
              Not a member?<Link to="/register"> Sign up now</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
