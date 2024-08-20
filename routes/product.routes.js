
const express = require('express');
const userRoutes = express.Router();

const {
    addNewUser,
    getAllUsers,
    getUser,
    replaceUser,
    updateUser,
    deleteUser
} = require('../controller/user.controller');

userRoutes.post('/' , addNewUser);const express = require('express');
const productRoutes = express.Router();

const {
    addNewUserPro,
    getAllUsersPro,
    getUserPro,
    replaceUserPro,
    updateUserPro,
    deleteUserPro
} = require('../controller/product.controller');

productRoutes.post('/' , addNewUserPro);

productRoutes.get('/' , getAllUsersPro);

productRoutes.get('/:id',getUserPro);

productRoutes.put("/:id" , replaceUserPro);

productRoutes.patch("/:id" , updateUserPro);

productRoutes.delete("/:id" , deleteUserPro);



module.exports = productRoutes;

userRoutes.get('/' , getAllUsers);

userRoutes.get('/:id',getUser);

userRoutes.put("/:id" , replaceUser);

userRoutes.patch("/:id" , updateUser);

userRoutes.delete("/:id" , deleteUser);

module.exports = userRoutes;