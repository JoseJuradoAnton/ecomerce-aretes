import { useState } from "react";

export default function SignupForm() {
  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div style={{ maxWidth: 400, margin: "2rem auto" }}>
      <h1>Sign up</h1>

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "1rem" }}>
          <label>
            Email
            <input type="email" placeholder="you@example.com" />
          </label>

          <div>
            <label>
              password
              <input type="password" placeholder="*****" />
            </label>
          </div>

          <button type="submit">Create account</button>
        </div>
      </form>
    </div>
  );
}
