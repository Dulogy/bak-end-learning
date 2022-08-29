require("dotenv").config();
const expres = require("express");
const app    = expres();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const port = 5500;

const authRoutes = require("./routes/auth");
// db connection
mongoose.connect(process.env.DATABASE,{
    useNewUrlParser : true,
    useUnifiedTopology : true,
})
.then(()=> {
    console.log("DB connected");
})
.catch((err) => {
    console.log("error here",err);
})

// middlewares
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

//console.log("hello",process.env.PORT,process.env.DATABASE);
// const port = 1000;


// routes
app.get("/",(req,res)=>{
    return res.send("hlo");
})
app.use("/api",authRoutes);

// starting server
app.listen(port,() => {
    console.log(`app is running at port ${port}`)
});