const rp = require("request-promise")
const $ = require("cheerio")
const url="https://en.wikipedia.org/wiki/List_of_Presidents_of_the_United_States"

rp(url).then((html) => {
    // deal with data
    // console.log("Data :: ", html)
    var wikiLen = $('b > a', html).length
    wikiUrls = []
    for(var i=0; i<wikiLen; i++) {
        wikiUrls.push($('b > a', html)[i].attribs.href)
    }

}).catch(err => {
    // handle error
    console.log("Error :: ", err)
})