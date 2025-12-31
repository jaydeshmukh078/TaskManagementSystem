import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../css/SignUp.css";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [usertype, setUserType] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!usertype) return alert("Please select user type");

    setLoading(true);
    try {
      const api =
        usertype === "admin"
          ? `${import.meta.env.VITE_BACKEND_URL}/admin/login`
          : `${import.meta.env.VITE_BACKEND_URL}/employee/login`;

      const response = await axios.post(api, { email, password });
      toast.success(response.data.msg || "Login Successful!", { autoClose: 2000 });

      if (usertype === "admin") {
        localStorage.setItem("adminname", response.data.Admin.name);
        localStorage.setItem("adminemail", response.data.Admin.email);
        navigate("/admin-dashboard");
      } else {
        localStorage.setItem("empname", response.data.employee.name);
        localStorage.setItem("empemail", response.data.employee.email);
        localStorage.setItem("empid", response.data.employee._id);
        localStorage.setItem("empdesignation", response.data.employee.designation);
        navigate("/emp-dashboard");
      }
    } catch (error) {
      alert(error.response?.data?.msg || "Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signup-page">
      <div className="signup-container">
        {/* Left Section */}
        <div className="signup-info">
          <h1>Welcome to <span>TaskManagement</span></h1>
          <p>
            Efficiently manage your tasks and collaborate with your team all in one place.
            Ensure deadlines are met and productivity soars. A better way to work together. 
            <br /> Let’s make productivity effortless.
          </p>
        </div>

        {/* Right Section */}
        <div className="signup-form-box">
          <h2>Sign In</h2>
          <p className="subtitle">Access your dashboard and manage tasks easily</p>

          <form onSubmit={handleSubmit} className="signup-form">
            <div className="form-group">
              <label htmlFor="usertype">User Type</label>
              <select 
                id="usertype"
                value={usertype}
                onChange={(e) => setUserType(e.target.value)}
                required
              >
                <option value="">Select User Type</option>
                <option value="employee">Employee</option>
                <option value="admin">Admin</option>
              </select>
            </div>

            <div className="form-group">
              <label>Email Address</label>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <div className="password-box">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  className="toggle-btn"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            <button type="submit" className="submit-btn" disabled={loading}>
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
