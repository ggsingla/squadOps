const express = require("express");
const mongoose = require("mongoose");
const logSchema = require("../schemas/log");
const bycrpt = require("bcrypt");
const bodyParser = require("body-parser");
const uuid = require("uuid");
const { execPath } = require("process");

app = express();
const router=express.Router();
router.use(express.json());
router.use(bodyParser.urlencoded({ extended: true }));
router.post("/", async(req, res) => {
  
  try {
    const oldUser=await logSchema.findOne({email:req.body.email});
    if(oldUser){
        res.sendStatus(400);
    }
    const encrpytPass = bycrpt.hashSync(req.body.password, 10);
    const id = uuid.v4();
    const log = new logSchema({
      name: req.body.name,
      email: req.body.email.toLowerCase(),
      password: encrpytPass,
      id: id,
    });
    await log.save();
    res.send(log);
  } 
  catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

module.exports = router;