const express = require('express');
const router = express.Router();
const path = require('path');
const cheerio = require('cheerio');
const axios = require('axios');
const models = require('../models');





router.get('/scrape', (req, res)=> {
 
    axios.get('https://www.nytimes.com/section/sports').then(result =>{
       
        const $ = cheerio.load(result.data);
        const articles = $('article h2');
        articles.each((i, element) => {
           // console.log($(element).text(), "article ---------------");
            var item = {
                title: $(element).text(),
                summary: $(element).siblings('.summary').text(),
                url: $(element).find('a').attr('href')
            }
          
            models.Article.create(item).then(result => {
                console.log("Article Added to DataBase")
            })
        })
        res.send('scrape complete')
    })
  
});

router.get('/articles', (req,res)=>{
    console.log("in articles")
    models.Article.find({}).then(results => {
        res.send(results);
    })
})




module.exports = router;