import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import courseRoute from "./route/Course.route.js"
import userRoute from "./route/user.route.js"
import contactRoute from "./route/user.route.js"


import cors from "cors"

const app = express();
dotenv.config();
app.use(cors())
app.use(express.json())
const PORT = process.env.PORT || 3001;

const URI = process.env.mongoURI;
app.get("/ping",(req,res)=>{
  res.send("pong")
})
//connect to mongoDB
try {
  mongoose.connect(URI , {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
  console.log("connected to mongodb");
} catch (error) {
  console.log("error:", error);
}
//defining routes
app.use("/course", courseRoute)
app.use("/user",userRoute)
app.use("/contact",contactRoute)


app.listen(PORT,()=>{
console.log(`Server is connected at ${PORT}`)
});
