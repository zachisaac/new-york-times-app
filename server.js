const express = require('express');
const htmlRoutes = require('./routes/htmlRoutes');
const apiRoutes = require('./routes/apiRoutes');
const app = express();

app.use(express.static('public'));


const PORT = process.env.PORT || 3000;




app.use('/', htmlRoutes);
app.use('/api', apiRoutes);



app.listen(PORT, ()=> {
    console.log("Listening on port " + 3000);
})