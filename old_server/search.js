const prompt = require("prompt-sync")();
const https = require("https");
const { url } = require("inspector");
const SUBSCRIPTION_KEY = "3aa21a3a5e364924a9d61d1d3b6a23b4";
if (!SUBSCRIPTION_KEY) {
  throw new Error("AZURE_SUBSCRIPTION_KEY is not set.");
}

function bingWebSearch(query) {
  var url = "";
  https.get(
    {
      hostname: "api.bing.microsoft.com",
      path: "/v7.0/search?q=" + encodeURIComponent(query),
      headers: { "Ocp-Apim-Subscription-Key": SUBSCRIPTION_KEY },
    },
    (res) => {
      let body = "";
      res.on("data", (part) => (body += part));
      res.on("end", (url) => {
        for (var header in res.headers) {
          if (
            header.startsWith("bingapis-") ||
            header.startsWith("x-msedge-")
          ) {
            continue;
          }
        }
        var json = JSON.parse(body);
        url = json["webPages"]["value"][0]["url"];
        console.log(url);
      });
      res.on("error", (e) => {
        console.log("Error: " + e.message);
        throw e;
      });
    }
  );
}

const query = process.argv[2] || "Microsoft Bing Search Services";
bingWebSearch(query);
