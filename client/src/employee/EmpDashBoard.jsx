import { Link, Outlet } from "react-router-dom";
import "../css/EmpDashBoard.css";
import { FiUserPlus, FiFileText, FiLogOut, FiClipboard } from "react-icons/fi";

const EmpDashBoard = () => {
  const empName = localStorage.getItem("empname") || "Employee";
  const empDesignation = localStorage.getItem("empdesignation") || "Designation";

  return (
    <>
      {/* Top Black Header */}
      <div id="empdash">
        <h1>Employee Dashboard</h1>
      </div>

      {/* Second White Info Bar */}
      <div id="empname">
        Welcome : {empName} | Designation : {empDesignation} | <Link to="/" className="logout-btn">
          <FiLogOut size={16} /> Logout
        </Link>
      </div>

      {/* Main Layout */}
      <div id="empdata">
        <div id="empmenu">
          <Link to="mytask">My Tasks</Link>
          <Link to="submitedtask">Submited Tasks</Link>
        </div>

        <div id="empcontent">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default EmpDashBoard;
