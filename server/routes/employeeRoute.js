const express = require("express");
const route = express.Router();
const EmpController = require("../controllers/empController");

route.post("/login", EmpController.empLogin);
route.post("/login", EmpController.empLogin);
route.get("/showtask", EmpController.showTask);
route.put("/taskreport", EmpController.taskReport);

module.exports = route; 