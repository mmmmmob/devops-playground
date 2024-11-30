import express from "express";
import redis from "redis";

const app = express();
const client = redis.createClient();

client.set("visits", 0);

app.get("/", (req, res) => {
  client.get("visits", (err, visits) => {
    res.send(`Number of visits is ${visits}`);
    client.set("visits", parseInt(visits) + 1); // Redis store value in string
  });
});

app.listen(8080, () => {
  console.log("SERVER IS RUNNING");
});
