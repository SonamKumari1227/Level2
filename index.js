const express = require("express")
const app = express();
app.get('/', (req, res) => {
    res.send("hello , am i visible to you,,,,,,,,,,,,,,")
})


app.listen(8050, () => {
    console.log("server is on..........")
})
