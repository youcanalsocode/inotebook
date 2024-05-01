const { type } = require("@testing-library/user-event/dist/type");
const mongoose = require("mongoose");

const NotesSchema = newSchema({
  title: {
    type: String,
    required: true,
  },

  descr: {
    type: String,
    required: true,
  },

  tag: {
    type: String,
    required: true,
  },
  date: {
    type: Date.now,
    required: true,
  },
});
module.exports = mongoose.model("notes", NotesSchema);
