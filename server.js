// server.js
const path = require("path");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// add any necessary code you'd want to!

//root
app.get('/', (req, res) => {
    // your nav bar is on index.html
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
    //res.sendFile(path.join(__dirname, 'index.html'))
})


// Route for Climate Crisis
app.get("/climate-crisis", (req, res) => {
    res.redirect("https://github.com/whichcat/Save-the-Polar-Bears");
});

// Route for Typesetting
app.get("/typesetting", (req, res) => {
    res.redirect("https://github.com/marbedc/typesetting");
});

// Route for Four Algorithms
app.get("/four-algorithms", (req, res) => {
    res.redirect("https://github.com/marbedc/four-sorting-algo-phase1");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});