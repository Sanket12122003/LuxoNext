import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type : String,
        required : true,
        unique : true
    },
    password:{
        type : String,
        required : true
    }
},
  { timestamps: true}

)

const user = mongoose.model('User',userSchema);

export default user;