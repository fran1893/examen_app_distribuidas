const express = require('express');
const cheerio = require('cheerio');
const axios = require('axios');
const { join } = require('path');

const app = express();
const PORT = 4000;
const URL = 'https://quotes.toscrape.com/';

app.use(express.static(join(__dirname, 'public')));


app.get('/scraper', (req, res) => {

    axios(URL)
        .then(response => {
            const html = response.data;

            const $ = cheerio.load(html);

            const frases = []
            $('.quote', html).each(function () {                
                const nombreAutor = $(this).find('.author').text();
               
                const fraseAutor = $(this).find('.text').text();

                const linkAutor = URL + $(this).find('a').attr('href');

                frases.push({
                    nombreAutor,
                    fraseAutor,
                    linkAutor
                });


            });

            
            res.json(frases)
        })
        .catch(err => console.log(err))
});




app.listen(PORT, () => {
    console.log(`Server Running...`)
});