require('dotenv').config()
const express = require('express')
const app = express();
const connectDB = require("./db/connect");

const PORT = process.env.PORT||5000;
const products_routes = require("./routes/products")
app.get("/",(req,res)=>{
    res.send("hi i am live")
})

app.use("/api/products",products_routes)

const cors=require("cors");
const corsOptions ={
   origin: true, 
   credentials:false,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions))



const start = async()=>{
    try {
        await connectDB(process.env.MONGODB_URL);
        app.listen(PORT,()=>{
            console.log(`${PORT} yes i am connected`);
        })
    } catch (e) {
        console.log(e)
    }
}
 start()