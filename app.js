const express = require('express');
const app = express();

app.get('/', (req,res) => {
  res.send("is this thing working? are you sure???");
});


app.get("/r/:routeparam", (req,res) => {
  console.log(req.params);
  res.send("this is from param" + " " + req.params.routeparam);
});

app.get("/r/:routeparam/comment/:id/:title", (req,res) => {
  console.log(req.params);
  res.send("this is from id.. title");
});

app.get('*', (req,res) => {
  res.send("Its not you, its me... :(");
});

app.listen(8000, () =>{
  console.log("Server connnected!");
});