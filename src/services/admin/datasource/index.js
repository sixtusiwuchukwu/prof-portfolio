const { UserInputError } = require("apollo-server-express");
const User = require("../../../models/user/admin");
const generateToken = require("../../../utils/generateToken/index");
const Base = require("../../../base");
class Admin extends Base {
  async adminUpdateProfile(data, user) {
    await this.isLoggedIn(user);
    await User.findOneAndUpdate({ gmail: user.gmail }, data, { new: true });
    return "sucessfully updated";
  }
  async adminUpdatePassword(data, user) {
    await this.isLoggedIn(user);
    const { newPassword } = data;
    const foundUser = await User.findOne({ gmail: user.gmail });
    if (!foundUser)
      throw new Error("cannot find user account trying to change password");
    let isPassword = await User.comparePassword(
      newPassword,
      foundUser.password
    );

    if (isPassword) {
      foundUser.password = newPassword;

      await result.save();
      return "password sucessfully updated";
    }
    throw new UserInputError("previous password is incorrect");
  }
  async getCurrentUser(user) {
    await this.isLoggedIn(user);
    let foundUser = await User.findById(user._id);
    if (!foundUser) {
      return "user not found";
    }
    return foundUser;
  }
  async adminLogin(data) {
    let foundUser = await User.findOne({ gmail: data.gmail });
    if (!foundUser) {
      throw new UserInputError("incorrect user gmail");
    }
    let isPassword = await User.comparePassword(
      data.password,
      foundUser.password
    );

    if (!isPassword) {
      throw new UserInputError("incorrect user password");
    }

    return generateToken(foundUser);
  }

  async adminLogout(user) {
    await this.isLoggedIn(user);
    return " sucessfully logged out";
  }
}

module.exports = Admin;
