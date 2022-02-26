const mongoose=require('mongoose');

const hackSchema=new mongoose.Schema({
    name:{type:String,required:true},
    dates:{type:Date,required:true},
    venue:{type:String,required:true},
    team:{type:Array,default:[]},
    id:{type:String,required:true},
    size:{type:Number,required:true}
});

hackSchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id;
        delete ret.hash;
    }
});
module.exports=mongoose.model('hack',hackSchema);