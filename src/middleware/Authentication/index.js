const jwt = require("jsonwebtoken");

module.exports = async (req, res, next) => {
  try {
    let tokens = null;
    if (req && req.headers.cookie) {
      tokens = req.headers.cookie;
      req.user = await jwt.verify(tokens, process.env.SECRETKEY);
      console.log(tokens, "line 0 auth");
    }
    if (req && req.headers["authorization"]) {
      tokens = req.headers["authorization"].split(" ")[1];
      req.user = await jwt.verify(tokens, process.env.SECRETKEY);
    }
    return tokens;
  } catch (e) {
    if (e.message.includes("expired")) {
      req.user = null;
    }
  } finally {
    next();
  }
};
