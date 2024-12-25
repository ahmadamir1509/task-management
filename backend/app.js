const express = require("express");
const app = express();
require("./conn/conn");

app.use("/", (req, res) => {
  res.send("Hello from backend side ");

  //testing github enviornment
});

const PORT = 1000;

app.listen(PORT, () => {
  console.log(`Server is running on port 1000`);
});
