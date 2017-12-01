const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.resolve(__dirname, "public")));

app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "public", "index.html"));
});

app.listen(process.env.PORT || 5000 , () => {
    console.log("Arreando");
})
