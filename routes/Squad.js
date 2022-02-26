const teamSchema=require('../schemas/team');
const bodyParser = require("body-parser");
const express=require('express');
const uuid = require("uuid");
const hackSchema=require('../schemas/hack');
const { findOneAndUpdate } = require('../schemas/team');


app = express();
const router = express.Router();
router.use(express.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.post('/add', async (req, res) => {
    try {
        const id = uuid.v4();
        const team = new teamSchema({
            leadername: req.body.leadername,
            leaderemail: req.body.leaderemail,
            hackathonname: req.body.hackathonname,
            hackathonid: req.body.hackathonid,
            teamname: req.body.teamname,
            teammembers:req.body.teammembers,
            completed:req.body.completed,
            teamsize:req.body.teamsize,
            requirements:req.body.requirements,
            id:id
        });
        await team.save();
        
        var hack;
        hackSchema.findOne({id:req.body.hackathonid},(err,hackathon)=>{
            hack=hackathon;
            hack.team.push(id);
            
        });
        hackSchema.findOneAndUpdate({id:req.body.hackathonid},hack,(err,hackathon)=>{
            if(err)
                res.send(err);
            else
                console.log("updated");
        });
        res.sendStatus(200);

    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
});

router.post('/show',(req,res)=>{
    try{
        teamSchema.find({hackathonid:hackathonid})
        .then((result)=>{
            res.send(result);
        })
        .catch((err)=>{
            console.log(err);
            res.sendStatus(500);
        })
    }catch(err){
        console.log(err);
        res.sendStatus(500);
    }
});

router.post('/details',(req,res)=>{
    try{
        teamSchema.findOne({id:req.body.id})
        .then((result)=>{
            res.send(result);
        })
        .catch((err)=>{
            console.log(err);
            res.sendStatus(500);
        })
    }catch(err){
        console.log(err);
        res.sendStatus(500);
    }
});
module.exports=router;