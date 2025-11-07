import axios from "axios";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../css/MyTask.css";

const MyTask = () => {
  const [mydata, setMydata] = useState([]);
  const [show, setShow] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const [report, setReport] = useState({ status: "", days: "" });

  const handleClose = () => setShow(false);
  const handleShow = (task) => {
    setSelectedTask(task);
    setShow(true);
  };

  const loadData = async () => {
    try {
      let api = `${import.meta.env.VITE_BACKEND_URL}/employee/showtask/?id=${localStorage.getItem(
        "empid"
      )}`;
      const response = await axios.get(api);
      setMydata(response.data);
    } catch (error) {
      console.log(error);
      toast.error("Failed to load task data!");
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setReport((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    toast.success("Report submitted successfully!", {
      theme: "dark",
      position: "top-center",
    });
    setShow(false);
    setReport({ status: "", days: "" });
  };

  let sno = 0;

  return (
    <div className="mytask-container">
      <h1>My Task Details</h1>

      <table className="task-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Task Detail</th>
            <th>Duration (Days)</th>
            <th>Priority</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {mydata.map((task) => (
            <tr key={task._id}>
              <td>{++sno}</td>
              <td>{task.task}</td>
              <td>{task.duration}</td>
              <td>{task.priority}</td>
              <td>
                <button
                  className="report-btn"
                  onClick={() => handleShow(task)}
                >
                  Send Report
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {show && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Submit Task Report</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Select Task Status:</label>
                <select
                  name="status"
                  value={report.status}
                  onChange={handleInput}
                  required
                >
                  <option value="">Select task status</option>
                  <option value="Fully Completed">Fully Completed</option>
                  <option value="Partial Completed">Partial Completed</option>
                  <option value="Not Completed">Not Completed</option>
                </select>
              </div>

              <div className="form-group">
                <label>Completion Days:</label>
                <input
                  type="number"
                  name="days"
                  value={report.days}
                  onChange={handleInput}
                  required
                />
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

export default MyTask;