const AdminModel = require("../models/adminModel");
const UserPassword = require("../middlewares/randomPassword");
const emailSend = require("../middlewares/empMailSen");
const EmpModel = require("../models/empModel");
const TaskModel = require("../models/taskModel");

const adminLogin = async (req, res) => {
    const { email, password } = req.body;
    try {
        const Admin = await AdminModel.findOne({ email: email });

        if (!Admin) {
            res.status(401).send({ msg: "Invalid Email ID" });
        }

        if (Admin.password != password) {
            res.status(401).send({ msg: "Invalid Password" });
        }

        res.status(200).send({ Admin: Admin, msg: "Succesfully Login" });

    } catch (error) {
        console.log(error);
    }
}


const userCreate = async (req, res) => {
    const { empname, empemail, designation } = req.body;
    const emppassword = UserPassword.myPassword();
    // console.log(UserPassword.myPassword());
    emailSend.userMailsender(empname, empemail, emppassword);

    const Employee = await EmpModel.create({

        name: empname,
        email: empemail,
        designation: designation,
        password: emppassword
    })
    res.status(201).send("user succesfully created!!!");
}

const empDisplay = async (req, res) => {
    const employee = await EmpModel.find();
    res.status(200).send(employee);
}

const taskSave = async (req, res) => {
    const { id, task, duration, priority } = req.body;
    const emptask = await TaskModel.create({
        task: task,
        duration: duration,
        priority: priority,
        empid: id
    })

    res.status(201).send("Task Successfully Created!");

}
module.exports = {
    adminLogin,
    userCreate,
    empDisplay,
    taskSave
}