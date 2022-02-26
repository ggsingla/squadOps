const mongoose=require('mongoose');

const teamSchema=new mongoose.Schema({
    id:{type:String,required:true},
    leadername:{type:String,required:true},
    leaderemail:{type:String,required:true},
    hackathonname:{type:String,required:true}, 
    hakathonid:{type:String,required:true},
    teamname:{type:String,required:true},
    teamid:{type:String,required:true},
    teammembers:{type:Array,default:[]},
    completed:{type:Boolean,default:false},
    teamsize:{type:Number,deafult:1},
    reqirements:{type:Array,required:true},
    meesages:{type:Object,default:{}}
});

teamSchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id;
        delete ret.hash;
    }
});
module.exports=mongoose.model('team',teamSchema);