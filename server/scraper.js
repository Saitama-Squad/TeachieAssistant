const Nightmare = require("nightmare");
const cheerio = require("cheerio");
const nightmare = Nightmare({ show: true });
const url = "https://www.w3schools.com/python/";

nightmare
  .goto(url)
  .wait("body")
  .evaluate(() => document.querySelector("body").innerHTML)
  .end()
  .then((response) => {
    console.log(getData(response));
  })
  .catch((err) => {
    console.log(err);
  });

let getData = (html) => {
  data = [];
  const $ = cheerio.load(html);
  $("div#leftmenuinner").each((i, elem) => {
    data.push($(elem).text());
  });
  return data;
};
