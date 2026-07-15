import express from "express"
import routes from "./routes/routes.js"
import { errorMiddleware } from "./middlewares/errorMiddleware.js"

const app=express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use("/api", routes)
app.use(errorMiddleware);

app.listen(8000,()=>{
     console.log(`🚀 ~ 8000`)
})