import mongoose from "mongoose";
const userSchema = mongoose.Schema({
    token:Number,
    order:[]
})

const User = mongoose.model('User',userSchema)

export default User