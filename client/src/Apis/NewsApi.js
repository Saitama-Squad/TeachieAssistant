import React, { Component } from "react";

class NewsApi extends Component {
  render() {
    const NewsAPI = require("newsapi");
    const newsapi = new NewsAPI("e17a903971b3486fb9dbdc0ab6a798b4");
    var data1, data2, data3;

    newsapi.v2
      .topHeadlines({
        //sources: 'bbc-news,the-verge',
        q: "Computer",
        category: "technology",
        //language: 'en',
        //country: 'in'
      })
      .then((response) => {
        console.log(response);
      }); //otherwise use  console.log(response);

    // To query /v2/everything
    // You must include at least one q, source, or domain
    newsapi.v2
      .everything({
        q: "Computer",
        sources: "bbc-news,the-verge",
        domains: "bbc.co.uk, techcrunch.com",
        //from: '2020-10-07',
        //to: '2020-11-07',
        language: "en",
        sortBy: "popularity",
        page: 1,
      })
      .then((response) => {
        console.log(response);
      }); //otherwise use  console.log(response);

    // To query sources
    // All options are optional
    newsapi.v2
      .sources({
        category: "technology",
        language: "en",
        country: "in",
      })
      .then((response) => {
        console.log(response);
      }); //otherwise use  console.log(response);

    //var adds = JSON.parse(data2, );
    //var user = adds[5] ;
    //console.log(user) ;
    return <div></div>;
  }
}

export default NewsApi;
