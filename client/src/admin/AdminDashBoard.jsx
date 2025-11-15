import { Link, Outlet } from "react-router-dom";
import { FiUserPlus, FiFileText, FiClipboardList, FiLogOut } from "react-icons/fi";
import "../css/AdminDashBoard.css";

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
        <Link to="/" className="logout-btn">
          <FiLogOut size={16} /> Logout
        </Link>
      </div>

      <div id="admindata">
        <div id="adminmenu">
          <Link to="create-user">
            <FiUserPlus size={18} /> &nbsp; Create User
          </Link>

          <Link to="assign-task">
            <FiClipboardList size={18} /> &nbsp; Assign Task
          </Link>

          <Link to="see-reports">
            <FiFileText size={18} /> &nbsp; See Reports
          </Link>
        </div>

        <div id="admincontent">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default AdminDashBoard;