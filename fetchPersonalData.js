const rp = require('request-promise')
const $ = require('cheerio')
 
const fetchPersonalData = function(url) {
    return rp(url).then(function(data) {
        console.log($('.firstHeading', data)).text()
        console.log($('.bday', data)).text()
        return {
            name: $('.firstHeading', data).text(),
            birthdate: $('.bday', data).text()
        }
    }).catch(err =>{
        console.log("Error :: ", err);
    })
} 