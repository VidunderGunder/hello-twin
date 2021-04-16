import { led, reset, millis } from "./serial";
import express from "express";

const app = express();
const port = process.env.PORT;

app.get("/", (_, res) => res.send("Hello Twin!"));
app.post("/", (_, res) => res.send("Hello Twin!"));

app.post("/led/:on", (req, res) => {
  const on = parseInt(req.params.on);
  switch (on) {
    case 1:
      led(true);
      res.send();
      break;
    case 0:
      led(false);
      res.send();
      break;
    default:
      res.status(400).send("Must be 1 (on) or 0 (off)");
      break;
  }
});

app.post("/reset", (_, res) => {
  reset();
  res.send();
});

app.get("/millis", async (_, res) => {
  const ms = await millis();
  res.send(ms);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
