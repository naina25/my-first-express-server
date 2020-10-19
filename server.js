const express = require("express");
const app = express();

app.get("/", (req,res) => {
    res.send("<h1>Hello world</h1>");
})
app.get("/contact", (req,res) => {
    res.send("contact me @ nanu02d8@gmail.com");
})

app.get("/about", (req,res) => {
    res.send("Hey there! This is Naina Upadhyay and I am currently learning Express . Thank you everyone, Have a nice day :-* :-)");
})



app.listen(3000, function(){
    console.log("Server has started on port 3000");
});