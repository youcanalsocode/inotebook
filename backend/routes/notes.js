const express = require("express");
const router = express.Router();
const Notes = require("../models/Notes");
const fetchuser = require("../Middleware/fetchuser");
const { body, validationResult } = require("express-validator");

//Router get request to get notes from db
//Router1
router.get("/getnotes", fetchuser, async (req, res) => {
  const notes = await Notes.find({ user: req.user.id });
  res.json(notes);
});

//Router post request to add a new node//login reuires
//Router2
router.post(
  "/addnotes",
  fetchuser,
  [body("title").isLength({ min: 5 })],
  [body("descr").isLength({ min: 5 })],

  async (req, res) => {
    try {
      const { title, descr, tag } = req.body;
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const notes = new Notes({
        title,
        descr,
        tag,
        user: req.user.id,
      });
      const savenote = await notes.save();

      res.json(savenote);
    } catch (err) {
      console.log(err);
      res
        .status(500)
        .json({ error: "Internal server error", message: err.message });
    }
  }
);

module.exports = router;
