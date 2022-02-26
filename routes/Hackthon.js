const hackSchema=require('../schemas/hack');
const bodyParser = require("body-parser");
const express=require('express');
const uuid = require("uuid");

app = express();
const router = express.Router();
router.use(express.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.post('/add', (req, res) => {
    try {
        const id = uuid.v4();
        const hack = new hackSchema({
            name: req.body.name,
            dates: req.body.dates,
            venue: req.body.venue,
            size: req.body.size,
            id:id
        });
        hack
            .save()
            .then((result) => {
                res.sendSatus(200);
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
        hackSchema.find({})
        .then((result)=>{
            res.send(result);
        })
        .catch((err)=>{
            console.log(err);
            res.sendStatus(500);
        })
    }
    catch(err){
        console.log(err);
        res.sendStatus(500);
    }
});

module.exports=router;