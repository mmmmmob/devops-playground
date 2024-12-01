import express from "express";
import { createClient } from "redis";

const app = express();
const client = createClient({
  url: "redis://redis-server",
  port: 6379,
});

await client.connect();

await client.set("visits", 0);

app.get("/", async (req, res) => {
  // redis 4.0+ return promise so we have to use with async
  // process.exit(0); -> voluntarily exit (code 1,2,... = there's a problem)
  try {
    // main logic
    const visits = await client.get("visits");
    res.send(`Number of visits is ${visits}`);
    await client.set("visits", parseInt(visits) + 1);
  } catch (err) {
    // catch errors
    console.error("Error accessing Redis", err);
    res.status(500).send("Something went wrong");
  }
});

app.listen(8080, () => {
  console.log("SERVER IS RUNNING");
});
