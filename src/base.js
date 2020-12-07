const { AuthenticationError } = require("apollo-server-express");

class Base {
  async isLoggedIn(user) {
    if (!user) {
      throw new AuthenticationError("login to continue");
    }
  }
}

module.exports = Base;
