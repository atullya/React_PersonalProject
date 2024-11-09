const User = require("../models/usermodel");
const adminControls = async (req, res) => {
  try {
    let totalUser = await User.countDocuments({});
    let allUsers = await User.find({});
    return res.status(201).json({
      message: `The total no of user are ${totalUser} `,
      users: allUsers,
    });
  } catch (e) {
    console.log(e);
  }
  res.send("Hello");
};

module.exports = adminControls;
