import mongoose from "mongoose";

const itemSchema = mongoose.Schema({
    name: String,
    price:Number,
    qty:{
        type:Number,
        default:0,
    }
})
const Item = mongoose.model('Item',itemSchema)

export default Item