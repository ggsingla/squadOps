const teamSchema=require('../schemas/team');
const bodyParser = require("body-parser");
const express=require('express');
const uuid = require("uuid");
const hackSchema=require('../schemas/hack');

app = express();
const router = express.Router();
router.use(express.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.post('/add', (req, res) => {
    try {
        const id = uuid.v4();
        const team = new teamSchema({
            leadername: req.body.leadername,
            leaderemail: req.body.leaderemail,
            hackathonname: req.body.hackathonname,
            hakathonid: req.body.hakathonid,
            teamname: req.body.teamname,
            teamid:req.body.teamid,
            teammembers:req.body.teammembers,
            completed:req.body.completed,
            teamsize:req.body.teamsize,
            reqirements:req.body.reqirements,
            id:id
        });
        team
            .save()
            .then((result) => {
                res.send(result);
            })
            .catch((err) => {
                console.log(err);
                res.sendStatus(500);
            });
        
        

    } catch (err) {
        console.log(err);
        res.sendStatus(500);
    }
});

router.get('/show',(req,res)=>{
    try{
        teamSchema.find({})
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