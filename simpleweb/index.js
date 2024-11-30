import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Bye, World!");
});

app.listen(8080, () => {
  console.log("SERVER IS RUNNING");
});
