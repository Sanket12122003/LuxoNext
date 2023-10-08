import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type : String,
        required : true,
        unique : true
    },
    email: {
        type: String,
        required: true,
        unique: true,
      },
    password:{
        type : String,
        required : true
    },
    avatar:{
      type:String,
      default: "https://happytravel.viajes/wp-content/uploads/2020/04/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png"
    },
},
  { timestamps: true}

)

const user = mongoose.model('User',userSchema);

export default user;