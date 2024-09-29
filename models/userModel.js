const mongoose = require('mongoose');

const UserSchema = mongoose.Schema(
    {
        id: {
            type: Number,
            required: [true, "user ID is required"],
            unique: true
        },
        name: {
            type: String
        },
        age: {
            type: Number
        }
    }
);

const User = mongoose.model("user",UserSchema);

module.exports = User;