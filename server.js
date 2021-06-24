const express = require("express");
const app = express();

const path = require("path")

app.get("/", function(req, res){

    res.sendFile( path.join(__dirname, "./index.html") );
    
})
// app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname));

const port = process.env.PORT || 5050;

app.listen(port, () => {
    console.log("running on " + port);
})