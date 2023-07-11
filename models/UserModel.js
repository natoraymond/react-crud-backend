import mongoose from "mongoose";
 
const User = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    gender:{
        type: String,
        required: true
    },
    // image:{
    //     type: String,
    //     required: true
    // },
    // postDate: { type: Date, default: Date.now }, 
});
 
export default mongoose.model('Users', User);