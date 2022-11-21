const loginToken = (user, statusCode, message, res) => {
  const token = user.getJWTToken(); // generating login token

  const cookieOption = {
    httpOnly: true,
    expires: new Date(
      Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
    ),
  };

  res.status(statusCode).cookie("logintoken", token, cookieOption).json({
    success: true,
    message: message,
    token,
    user,
  });
};
module.exports = loginToken;
