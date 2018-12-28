// const yargs = require("yargs");
//
// const geocode = require("./geocode/geocode.js");
//
// const argv = yargs
//   .options({
//     a: {
//       demand: true,
//       alias: "address",
//       describe: "Address to fetch weather for.",
//       string: true
//     }
//   })
//   .help()
//   .alias("help", "h").argv;
//
// geocode.geocodeAddress(argv.a, (errMsg, rslt) => {
//   if (errMsg) {
//     console.log(errMsg);
//   } else {
//     console.log(JSON.stringify(rslt, undefined, 2));
//   }
// });
const request = require("request");
const { skyKey } = require("./api.js");

request(
  {
    url: `https://api.darksky.net/forecast/${skyKey}/36.0244067,-83.93834749999999`,
    json: true
  },
  (error, response, body) => {
    console.log(
      error || response.statusCode !== 200
        ? "Unable to connect to forecast.io"
        : body.currently.temperature
    );
  }
);
