const express = require("express");
const app = express();

function getRandomNumber(max) {
  return Math.floor(Math.random() * max);
}

app.get("/notifications", (req, res) => {
  res.json({
    notifications: getRandomNumber(10),
    jobs: getRandomNumber(10),
    messaging: getRandomNumber(10),
    network: getRandomNumber(10),
  });
});
app.listen(3000);
