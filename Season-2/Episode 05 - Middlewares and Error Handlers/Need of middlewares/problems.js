const express = require("express");
const app = express();
const port = 3000;

// Explain the concept of middleware in Express.js
// Middleware acts as a bridge between incoming HTTP requests and your Express.js application
// allowing for a range of operations such as parsing request bodies, handling authentication, and even serving static files.
// Middleware work for all routes which ralated to "/admin" route
// sometime you can use pre-define middleware
// Middleware (write) - Need to reduce the code,become clean code

app.get("/users", (req, res) => {
  let token = "xyz";
  const isAuthorizationAdmin = token === "xyz";
  if (!isAuthorizationAdmin) {
    res.statusCode.send("Unauthorized request");
  } else {
    console.log("called");
    next();
  }
  res.send("user show data!");
});

app.get("/admin/getAllData", (req, res) => {
  let token = "xyz";
  const isAuthorizationAdmin = token === "xyz";
  if (!isAuthorizationAdmin) {
    res.statusCode.send("Unauthorized request");
  } else {
    console.log("called");
    next();
  }
  res.send("user data Send!");
});

app.delete("/admin/deleteAllData", (req, res) => {
  let token = "xyz";
  const isAuthorizationAdmin = token === "xyz";
  if (!isAuthorizationAdmin) {
    res.statusCode.send("Unauthorized request");
  } else {
    console.log("called");
    next();
  }
  res.send("All data send");
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
