const express = require('express');
const app = express();
const path = require("path");
const port = process.env.PORT || 80;
const members = {
    id:"asdsad",
    Name:"asds",
    Age:"12"
}

// Middleware code to handle req and next 
/*const logger = (req,res,next)=>{
    console.log(
        `${req.protocol}://${req.get('host')}${req.originalUrl}`);
     next();
};
app.use(logger);*/



//Just an example below
/*app.get('/',(req,res)=> {
    res.sendFile(path.join(__dirname,"/","index.html"));
    
});*/

//set static folder to serve html css etc
app.use(express.static(path.join(__dirname,"/")));


//GETS json response in postman
app.get('/api/members',(req,res)=>{
    res.json(members)
});

app.listen(port,()=> console.log(`server listening at port: ${port}`));