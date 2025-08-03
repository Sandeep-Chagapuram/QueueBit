import express from "express"
import Item from "../models/item.js"
import User from "../models/user.js"

const router = express.Router()

router.post("/addIntoMenu",async(req,res)=>{
    const item = new Item(req.body)
    await item.save()
    res.status(201)
    
})
router.get("/menu",async(req,res)=>{
    const items = await Item.find()
    res.json(items)
})
router.get("/clearMenu",async(req,res)=>{
    await Item.deleteMany({})
    res.send("")
})

router.post("/addOrder",async(req,res)=>{
    const order = new User(req.body)
    await order.save()
    res.send("")
    
    
})
router.get("/orders",async(req,res)=>{
    const orders = await User.find()
    res.send(orders)
})
router.post("/removeUser",async(req,res)=>{
    let n = req.body.token
    await User.findOneAndDelete({token: n})
    res.send("")
    
})
router.get("/count",async(req,res)=>{
    const count = await User.countDocuments()
    res.send(count)
})
router.get("/token",async(req,res)=>{
    const count = await User.countDocuments()
    res.send(count)
})

export default router