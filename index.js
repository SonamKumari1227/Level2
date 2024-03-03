const express = require("express")
const ejs = require('ejs');
const path = require("path");
const db=require("./conn/connection")
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const dotenv=require("dotenv")
const uname = require("./modals/user");
// Set up environment variables for MongoDB connection
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set('views', path.join(__dirname, 'views'));
console.log("path= ", path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', async (req, res) => {
    try {
        res.render('index');
    } catch (error) {
        res.status(500).send('Internal Server Error');
    }
});
app.post('/submitName', async (req, res) => {
    try {
        const { name } = req.body;
        const new_user = new uname({
            name: name,
        });
        await new_user.save();
      //  res.render('Confirmation');
        res.send("data saved successfully....."
    } catch (error) {
      
        res.status(500).send('Internal Server Error');
    }
});
app.listen(8050, () => {
    console.log("server is on..........")
})
