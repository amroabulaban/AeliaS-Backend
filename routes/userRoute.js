const express = require("express");
const router = express.Router();
const {getProducts, getProductById,createUser,updateUser,deleteUser} = require('../controller/userController');

// Get a list of all users.
router.get('/', getProducts);

//Get a single user by ID.
router.get('/users/:id', getProductById);

//Create a new user.
router.post('/users',createUser);

//Update an existing user.
router.put('/users/:id',updateUser);

//Delete a user.
router.delete('/users/:id', deleteUser);


module.exports = router;