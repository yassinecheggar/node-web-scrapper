const rp = require("request-promise")
const url = "###amazon_product_url_you_want_to_fetch_data###"
const $ = require("cheerio")

rp(url).then((html) => {
    // Page Load
    // console.log("HTML", html);
    console.log("Price :: ", $('.priceBlockBuyingPriceString', html).text());
    console.log("Price :: ", $('.a-size-base', html).text());
}).catch((error) => {
    // handle error
    console.log("Error: " + error);
})