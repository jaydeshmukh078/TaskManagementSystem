import { useEffect, useState } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import "../css/SeeReports.css";

const SeeReports = () => {
  const [mydata, setMydata] = useState([]);

  const loadData = async () => {
    try {
      let api = `${import.meta.env.VITE_BACKEND_URL}/admin/taskreportdisplay`;
      const response = await axios.get(api);
      console.log(response.data);
      setMydata(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const taskReassign = async (tid) => {
    try {
      let api = `${import.meta.env.VITE_BACKEND_URL}/admin/taskreassign?tid=${tid}`;
      const response = await axios.get(api);
      console.log(response.data);
      alert("Task Reassigned: " + tid);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h1> See Employee Reports </h1>
      <hr />

      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>Task Name</th>
            <th>Duration (Days)</th>
            <th>Priority</th>
            <th>Employee Name</th>
            <th>Email</th>
            <th>Designation</th>
            <th>Completion Days</th>
            <th>Task Status</th>
            <th>Submit Status</th> {/* Missing column added */}
            <th>Action</th>        {/* Missing column added */}
          </tr>
        </thead>

        <tbody>
          {mydata.map((item, index) => (
            <tr key={item._id}>
              <td>{index + 1}</td>
              <td>{item.task}</td>
              <td>{item.duration}</td>
              <td>{item.priority}</td>
              <td>{item.empid?.name}</td>
              <td>{item.empid?.email}</td>
              <td>{item.empid?.designation}</td>
              <td>{item.completionday}</td>
              <td>{item.taskstatus}</td>
              <td>{item.submitstatus}</td>
              <td>
                <Button
                  variant="danger"
                  onClick={() => taskReassign(item._id)}
                >
                  Re-Assign Task
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default SeeReports;