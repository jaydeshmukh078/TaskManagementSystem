import axios from "axios";
import { useState, useEffect } from "react";

const MyTask = () => {
  const [mydata, setMydata] = useState([]);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const laodData = async () => {
    try {
      let api = `${import.meta.env.VITE_BACKEND_URL}/employee/showtask/?id=${localStorage.getItem("empid")}`;
      const response = await axios.get(api);
      console.log(response.data);
      setMydata(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    laodData();
  }, []);

  let sno = 0;
  const ans = mydata.map((key) => {
    sno++;
    return (
      <tr key={key._id}>
        <td>{sno}</td>
        <td>{key.task}</td>
        <td>{key.duration}</td>
        <td>{key.priority}</td>
        <td>
          <button onClick={handleShow}>Send Report!</button>
        </td>
      </tr>
    );
  });

  return (
    <>
      <h1>My Task Detail</h1>
      <hr />

      <table border="1">
        <thead>
          <tr>
            <th>#</th>
            <th>Task Detail</th>
            <th>Duration in Days</th>
            <th>Priority Level</th>
            <th></th>
          </tr>
        </thead>
        <tbody>{ans}</tbody>
      </table>

      {show && (
        <div>
          <h2>Your Task Report</h2>
          <form>
            <div>
              <label>Select Task Status</label>
              <br />
              <select>
                <option>select task status</option>
                <option value="Fully Competed">Fully Completed</option>
                <option value="Partial Completed">Partial Completed</option>
                <option value="No Completed">No Completed</option>
              </select>
            </div>

            <div>
              <label>Completion Days</label>
              <br />
              <input type="text" />
            </div>

            <br />
            <button type="submit">Submit</button>
            <button type="button" onClick={handleClose}>
              Close
            </button>
            <button type="button" onClick={handleClose}>
              Save Changes
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default MyTask;