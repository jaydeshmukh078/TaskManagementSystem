import axios from "axios";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../css/AssignTask.css";

const AssignTask = () => {
  const [mydata, setMydata] = useState([]);
  const [show, setShow] = useState(false);
  const [input, setInput] = useState({});
  const [uid, setUid] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = (id) => {
    setUid(id);
    setShow(true);
  };

  const loadData = async () => {
    try {
      const api = `${import.meta.env.VITE_BACKEND_URL}/admin/empdisplay`;
      const response = await axios.get(api);
      setMydata(response.data);
    } catch (error) {
      console.log(error);
      toast.error("Failed to load employee data!", {
        position: "bottom-right",
        theme: "dark",
      });
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const api = `${import.meta.env.VITE_BACKEND_URL}/admin/tasksave`;
      const response = await axios.post(api, { id: uid, ...input });
      console.log(response);

      toast.success("Task Assigned Successfully!", {
        position: "bottom-right",
        theme: "dark",
      });

      setShow(false);
      setInput({});
    } catch (error) {
      console.log(error);
      toast.error("Failed to assign task!", {
        position: "bottom-right",
        theme: "dark",
      });
    }
  };

  const tableRows = mydata.map((emp) => (
    <tr key={emp._id}>
      <td>{emp.name}</td>
      <td>{emp.designation}</td>
      <td>{emp.email}</td>
      <td>
        <button className="assign-btn" onClick={() => handleShow(emp._id)}>
          Assign Task
        </button>
      </td>
    </tr> 
  ));

  return (
    <div className="assign-task-container">
      <h1>Assign Task</h1>
      <p className="subtitle">
          Select an employee and assign them a new task below.
        </p>

      <table className="task-table">
        <thead>
          <tr>
            <th>Employee Name</th>
            <th>Designation</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{tableRows}</tbody>
      </table>

      {show && (
        <div className="modal">
          <div className="modal-content">
            <h2>Assign New Task</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Enter Task</label>
                <input
                  type="text"
                  name="task"
                  onChange={handleInput}
                  placeholder="Enter task name"
                  required
                />
              </div>

              <div className="form-group">
                <label>Enter Duration (Days)</label>
                <input
                  type="number"
                  name="duration"
                  onChange={handleInput}
                  placeholder="Number of days"
                  required
                />
              </div>

              <div className="form-group">
                <label>Select Priority</label>
                <select name="priority" onChange={handleInput} required>
                  <option value="">Select Priority</option>
                  <option value="High">High</option>
                  <option value="Medium">Medium</option>
                  <option value="Low">Low</option>
                </select>
              </div>

              <div className="btn-row">
                <button type="submit" className="submit-btn">
                  Submit
                </button>
                <button
                  type="button"
                  className="close-btn"
                  onClick={handleClose}
                >
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AssignTask;