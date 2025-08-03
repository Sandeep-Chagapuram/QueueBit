import mongoose from "mongoose";

const connnectDB= async()=>{
    await mongoose.connect("mongodb://localhost:27017/QueueBit")
}
export default connnectDB