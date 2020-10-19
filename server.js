const express = require("express");
const app = express();

app.get("/", (req,res) => {
    // console.log(request);
    res.send("<h1>Hello world</h1>");
})

app.listen(3000, function(){
    console.log("Server has started on port 3000");
});