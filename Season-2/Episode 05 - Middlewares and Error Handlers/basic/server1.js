const express = require("express");
const app = express();
const port = 3000;

app.get("/users", (req, res) => {
  const massage = "SERVER GONNA TO HANGE OUT, IF DON'T RETURN ANY RESPONSE!";
  console.log(massage);
  res.send({
    res: 1,
    massage: massage,
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
