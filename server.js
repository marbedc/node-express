const path = require("path");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// Home route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Redirect routes
app.get("/climate-crisis", (req, res) => {
    res.redirect("https://github.com/whichcat/Save-the-Polar-Bears");
});
app.get("/typesetting", (req, res) => {
    res.redirect("https://github.com/marbedc/typesetting");
});
app.get("/four-algorithms", (req, res) => {
    res.redirect("https://github.com/marbedc/four-sorting-algo-phase1");
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
