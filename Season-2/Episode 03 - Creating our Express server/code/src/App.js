const express = require("express");
const app = express();
const port = 3000;

// All Dependencies are installed into Node_MODULE_FLODER
// As you know - according to routes render the DATA
// Install NODEMON help to automattically re-start the server.

app.get("/home", (req, res) => {
  res.send("Hello World!");
});

app.get("/login", (req, res) => {
  res.send("Login page!");
});

app.get("/home/update_profile", (req, res) => {
  res.send("update profile!");
});

app.get("/home/delete_profile", (req, res) => {
  res.send("delete profile!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
