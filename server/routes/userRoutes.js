import express from "express"

const router = express.Router()

router.get('/menu',(req,res)=>{
    res.send("loaded menu")
})

export default router