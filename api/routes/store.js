var express = require("express");
var router = express.Router();
// import fetch from 'node-fetch';
var fetch = require("node-fetch");

/* GET users listing. */
router.get("/", async (req, res, next) => {
  try {
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});
router.get("/subjects", async (req, res, next) => {
  try {
    const url =
      "http://openlibrary.org/subjects/" +
      req.query.subject +
      ".json?limit=50";
    const data = await fetch(url, {})
      .catch((err) => console.log(err))
      .then((res) => res.json())
      .then((data) => data);

    res.status(200).send(data);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});
router.get("/subjects5", async (req, res, next) => {
  try {
    const url =
      "http://openlibrary.org/subjects/" +
      req.query.subject +
      ".json?limit=5?offset=50";
    const data = await fetch(url, {})
      .catch((err) => console.log(err))
      .then((res) => res.json())
      .then((data) => data);

    res.status(200).send(data);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

router.get("/author", async (req, res, next) => {
  try {
    const url = "http://openlibrary.org" + req.query.authorkey + "/works.json";
    const data = await fetch(url, {})
      .catch((err) => console.log(err))
      .then((res) => res.json())
      .then((data) => data);

    res.status(200).send(data);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

router.get("/book", async (req, res, next) => {
  try {
    const url = "https://openlibrary.org" + req.query.key + ".json";
    const data = await fetch(url, {})
      .catch((err) => console.log(err))
      .then((res) => res.json())
      .then((data) => data);

    res.status(200).send(data);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

module.exports = router;
