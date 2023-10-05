const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json([
    {
      name: "sojib",
    },
    {
      name: "sojib",
    },
      {
          name:"sojib",
    },
    {
      name: "sojib",
    },
    {
      name: "sojib" ,
    }
  ]);
});

module.exports = router;
