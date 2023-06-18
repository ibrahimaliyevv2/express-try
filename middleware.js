const accessControl = (req, res, next) => {
  const access = false;
  if (!access) {
    res.status(401).json({
      success: false,
      message: "You are not authorized",
    });
  }
  //   console.log("Middleware access control");
  next();
};

module.exports = {
  accessControl,
};
