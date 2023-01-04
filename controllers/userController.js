const userService = require("../services/userService");

const signUp = async (req, res) => {
  try {
    const { email, password, userName, phoneNumber } = req.body;

    console.log(email);
    console.log(password);
    console.log(userName);
    console.log(phoneNumber);

    if (!password || !email || !userName || !phoneNumber) {
      return res.status(400).json({ message: "KEY_ERROR" });
    }

    await userService.signUp(email, password, userName, phoneNumber);

    res.status(201).json({ message: "SIGNUP_SUCCESS" });
  } catch (err) {
    console.log(err);
    return res.status(err.statusCode || 500).json({ message: err.message });
  }
};

module.exports = {
  signUp,
};
