import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../css/Home.css";

const Home = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [usertype, setUsertType] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!usertype) {
      alert("Please select user type");
      return;
    }

    setLoading(true);

    if (usertype === "admin") {
      try {
        let api = `${import.meta.env.VITE_BACKEND_URL}/admin/login`;
        const response = await axios.post(api, { email: email, password: password });
        console.log(response);
        localStorage.setItem("adminname", response.data.Admin.name);
        localStorage.setItem("adminemail", response.data.Admin.email);
        toast.success(response.data.msg, { autoClose: 3000 });
        navigate("/admin-dashboard");
      } catch (error) {
        console.log(error);
        alert(error.response?.data?.msg || "Login failed. Please try again.");
      } finally {
        setLoading(false);
      }
    } else {
      try {
        let api = `${import.meta.env.VITE_BACKEND_URL}/employee/login`;
        const response = await axios.post(api, { email: email, password: password });
        console.log(response.data.employee.name);
        localStorage.setItem("empname", response.data.employee.name);
        localStorage.setItem("empemail", response.data.employee.email);
        localStorage.setItem("empdesignation", response.data.employee.designation);
        localStorage.setItem("empid", response.data.employee._id);
        alert("Login successful!");
        navigate("/emp-dashboard");
      } catch (error) {
        console.log(error);
        alert(error.response?.data?.msg || "Login failed. Please try again.");
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-box">
          <div className="login-header">
            <h1>Welcome Back</h1>
            <p>Sign in to continue to your dashboard</p>
          </div>

          <form onSubmit={handleSubmit} className="login-form">
            <div className="form-group">
              <label htmlFor="usertype">User Type</label>
              <select
                id="usertype"
                name="usertype"
                className="form-control"
                value={usertype}
                onChange={(e) => setUsertType(e.target.value)}
                required
              >
                <option value="">Select User Type</option>
                <option value="employee">Employee</option>
                <option value="admin">Admin</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-control"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <div className="password-input">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  className="form-control"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  className="password-toggle-btn"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            <button type="submit" className="submit-button" disabled={loading}>
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;