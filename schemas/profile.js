const mongoose=require('mongoose');

const profileSchema=new mongoose.Schema({
    id:{type:String},
    desc:{type:String},
    skills:{type:Object},
    socialLinks:{type:Object},
    gender:{type:String},
    pic:{type:String},
    location:{type:String},
    edu:{type:String},
    discord:{type:String}
});

profileSchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id;
        delete ret.hash;
    }
});
module.exports=mongoose.model('profile',profileSchema);