const express = require('express');

const app = express();

const PORT = 7000;

app.get("/", (req, res) => {res.send("<h1>welcome</h1>")});


app.listen(PORT, (err) => {
    if(err) console.log(err);
    else console.log("Server is listening at " + PORT);
});