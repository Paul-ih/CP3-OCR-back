const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = jwt.verify(
      token,
      "RANDOM_TOKEN_SECRET_$2b$10$505aWNvcnc10vMBAz2/ZpONj/z4P9CsajVZ3KjkXdFTdNKJOfQ/pu"
    );
    const userId = decodedToken.userId;
    if (req.body.userId && req.body.userId !== userId) {
      throw "Invalid user ID";
    } else {
      next();
    }
  } catch {
    res.status(401).json({
      error: new Error("Requête invalide !"),
    });
  }
};
