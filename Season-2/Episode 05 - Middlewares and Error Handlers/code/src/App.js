const express = require("express");
const app = express();
const port = 3000;

// REQREST GONNA TO HANGE,
// How to excute second route
// Third paramter - next()
// next() - a function to execute next routing handling method.

app.get(
  "/users",
  (req, res, next) => {
    const massage = "SERVER GONNA TO HANGE OUT, IF DON'T RETURN ANY RESPONSE!";
    console.log(massage);
    console.log("Handling the route user1!!");
    next();
  },
  (req, res, next) => {
    const massage = "Handling the route user2!!";
    console.log(massage);
    next();
  },
  (req, res) => {
    const massage = "Handling the route user3!!";
    console.log(massage);
    res.send({
      msg: massage,
      value: 1,
    });
  }
);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

//* ORDER_OF_EXECTION_EXPRESS_JS_CODE
// SINGLE_THREAD_JS_CODE
// SERVER GONNA TO HANGE OUT, IF DON'T RETURN ANY RESPONSE!
// Handling the route user1!!
// Handling the route user2!!
// Handling the route user3!!