const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  try {
    throw new Error("Something went wrong...");
  } catch (err) {
    res.status(404).send({ err: "error fatching!" });
  }
});

app.use("/", (err, req, res, next) => {
  console.error(err.stack);
  next();
});

app.get("/user", (req, res) => {
  // Error: BROKEN
  throw new Error("BROKEN"); // Express will catch this on its own.
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
