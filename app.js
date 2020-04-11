const express = require('express');
const app = express();

app.get('/', (req,res) => {
  res.send("is this thing working ?");
});

app.listen(8000, () =>{
  console.log("Server connnected!");
});

