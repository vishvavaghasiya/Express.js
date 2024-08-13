const users = require("../dummy.json");

exports.addNewUser = (req, res) => {
    // console.log(req.body);
    users.push(req.body);
    res.json({message: "User Added Success" });
};

exports.getAllUsers = (req, res) => {
res.json(users);
};

exports.getUsers = (req, res) => {
    let id = +req.params.id;
    let item = users.find((user) => user.id === id);
    res.json(item);
};

exports.replaceUser = (req, res) => {
    let id = +req.params.id;
    let userIndex = users.findindex((item) => item.id === id);
    users.splice(userIndex, 1 , req.body);
    res.json({ message: "User Replaced Success" });
};

exports.updateUser = (req, res) => {
    let id = +req.params.id;
    let userIndex = users.findindex((item) => item.id === id);
    let user = users[userIndex];
    users.splice(userIndex, 1, {...user, ...req.body });
    res.json({ message:"User update success" });
};

exports.deleteUser = (req, res) => {
    let id = +req.params.id;
    let userIndex = users.findindex((item) => item.id === id);
    users.splice(userIndex, 1);
    res.json({ message: "User Deete Success" });
};

