const express = require('express');
const htmlRoutes = require('./routes/htmlRoutes');
const apiRoutes = require('./routes/apiRoutes');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


const PORT = process.env.PORT || 3000;

// Set up promises with mongoose
mongoose.Promise = global.Promise;
// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/nyTimes",
  {
    useMongoClient: true
  } 
);

app.use('/', htmlRoutes);
app.use('/api', apiRoutes);



app.listen(PORT, ()=> {
    console.log("Listening on port " + 3000);
})