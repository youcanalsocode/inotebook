const express = require("express");
const router = express.Router();
const Note = require("../models/Notes");

router.post("/", (req, res) => {
  console.log(req.body);
  const note = Note(req.body);
  note.save();
  res.send(req.body);
});
module.exports = router;
