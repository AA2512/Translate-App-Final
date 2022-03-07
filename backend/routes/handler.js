const express = require("express");

const router = express.Router();

router.get("/tweets", (req, res) => {
  const str = [
    {
      name: "Aditya",
      country: "India",
      tweet: "This is my first Tweet",
    },
  ];
  res.end(JSON.stringify(str));
});

module.exports = router;
