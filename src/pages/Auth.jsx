import React, { useState } from "react";
import { useForm } from "react-hook-form";
useForm;

export default function Auth() {
  const [mode, setMode] = useState("signup");

  return (
    <div>
      <div className="container">
        <div className="auth-container">
          <h1 className="page-title">
            {mode === "signup" ? "Sing Up" : "Login"}
          </h1>
          <form className="auth-form" action="">
            <div className="form-group">
              <label className="form-label" htmlFor="email">
                Email
              </label>
              <input className="form-input" type="email" id="email" />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="password">
                Password
              </label>
              <input className="form-input" type="password" id="password" />
              <button type="submit" className="btn btn-primary btn-large">
                {mode === "signup" ? "Sing Up" : "Login"}
              </button>
            </div>
          </form>

          <div className="auth-switch">
            {mode === "signup" ? (
              <p>
                Tiene cuenta ? {""}
                <span className="auth-link" onClick={() => setMode("login")}>
                  Login
                </span>
              </p>
            ) : (
              <p>
                {""}
                No tienes cuenta ? {""}
                <span className="auth-link" onClick={() => setMode("signup")}>
                  Registro
                </span>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
