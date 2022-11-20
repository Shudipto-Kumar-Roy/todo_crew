import React, { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { loginUser } from "../API";
import "./Login.css";
const Login = () => {
  const { org } = useParams();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email && !password) {
      alert("Please fill the form");
    } else {
      const res = await loginUser(email, password); // api call
      if (res && res.status === 200) {
        alert(res.data.message);
        setEmail("");
        setPassword("");
        navigate("/todo");
      }
    }
  };
  return (
    <div className="login_container">
      <h1>Welcome to {org} Login Page</h1>
      <form className="login_form" onSubmit={handleLogin}>
        <div className="login_group">
          <label htmlFor="">Email</label>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className="login_group">
          <label htmlFor="">Password</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <div className="login_group">
          <Link to={`/register`}>
            <h3>New to the Organiation! Register.</h3>
          </Link>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
