const jwt = require('jsonwebtoken');

module.exports = class authServices {
  static authToken(user) {
    return jwt.sign(
      { user },
      {
        expiresIn: '24h',
      }
    );
  }

  static verifyAuthToken(token) {
    const { user } = jwt.verify(token);
    return user;
  }
};
