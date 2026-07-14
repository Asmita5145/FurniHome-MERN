import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import PageTitle from "../components/PageTitle";
import Breadcrumb from "../components/Breadcrumb";

import "../css/Login.css";

function Login() {

  const navigate = useNavigate();

  const { login } = useContext(AuthContext);

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  async function handleLogin(e) {

    e.preventDefault();

    const result = await login(email, password);

    if (!result.success) {

      setError(result.message);

      return;

    }

    navigate("/");

  }

  return (
  <>
    <PageTitle title="Login" />

    <Breadcrumb current="Login" />

    <section className="login-page">

      <div className="login-container">

        <div className="login-left">

          <h1>Welcome Back 👋</h1>

          <p>

            Login to continue shopping with FurniHome and
            access your wishlist, cart, and orders.

          </p>

        </div>

        <div className="login-right">

          <h2>Login</h2>

          <form onSubmit={handleLogin}>

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
              placeholder="Enter your password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              required
            />

            {error && (
              <p className="error">{error}</p>
            )}

            <button type="submit">
              Login
            </button>

          </form>

          <p className="register-link">

            Don't have an account?

            <Link to="/register">

              Register

            </Link>

          </p>

        </div>

      </div>

    </section>
  </>
  );

}

export default Login;