import React, { useEffect, useState } from "react";
import "./Auth.css";
import { useNavigate } from "react-router-dom";

function Auth() {
  const [activeTab, setActiveTab] = useState(0); // State for active tab
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    cpassword: "",
  });
  const [loginformData, setLoginFormData] = useState({
    email: "",
    password: "",
  });
  let handleLoginData = (e) => {
    const { name, value } = e.target;
    setLoginFormData({ ...loginformData, [name]: value });
  };

  let loginAUser = async () => {
    try {
      let res = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: loginformData.email,
          password: loginformData.password,
        }),
      });
  
      let data = await res.json();
  
      if (!res.ok) {
        alert(data.message || "Login failed");
      } else {
        // Login successful
        alert(data.message);
  
        // Set the token in cookies
        document.cookie = `accessToken=${data.accessToken}; path=/; Secure; SameSite=Strict`;
  
        // Check if the user is admin, and navigate accordingly
        if (
          loginformData.email === "admin1@example.com" &&
          loginformData.password === "123"
        ) {
          navigate("/admin");
        } else {
          navigate("/home"); // Redirect to home if not admin
        }
      }
    } catch (error) {
      console.log("Error during login:", error);
    }
  };

  let handleLogin = (e) => {
    e.preventDefault();
    loginAUser();
  };
  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleTabChange = (tabIndex) => {
    setActiveTab(tabIndex); // Switch the active tab on click
  };
  let registernewuser = async () => {
    try {
      let res = await fetch("http://localhost:3000/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: formData.username, // Correct usage of formData
          email: formData.email,
          password: formData.password,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        alert(data.message || "Registration failed"); // Show the error message from the backend
      } else {
        setActiveTab(0);
        alert("User registered successfully");
      }
    } catch (error) {
      console.error("Error during registration:", error);
    }
  };
  let handleRegister = (e) => {
    e.preventDefault();

    if (
      formData.password === formData.cpassword &&
      formData.password !== " " &&
      formData.cpassword !== ""
    ) {
      registernewuser();
    } else {
      alert("not matched");
    }

    setFormData({
      username: "",
      email: "",
      password: "",
      cpassword: "",
    });

    // registernewuser();
  };

  return (
    <div className="auth-container">
      <div className="all">
        <h2
          className={activeTab === 0 ? "active" : ""}
          onClick={() => handleTabChange(0)}
        >
          Login
        </h2>
        <h2
          className={activeTab === 1 ? "active" : ""}
          onClick={() => handleTabChange(1)}
        >
          SignUp
        </h2>
      </div>

      <div className={`login-form ${activeTab === 0 ? "show" : "hide"}`}>
        <form onSubmit={handleLogin}>
          Email:
          <input
            type="email"
            placeholder="Your Email"
            name="email"
            value={loginformData.email}
            onChange={handleLoginData}
          />
          <br />
          Password:
          <input
            type="password"
            name="password"
            placeholder="Your Password"
            value={loginformData.password}
            onChange={handleLoginData}
          />{" "}
          <br />
          <button type="submit">Log in</button>
        </form>
      </div>

      <div className={`signup-form ${activeTab === 1 ? "show" : "hide"}`}>
        <form onSubmit={handleRegister}>
          Username:
          <input
            type="text"
            placeholder="Enter Your Username"
            name="username"
            onChange={handleInput}
            value={formData.username}
          />
          <br />
          Email:
          <input
            type="email"
            placeholder="Enter Your Email"
            name="email"
            value={formData.email}
            onChange={handleInput}
          />
          <br />
          Password:
          <input
            type="password"
            name="password"
            placeholder="Your Password"
            value={formData.password}
            onChange={handleInput}
          />{" "}
          <br />
          Confirm Password:
          <input
            type="password"
            name="cpassword"
            placeholder="Confirm Password"
            value={formData.cpassword}
            onChange={handleInput}
          />{" "}
          <br />
          <button>Sign Up</button>
        </form>
      </div>
    </div>
  );
}

export default Auth;
