const Nightmare = require("nightmare");
const cheerio = require("cheerio");
const nightmare = Nightmare({ show: true });
// const url = "https://www.udemy.com/course/julialang/";

nightmare
  .goto("https://duckduckgo.com")
  .type("#search_form_input_homepage", "mern udemy")
  .click("#search_button_homepage")
  .wait("#r1-0 a.result__a")
  .click("#r1-0 a.result__a")
  .wait(".course-card--image-wrapper--Sxd90 img")
  .click(".course-card--image-wrapper--Sxd90 img")
  .click('button[data-purpose="expand-toggle"]')
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
  $("span.section--item-title--2k1DQ").each((i, elem) => {
    data.push($(elem).text());
  });
  return data;
};
