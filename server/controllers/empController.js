const EmpModel = require("../models/empModel");
const TaskModel = require("../models/taskModel");

const empLogin = async (req, res) => {
    const { email, password } = req.body;

    const employee = await EmpModel.findOne({ email: email });

    if (!employee) {
        res.status(401).send({ msg: "Invalid Employee Email!" });
    }

    if (employee.password != password) {
        res.status(401).send({ msg: "Invalid Password!" });
    }

    res.status(200).send({ employee: employee, msg: "Login Succesfully!" });
}

const showTask = async (req, res) => {
    const { id } = req.query;
    const employee = await TaskModel.find({ empid: id });
    console.log(employee);
    res.status(200).send(employee);
}

const taskReport = async (req, res) => {
    const { taskstatus, taskduration, taskId } = req.body;

    const task = await TaskModel.findByIdAndUpdate(taskId, {
        taskstatus: taskstatus,
        completionday: taskduration,
        submitstatus: true
    })

    res.status(201).send({ msg: "Task Successfully Submited!" })
}

module.exports = {
    empLogin,
    showTask,
    taskReport
}