"use strict";
const https = require("https");

module.exports.getExchangeRates = (event, context, callback) => {
  https
    .get("https://api.exchangeratesapi.io/latest", (res) => {
      let data = "";

      res.on("data", (chunk) => {
        data += chunk;
      });

      res.on("end", () => {
        callback(null, {
          statusCode: 200,
          body: data,
        });
      });
    })
    .on("error", (err) => {
      callback(new Error(`Error when fetching rates: ${err}`));
    });
};
