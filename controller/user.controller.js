// const users = require("../dummy.json");

// exports.addNewUser = (req, res) => {
//     // console.log(req.body);
//     users.push(req.body);
//     res.json({message: "User Added Success" });
// };

// exports.getAllUsers = (req, res) => {
// res.json(users);
// };

// exports.getUsers = (req, res) => {
//     let id = +req.params.id;
//     let item = users.find((user) => user.id === id);
//     res.json(item);
// };

// exports.replaceUser = (req, res) => {
//     let id = +req.params.id;
//     let userIndex = users.findindex((item) => item.id === id);
//     users.splice(userIndex, 1 , req.body);
//     res.json({ message: "User Replaced Success" });
// };

// exports.updateUser = (req, res) => {
//     let id = +req.params.id;
//     let userIndex = users.findindex((item) => item.id === id);
//     let user = users[userIndex];
//     users.splice(userIndex, 1, {...user, ...req.body });
//     res.json({ message:"User update success" });
// };

// exports.deleteUser = (req, res) => {
//     let id = +req.params.id;
//     let userIndex = users.findindex((item) => item.id === id);
//     users.splice(userIndex, 1);
//     res.json({ message: "User Deete Success" });
// };





// const User = require("../model/user.model");

// exports.addNewUser = async (req, res) => {
//     try {
//         let user = await User.findOne({ email: req.body.email });
//         console.log(user);
//     if(user){
//         return res.status(400).json({message: 'User already exist....'});
//     }
//     user =await User.create(req.body);
//     res.status(201).json({user, message:"User Added Success"});
//     } catch (err) {
//         console.log(err);
//         res.status(500).json({ message: "Internal Server Error" });
//     }
// };

// exports.getAllUsers = async (req, res) => {
//     try {
//         let users = await User.find();
//         res.status(200).json(users);
//     } catch (err) {
//         console.log(err);
//         res.status(500).json({ message: "Internal Server Error" });
        
//     }
// };

// exports.getUser = async (req, res) => {
//     try{
//         // let user = await User.findOne({firstName: req.query.firstName});
//         // let user = await User.findOne({_id: req.query.userId});
//         let user = await User.findById(req.query.userId);
//         // console.log(user);
//         if (!user) {
//             return res.status(404).json({ message: "User not found" });

//         }
//         res.status(200).json(user);
        
//     }
// }








// const users = require("../friend.json");

// exports.addNewUser = (req, res) => {
//     console.log(req.body);
//     users.push(req.body);
//     res.json({ message: "Users Added success "});
// };

// exports.getAllUsers = (req, res) => {
//     res.json(users);
// };

// exports.getUser = (req, res) => {
//     let id = +req.parmas.id;
//     let item = users.find((user) => user.id === id);
//     res.json(item);
// };

// exports.replaceUser = (req, res) => {
//     let id = +req.parmas.id;
//     let userIndex = users.findIndex((item) => item.id === id);
//     users.splice(userIndex, 1, req.body);
//     res.json({ message: "Users Replaced Success" });
// };

// exports.updateUser = (req, res) => {
//     let id = +req.params.id;
//     let userIndex = users.findIndex((item) => item.id === id);
//     let user = users[userIndex];
//     users.splice(userIndex, 1, {...user, ...req.body });
//     res.json({ message: "Users Update Success" });
// };

// exports.deleteUser = (req, res) => {
//     let id = +req.params.id;
//     let userIndex = users.findIndex((item) => item.id === id);
//     users.splice(userIndex, 1);
//     res.json({ message: "Users Delete Success" });
// };

// const User = require("../model/user.model");

// exports.addNewUser = async (req, res) => {
//    try {
//     let user = await User.findOne({email: req.body.email});
//     //console.log(user);
//     if(user){
//         return res.status(400).json({message: 'User already exist.....'});
//     }
//     user = await User.create(req.body);
//     res.status(201).json({ user, message: "User Added Success"});
//    }catch (err) {
//     console.log(err);
//     res.status(500).json({ message: "Internal Server Error"});
//    }
// };
                         
// exports.getAllUsers = async (req, res) => {
//     try{
//         let users = await User.find();
//         res.ststus(200).json(users);
//     }catch (err) {
//         console.log(err);
//         res.status(500).json({ message: "Internal server Error"});
//     }
// };

               
// exports.getUser = async (req, res) => {
//     try{
//         // let user = await User.findOne({firstName: req.body.firstName});
//         // let user = await User.findOne({_id: req.query.userId});
//        let user = await User.findById(req.query.userId);
//        console.log(user);
//        if(!user) {
//         return res.status(404).json({ message: "User not found"});
//        }
//        res.status(200).json(user);
//     }catch (err) {
//         console.log(err);
//         res.status(500).json({ message: "Internal Server Error" });
//     }
// };



exports.updateUser = async (req, res) => {
    try {
        let user = await User.findById(req.query.userId);
        // console.log(user);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        //  user = await User.updateOne({ _id: user._id }, req.body, { new: true });
        // user = await user.findOneAndUpdate({ _id: user._id }, req.body, { new: true });
        user = await user.findByIdAndUpdate(user._id, { $set: req.body }, { new: true });
        res.status(202).json({ user, message: 'user update success' });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

exports.deleteUser = async (req, res) => {
    try {
        let user = await user.findById(req.query.userId);
        // console.log(user);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        // user = await User.deleteOne({ _id: user._id })
        user = await User.findOneAndDelete({ _id: user._id })
        // user = await USer.findByIdAndDelete(user_id)
        res.status(200).json({ user, message: 'User Delete Success' });
    } catch (err) {
        console.log(err);
        res.ststus(500).json({ message: "Interval Server Error" });
    }
}







