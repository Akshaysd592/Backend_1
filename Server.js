const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());


app.listen(27017,()=>{
    console.log("server is started at port 3000")
});

app.get('/',(req,res)=>{
    res.send("hello this is my first server ")
});

app.post('/car',(request, response)=>{
    const{name , price} = request.body;
    console.log(name);
    console.log(price);
    response.send("This is a nice car");
})



const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/mydb", {
    useNewUrlParser:true,
    useUnifiedTopology:true,
})
.then(() => {console.log("Connection Successful")})
.catch( (error) => {console.log("Received an error")} );

