require("dotenv").config();
const connectDB = require("./db/connect");
const Product = require("./models/products")
const Productjson = require("./products.json");
const start = async()=>{
    try {
        await connectDB(process.env.MONGODB_URL);
        await Product.deleteMany()
        await Product.create(Productjson)   
        console.log("succes");
    } catch (error) {
        console.log(error);
    }
}
start()