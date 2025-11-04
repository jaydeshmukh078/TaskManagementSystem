import axios from "axios";
import { useState } from "react";
import "./CreateUser.css"; // Import external CSS file

const CreateUser = () => {
  const [input, setInput] = useState({});

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({ ...prev, [name]: value }));
    console.log(input);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const api = `${import.meta.env.VITE_BACKEND_URL}/admin/usercreate`;
      const response = await axios.post(api, input);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="create-user-container">
      <h2>Create New User</h2>

      <div className="form-group">
        <label>Employee Name</label>
        <input
          type="text"
          name="empname"
          placeholder="Enter employee name"
          onChange={handleInput}
        />
      </div>

      <div className="form-group">
        <label>Employee Email</label>
        <input
          type="email"
          name="empemail"
          placeholder="Enter employee email"
          onChange={handleInput}
        />
      </div>

      <div className="form-group">
        <label>Designation</label>
        <select name="designation" onChange={handleInput}>
          <option value="">Select designation</option>
          <option value="Programmer">Programmer</option>
          <option value="Tester">Tester</option>
          <option value="Designer">Designer</option>
          <option value="DB Designer">Data Base Designer</option>
          <option value="Analyst">Analyst</option>
        </select>
      </div>

      <button className="submit-btn" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default CreateUser;
