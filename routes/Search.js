const express = require("express");
const bodyParser = require("body-parser");
const profile=require("../schemas/profile");

const router=express.Router();
router.use(express.json());
router.use(bodyParser.urlencoded({ extended: true }));
router.post("/location", async(req, res) => {   
    try{
        const location=await profile.find({location:req.body.location.toLowerCase()});
        
        res.send(location);
    }
    catch(err){
        res.sendStatus(500);
    }

});

router.post("/skills", async(req, res) => {   
    try{
        const user=await profile.find({});
        const  out=[];  
        user.forEach(element => {
            if(element.skills.includes(req.body.skills)){
                out.push(element);
            }
        });
        res.send(out);
    }
    catch(err){
        res.sendStatus(500);
    }

});

module.exports = router;