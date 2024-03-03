const mongoose = require('mongoose');


//const MONGODB_URI = process.env.MONGODB_URI || 'defaultFallbackValueIfEnvVarNotSet';
// Use MONGODB_URI in your application

mongoose.connect("mongodb://localhost:27017/Deployment-testing", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

module.exports = db;

