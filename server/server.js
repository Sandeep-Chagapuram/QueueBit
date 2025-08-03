import express from "express"
import connnectDB from "./config/db.js"
import cors from "cors"
import userRoutes from "./routes/userRoutes.js"
import ownerRoutes from"./routes/ownerRoutes.js"

const app = express()
app.use(cors())
app.use(express.json())
app.use("/user",userRoutes)
app.use("/owner",ownerRoutes)

connnectDB()

app.listen(3000,()=>{
    console.log("running server..");
    
})

