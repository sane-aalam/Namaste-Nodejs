// custom middleware - (adminAuth,userAuth)

const adminAuth = (res, req, next) => {
  console.log("Admin authorization is getting checked!");
  let token = "xyz";
  const isAuthorizationAdmin = token === "xyz";
  if (!isAuthorizationAdmin) {
    res.statusCode.send("Unauthorized request");
  } else {
    next();
  }
  res.send("All data send");
};

const userAuth = (res, req, next) => {
  console.log("Admin authorization is getting checked!");
  let token = "xyz";
  const isAuthorizationAdmin = token === "xyz";
  if (!isAuthorizationAdmin) {
    res.statusCode.send("Unauthorized request");
  } else {
    next();
  }
  res.send("All data send");
};

module.exports = {
  adminAuth,
  userAuth,
};
