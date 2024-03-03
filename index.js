const express = require("express")
const ejs = require('ejs');
const path = require("path");

const app = express();

// Set up environment variables for MongoDB connection
app.set('views', path.join(__dirname, 'views'));
console.log("path= ", path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', async (req, res) => {
    try {
      
        res.render('index');
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});
app.listen(8050, () => {
    console.log("server is on..........")
})
