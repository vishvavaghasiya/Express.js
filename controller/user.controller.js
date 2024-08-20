const User = require("../model/user.model"); 
const bcrypt = require("bcrypt");
 
// exports.addNewUser = async(req, res) => { 
//    try{ 
//     let user = await User.findOne({email : req.body.email , isDelete: false}); 
//     if(user){ 
//       return res.status(400).json({message : "User Already Exists"}); 
//     } 
//     user = await User.create(req.body); 
//     res.status(201).json({user , message : "User Added Success"}); 
//    } 
//    catch(err){ 
//     console.log(err); 
//     res.status(500).json({message:"Internal Server Error"}); 
//    } 
// }; 
 
// exports.getAllUsers = async(req, res) => { 
//     try { 
//       let user = await User.find({isDelete : false}); 
//       res.status(200).json(user); 
//     } catch (err) { 
//       console.log(err); 
//       res.status(500).json({message:"Internal Server Error"}); 
//     } 
// }; 
 
// exports.getUser = async(req, res) => { 
//    try { 
//       // let user = await User.findOne({firstName:req.query.firstName}); 
//       // let user = await User.findOne({_id : req.query.userId}); 
//       let user = await User.findById(req.query.userId); 
//       // console.log(user); 
//       if(!user) { 
//          return res.status(404).json({message : "User not Found"}); 
//       } 
//       res.status(200).json(user); 
//    } catch (err) { 
//       console.log(err); 
//       res.status(500).json({message : "Internal Server Error"}); 
//    } 
// }; 
 
// exports.updateUser = async(req,res) => { 
//     try { 
//       let user = await User.findById(req.query.userId); 
//       // console.log(user); 
//       if(!user) { 
//          return res.status(404).json({message : "User not Found"}); 
//       } 
//       // user = await User.updateOne({_id : user._id}, req.body , {new:true}); 
//       user = await User.findOneAndUpdate(user._id, {$set: req.body} , {new: true}); 
//     } catch (err) { 
//       console.log(err); 
//       res.status(500).json({message : "Internal Server Error"}); 
//     } 
// }; 
 
// exports.deleteUser =  async(req,res) => { 
//     try { 
//       let user = await User.findOne({_id :req.query.userId , isDelete: false}); 
//       console.log(user); 
//       if (!user) { 
//          return res.status(404).json({message : "User not found"}); 
//       } 
//       user = await User.findByIdAndUpdate(user._id , {isDelete:true} , {new : true}); 
//       res.status(200).json({message : "User deleted successfully"}); 
//     } catch (err) { 
//       console.log(err); 
//       res.status(500).json({message: "Internal Server Error"}); 
//     } 
// };

exports.registerUser = async (req, res) => {
  try {
    let user = await User.findOne({ email:req.body.email, isDelete: false });
    if(user){
      return res.json({message: 'User already exist...'});
    }
    let hashPassword = await bcrypt.hash(req.body.password,10);
    // console.log(hashPassword);
    user = await User.create({...req.body,password: hashpassword});
    res.status(201).json({user,message: 'Register Success....'});     
  } catch (err) {
    console.log(err);
    res.status(500).json({message: 'server Error'});
  }
};

exports.loginUser = async (req, res) => {
  try {
    let user = await User.findOne({ email:req.body.email, isDelete: false });
    if(!user){
      return res.json({message: 'User Not Found...'});
    }
    let comparedPassword = await bcrypt.compare(req.body.password, user.password);
    // console.log(comparedPassword);
    if(!comparedPassword){
      return res.json({message: 'Email or Password dose not matched......'})
    }
    res.status(200).json({message: 'login Success....', user });     
  } catch (err) {
    console.log(err);
    res.status(500).json({message: 'server Error'});
  }
};

