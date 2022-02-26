const express = require("express");
const logSchema = require("../schemas/log");
const bycrpt = require("bcrypt");
const bodyParser = require("body-parser");

app = express();
const router = express.Router();
router.use(express.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.post("/", async (req, res) => {
  try {
    const oldUser = await logSchema.findOne({ email: req.body.email });

    if (oldUser) {
      if (bycrpt.compare(req.body.password, oldUser.password)) {
        res.send(oldUser);
      } 
      else {
        res.send({ error: "password is incorrect" });
      }
    } 
    else {
      res.send({ error: "email is incorrect" });
    }
  } 
  catch (err) {
    res.sendStatus(500);
  }
});

module.exports = router;
