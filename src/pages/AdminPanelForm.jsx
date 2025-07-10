import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './AdminPanelForm.css';

export default function AdminPanelForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: "admin", 
  });

  const navigate = useNavigate();

const handleLogin = async (e) => {
  e.preventDefault();

  try {
    const res = await fetch("http://localhost:5000/api/team/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: formData.email,
        password: formData.password,
      }),
    });

    const result = await res.json();

    if (res.ok) {
      if (result.user.role === formData.role) {
        alert("Login successful as " + result.user.role);
        navigate("/dashboard"); // ✅ Proceed to dashboard
      } else {
        alert("❌ You selected '" + formData.role + "', but your role is '" + result.user.role + "'");
      }
    } else {
      alert("❌ " + (result.message || "Invalid credentials"));
    }
  } catch (err) {
    console.error("Login error:", err);
    alert("🚨 Server error. Try again later.");
  }
};



  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="container login-wrapper">
      <div className="row">
        <img src="image.webp" alt="Admin Banner" className="col-md-6 styled-image" />

        <div className="col-md-6 login-container">
          <h2>Login</h2>
          <form onSubmit={handleLogin}>
            <label htmlFor="email">Email</label>
            <input
              className="inputBox"
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="email"
              required
            />

            <label htmlFor="password">Password</label>
            <input
              className="inputBox"
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="password"
              required
            />

            <label htmlFor="role">Select Role</label>
            <select
              className="inputBox"
              id="role"
              name="role"
              value={formData.role}
              onChange={handleChange}
            >
              <option value="">-- Choose Role --</option>
              <option value="admin">Admin</option>
              <option value="employee">Employee</option>
            </select>


            <button type="submit" className="login-btn">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}
