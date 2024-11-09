const User = require("../models/usermodel");
var bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const registerUser = async (req, res) => {
  try {
    const { username, email, password, role } = req.body;

    //if the user is already exist in our database
    const checkExistingUser = await User.findOne({
      $or: [{ username, email }],
    });
    if (checkExistingUser) {
      return res.status(400).json({
        success: false,
        message:
          "User already exists either with the same username or email. Please try again with a different username or email",
      });
    }
    var salt = bcrypt.genSaltSync(10);
    var hashPassword = bcrypt.hashSync(password, salt);
    const newUser = new User({
      username,
      email,
      password: hashPassword,
      role: role || "user",
    });
    const insertinDB = await newUser.save();
    if (insertinDB) {
      console.log("Database insertion successfully");
    }
    res.status(201).json({
      success: true,
      data: newUser,
    });
  } catch (error) {
    console.log(error);
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({
        message: "User doesn't exits. Please try again",
      });
    }
    let isPasswordmatched = await bcrypt.compare(password, user.password);

    if (!isPasswordmatched) {
      return res.status(401).json({
        success: false,
        message: "Invalid password!!",
      });
    }
    //create access token

    const accessToken = jwt.sign(
      {
        userId: user._id,
        email: user.email,
        role: user.role,
      },
      process.env.JWT_SECRET_KEY,
      {
        expiresIn: "30m",
      }
    );
    return res.status(200).json({
      success: true,
      message: "Login Successfull",
      accessToken,
    });
  } catch (error) {
    return res.status(400).json({
      succsss: false,
      message: "Server Error",
    });
  }
};

module.exports = { registerUser, loginUser };
