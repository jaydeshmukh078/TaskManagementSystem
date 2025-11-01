import { useState } from 'react';
import axios from "axios";

const Home = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [usertype, setUserType] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (usertype == "admin") {
      try {

        let api = `${import.meta.env.VITE_BACKEND_URL}/admin/login`;
        const response = await axios.post(api, { email: email, password: password });
        console.log(response);
        alert(response.data.msg);
      } catch (error) {

        console.log(error);
        alert(error.response.data.msg);
      }
    }
    else {
      alert("Please select user type as Admin");
    }
  }

  return (
    <>
      <h1 align="center"> User Login </h1>
      <div className="login-form" style={{ margin: 'auto', width: '400px' }}>
        <div className="form-group">
          <label htmlFor="formBasicEmail">Email address</label>
          <input
            type="email"
            id="formBasicEmail"
            name="email"
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
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label htmlFor="userTypeSelect">Select User</label>
          <select
            id="userTypeSelect"
            name="usertype"
            value={usertype}
            onChange={(e) => setUserType(e.target.value)}
            className="form-control"
            aria-label="Select user type"
          >
            <option value="">select user type</option>
            <option value="employee">Employee</option>
            <option value="admin">Admin</option>
          </select>
        </div>

        <button type="submit" className="btn-primary" onClick={handleSubmit}>
          Login
        </button>
      </div>
    </>
  )
}
export default Home;