import React from "react";
import "./Login.css";
import { accessUrl } from "./spotify";

function Login() {
  return (
    <div className="login">
      <img
        src="immages.jpg"
        alt=""
      />
      <a href={accessUrl}>LOGIN TO SPOTIFY</a>
    </div>
  );
}

export default Login;
