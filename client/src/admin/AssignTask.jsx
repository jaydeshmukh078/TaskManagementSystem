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
      let api = `${import.meta.env.VITE_BACKEND_URL}/admin/empdisplay`;
      const response = await axios.get(api);
      setMydata(response.data);
    } catch (error) {
      console.log(error);
      toast.error("Failed to load employee data!");
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setInput((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let api = `${import.meta.env.VITE_BACKEND_URL}/admin/tasksave`;
      const response = await axios.post(api, { id: uid, ...input });
      console.log(response);

      toast.success(" Task Assigned Successfully!", {
        theme: "dark",
        position: "top-center",
      });

      setShow(false);
      setInput({});
    } catch (error) {
      console.log(error);
      toast.error(" Failed to assign task!", {
        theme: "dark",
        position: "top-center",
      });
    }
  };

  const ans = mydata.map((key) => (
    <tr key={key._id}>
      <td>{key.name}</td>
      <td>{key.designation}</td>
      <td>{key.email}</td>
      <td>
        <button className="assign-btn" onClick={() => handleShow(key._id)}>
          Assign Task
        </button>
      </td>
    </tr>
  ));

  return (
    <div className="assign-task-container">
      <h1>Assign Task</h1>

      <table className="task-table">
        <thead>
          <tr>
            <th>Employee Name</th>
            <th>Designation</th>
            <th>Email</th>
            <th></th>
          </tr>
        </thead>
        <tbody>{ans}</tbody>
      </table>

      {show && (
        <div className="modal">
          <div className="modal-content">
            <h2>Assign New Task</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Enter Task:</label>
                <input type="text" name="task" onChange={handleInput} required />
              </div>

              <div className="form-group">
                <label>Enter Duration (Days):</label>
                <input
                  type="number"
                  name="duration"
                  onChange={handleInput}
                  required
                />
              </div>

              <div className="form-group">
                <label>Select Priority:</label>
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
                <button type="button" className="close-btn" onClick={handleClose}>
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
