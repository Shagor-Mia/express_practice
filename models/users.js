const jwt = require('jsonwebtoken')

const {Schema,model} = require('mongoose');


const userSchema = Schema({
    name:{
        type:String,
        require:true,
        minlength:5,
        maxlength:100,
    },

    email:{
        type:String,
        require:true,
        minlength:8,
        maxlength:255,
        unique:true

    },

    password:{
        type:String,
        require:true,
        minlength:5,
        maxlength:1024,

    },

    role:
    {
      type:String,
      enum:['user','admin'],
      default:'user'
    }
})

userSchema.methods.genJWT= function(){
    const token = jwt.sign({_id:this._id,email:this.mail,role:this.role},process.env.MysecretKey)
    return token
}

const User = model('User',userSchema)

module.exports.User = User;