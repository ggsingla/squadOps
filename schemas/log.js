const mongoose=require('mongoose');

const logSchema=new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    password:{type: String,required: true},
    id:{type:String,required: true}
});

logSchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id;
        delete ret.hash;
    }
});
module.exports=mongoose.model('Log',logSchema);