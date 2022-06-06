var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", async (req, res, next) => {
  try {
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

module.exports = router;
