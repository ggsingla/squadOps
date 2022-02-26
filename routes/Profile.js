const profileSchema=require('../schemas/profile');
const bodyParser = require("body-parser");
const express=require('express');
const logSchema = require("../schemas/log");

app = express();
const router = express.Router();
router.use(express.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.post('/add', async (req, res) => {
    try {
        const user = await logSchema.findOne({ email: req.body.email });
        const id=user.id;
        const profile = new profileSchema({
            id:id,
            desc: req.body.desc,
            skills: req.body.skills,
            socialLinks: req.body.socialLinks,
            gender:req.body.gender,
            pic:req.body.pic,
            location:req.body.location.toLowerCase(),
            edu:req.body.edu,
            discord:req.body.discord
        });
        profile
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

router.post('/show',async (req,res)=>{
    try{
        const pr=await profileSchema.findOne({email:req.body.email});
        res.send(pr);
    }
    catch(err){
        res.sendStatus(500);
    }
});

module.exports=router;