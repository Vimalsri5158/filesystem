
const express = require ("express");

const fs = require ("fs");

const app = express();

const path = require("path");

const PORT = 5000;

app.get("/filesystem", (req, res) => {
    
    let timeStamp = Date.now();
    console.log(Math.floor(timeStamp / 1000))
fs.writeFileSync("./filesystem/date-time.txt", timeStamp.toString(), (err) => {
    if (err) throw err;
    console.log("Timestamp written to date-time.txt");
});
res.json({ timeStamp: timeStamp });

})


app.listen(PORT, ()=>{console.log("listening on port:", PORT)});