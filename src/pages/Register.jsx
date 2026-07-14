import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import PageTitle from "../components/PageTitle";
import Breadcrumb from "../components/Breadcrumb";
import toast from "react-hot-toast";

import "../css/Register.css";

function Register() {

  const navigate = useNavigate();

  const { register } = useContext(AuthContext);

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [confirmPassword, setConfirmPassword] = useState("");

  const [error, setError] = useState("");

  async function handleRegister(e) {

    e.preventDefault();

    if (password !== confirmPassword) {

      setError("Passwords do not match.");

      return;

    }

    const result = await register(
      name,
      email,
      password
    );

    if (!result.success) {

      setError(result.message);

      return;

    }

    toast.success("Account created successfully!");

    navigate("/login");

  }

  return (
  <>
    <PageTitle title="Register" />

    <Breadcrumb current="Register" />
    
    <section className="register-page">

      <div className="register-container">

        <div className="register-left">

          <h1>Create Account</h1>

          <p>

            Join FurniHome and start shopping
            premium furniture for your dream home.

          </p>

        </div>

        <div className="register-right">

          <h2>Register</h2>

          <form onSubmit={handleRegister}>

            <label>Full Name</label>

            <input
              type="text"
              placeholder="Enter your full name"
              value={name}
              onChange={(e)=>setName(e.target.value)}
              required
            />

            <label>Email</label>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              required
            />

            <label>Password</label>

            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              required
            />

            <label>Confirm Password</label>

            <input
              type="password"
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={(e)=>setConfirmPassword(e.target.value)}
              required
            />

            {error && (
              <p className="error">{error}</p>
            )}

            <button type="submit">
              Create Account
            </button>

          </form>

          <p className="login-link">

            Already have an account?

            <Link to="/login">
              Login
            </Link>

          </p>

        </div>

      </div>

    </section>
  </>
  );

}

export default Register;