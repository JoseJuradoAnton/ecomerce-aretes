import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Auth() {
  const [mode, setMode] = useState("signup");
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const { signUp, user, logout, login } = useContext(AuthContext);

  const { register, handleSubmit } = useForm();

  function onSubmit(data) {
    console.log("formulario enviado", data);
    setError(null);
    let result;
    if (mode === "signup") {
      result = signUp(data.email, data.password);
    } else {
      result = login(data.email, data.password);
    }

    if (result.success) {
      //alert("yes ok");
      navigate("/");
    } else {
      setError(result.error);
    }

    console.log(result);
  }

  return (
    <div>
      <div className="container">
        <div className="auth-container">
          {user && <p>User logged in: {user.email}</p>}
          <button onClick={() => logout()}>Logout</button>
          <h1 className="page-title">
            {mode === "signup" ? "Sing Up" : "Login"}
          </h1>
          <form className="auth-form" onSubmit={handleSubmit(onSubmit)}>
            {error && <div className="error-message">{error}</div>}
            <div className="form-group">
              <label className="form-label" htmlFor="email">
                Email
              </label>
              <input
                className="form-input"
                type="email"
                id="email"
                {...register("email", { required: true })}
              />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="password">
                Password
              </label>
              <input
                className="form-input"
                type="password"
                id="password"
                {...register("password", { required: true })}
              />
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
