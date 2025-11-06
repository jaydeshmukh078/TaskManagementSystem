import { Link, Outlet } from "react-router-dom";
import "../css/AdminDashBoard.css"; // CSS import

const AdminDashBoard = () => {
  const name = localStorage.getItem("adminname");
  const email = localStorage.getItem("adminemail");

  return (
    <>
      <div id="admindash">
        <h1>Admin Dashboard</h1>
      </div>

      <div id="adminname">
        Welcome: <strong>{name}</strong> &nbsp; | &nbsp; Email:{" "}
        <strong>{email}</strong> &nbsp; | &nbsp;
        <Link to="/">Logout</Link>
      </div>

      <div id="admindata">
        <div id="adminmenu">
          <Link to="create-user">Create User</Link>
          <Link to="assign-task">Assign Task</Link>
        </div>

        <div id="admincontent">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default AdminDashBoard;