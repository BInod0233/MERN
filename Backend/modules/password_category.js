const mongoose = require("mongoose");
var dotenv = require("dotenv");

mongoose
  .connect("mongodb://localhost:27017/mernpms", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })

  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.error("Could not connect to MongoDB..."));
var conn = mongoose.Collection;

var passcatSchema = new mongoose.Schema({
  password_category: {
    type: String,
    required: true,
  },
  user_id: {
    type: String,
    required: true,
  },

  date: {
    type: Date,
    default: Date.now,
  },
});

var passCateModel = mongoose.model("password_categories", passcatSchema);
module.exports = passCateModel;
