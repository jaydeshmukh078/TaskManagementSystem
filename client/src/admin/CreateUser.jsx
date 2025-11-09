import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../css/CreateUser.css";

const CreateUser = () => {
  const [input, setInput] = useState({
    empname: "", 
    empemail: "",
    designation: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!input.empname || !input.empemail || !input.designation) {
      toast.warning("Please fill all fields!", {
        position: "bottom-right",
        theme: "light",
      });
      return;
    }

    try {
      const api = `${import.meta.env.VITE_BACKEND_URL}/admin/usercreate`;
      const response = await axios.post(api, input);
      console.log(response.data);

      toast.success("✅ User created successfully!", {
        position: "bottom-right",
        theme: "light",
        autoClose: 3000,
      });

      setInput({ empname: "", empemail: "", designation: "" });
    } catch (error) {
      console.error(error);
      toast.error("❌ Something went wrong!", {
        position: "bottom-right",
        theme: "light",
      });
    }
  };

  return (
    <div className="createuser-container">
      <div className="createuser-box">
        <div className="welcome-text">
          <h1>👋 Welcome, Admin!</h1>
          <p>
            Manage your team efficiently by adding new employees to your Task Management System.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="createuser-form">
          <div className="form-group">
            <label>Employee Name</label>
            <input
              type="text"
              name="empname"
              value={input.empname}
              onChange={handleInput}
              placeholder="Enter full name"
              required
            />
          </div>

          <div className="form-group">
            <label>Employee Email</label>
            <input
              type="email"
              name="empemail"
              value={input.empemail}
              onChange={handleInput}
              placeholder="Enter email address"
              required
            />
          </div>

          <div className="form-group">
            <label>Designation</label>
            <select
              name="designation"
              value={input.designation}
              onChange={handleInput}
              required
            >
              <option value="">Select designation</option>
              <option value="Programmer">Programmer</option>
              <option value="Tester">Tester</option>
              <option value="Designer">Designer</option>
              <option value="DB Designer">Database Designer</option>
              <option value="Analyst">Analyst</option>
            </select>
          </div>

          <button type="submit" className="submit-btn">
            Create User
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateUser;
