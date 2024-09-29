const User = require("../models/userModel");

// Get a list of all users.
const getProducts = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ Message: error.message });
  }
};

//Get a single user by ID.
const getProductById = async (req, res) => {
    try {
      const { id } = req.params;
      const user = await User.findOne({ id: id });
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ Message: error.message });
    }
  };

//Create a new user.
const createUser = async (req, res) => {
    try {
      const user = await User.create(req.body);
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

//Update an existing user.
const updateUser = async (req, res) => {
    try {
      const { id } = req.params;
      const user = await User.findOneAndUpdate({ id: id }, req.body);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      const updatedUser = await User.findById(id);
      res.status(200).json(updatedUser);
    } catch (error) {
      res.status(500).json({ Message: error.message });
    }
  };

//Delete a user.
const deleteUser = async (req, res) => {
    try {
      const { id } = req.params;
      const user = await User.findOneAndDelete({ id: id }, req.body);
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      res.status(200).json({ message: "User deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

module.exports = {
    getProducts,
    getProductById,
    createUser,
    updateUser,
    deleteUser
};