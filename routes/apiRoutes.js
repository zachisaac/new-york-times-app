const express = require('express');
const router = express.Router();
const path = require('path');
const cheerio = require('cheerio');
const axios = require('axios');





router.get('/scrape', (req, res)=> {
  
    axios.get('https://www.nytimes.com/section/sports').then(result =>{
       
        const $ = cheerio.load(result.data);
        const articles = $('article');
        articles.forEach(element => {
            console.log(element, "article ---------------")
        })
      
    })
    res.send('scrape complete')
});




module.exports = router;