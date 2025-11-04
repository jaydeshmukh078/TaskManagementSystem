import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [usertype, setUserType] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (usertype === "admin") {
      try {
        const api = `${import.meta.env.VITE_BACKEND_URL}/admin/login`;
        const response = await axios.post(api, { email, password });

        alert(response.data.msg || "Login successful");
        navigate("/admin-dashboard");
      } catch (error) {
        console.error("Login error:", error);
        alert(error.response?.data?.msg || "Login failed");
      }
    } else {
      alert("Please select user type");
    }
  };

  return (
    <>
      <h1 align="center">User Login</h1>
      <div className="login-form" style={{ margin: "auto", width: "400px" }}>
        <div className="form-group">
          <label htmlFor="formBasicEmail">Email address</label>
          <input
            type="email"
            id="formBasicEmail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label htmlFor="formBasicPassword">Password</label>
          <input
            type="password"
            id="formBasicPassword"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label htmlFor="userTypeSelect">Select User</label>
          <select
            id="userTypeSelect"
            value={usertype}
            onChange={(e) => setUserType(e.target.value)}
            className="form-control"
          >
            <option value="">select user type</option>
            <option value="employee">Employee</option>
            <option value="admin">Admin</option>
          </select>
        </div>

        <button type="button" className="btn-primary" onClick={handleSubmit}>
          Login
        </button>
      </div>
    </>
  );
};

export default Home;