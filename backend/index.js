const express = require("express");
const rootRouter = require("./routes/index");
const cors = require('cors');
const {Port} = require("./config")

const app = express();
app.use(cors());
app.use(express.json())

app.use("/api/v1", rootRouter); 

app.listen(Port, ()=>{
    console.log("server is running");
});