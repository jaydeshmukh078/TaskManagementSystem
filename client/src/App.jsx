import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import AdminDashBoard from "./admin/AdminDashBoard";
import CreateUser from "./admin/CreateUser";
import AssignTask from "./admin/AssignTask";
import EmpDashBoard from "./employee/EmpDashBoard";
import MyTask from "./employee/MyTask";
import Signup from "./pages/SignUp";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="signup" element={<Signup/>}/>

          </Route>
        </Routes>
        <Routes>
          <Route path="admin-dashboard" element={<AdminDashBoard />}>
            <Route path="create-user" element={<CreateUser />} />
            <Route path="assign-task" element={<AssignTask />} />

          </Route>
        </Routes>

        <Routes>
          <Route path="emp-dashboard" element={<EmpDashBoard />}>
            <Route path="mytask" element={<MyTask />} />

          </Route>

        </Routes>


      </BrowserRouter>
    </>
  )
}
export default App;