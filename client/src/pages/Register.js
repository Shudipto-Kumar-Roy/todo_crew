import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../API";
const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [org, setOrg] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const organizations = ["CREW", "Weero", "Weepoka", "BTL", "Circle"];

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!name && !org && !email && !password) {
      alert("Please fill the form");
    } else {
      const res = await registerUser(name, org, email, password); // api call
      if (res && res.status === 201) {
        alert(res.data.message);
        setName("");
        setOrg("");
        setEmail("");
        setPassword("");
        navigate("/todo");
      }
    }
  };
  return (
    <div className="login_container">
      <h1>Register A New User</h1>
      <form className="login_form" onSubmit={handleRegister}>
        <div className="login_group">
          <label htmlFor="">Name</label>
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>
        <div className="login_group">
          <label htmlFor="">Organization</label>
          <select value={org} onChange={(e) => setOrg(e.target.value)}>
            <option value="">Choose</option>
            {organizations &&
              organizations.map((organization, index) => {
                return (
                  <option key={index} value={organization}>
                    {organization}
                  </option>
                );
              })}
          </select>
        </div>
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
          <Link to={`/`}>
            <h3>Already Registerd! Login.</h3>
          </Link>
          <button type="submit">Register</button>
        </div>
      </form>
    </div>
  );
};

export default Register;
