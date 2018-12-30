const yargs = require("yargs");

const { geocodeAddress } = require("./geocode/geocode.js");
const { getWeather } = require("./forecast/forecast.js");

const argv = yargs
  .options({
    a: {
      demand: true,
      alias: "address",
      describe: "Address to fetch weather for.",
      string: true
    }
  })
  .help()
  .alias("help", "h").argv;

getWeather(36.0244067, -83.93834749999999, (errMsg, wthrRslt) => {
  if (errMsg) {
    console.log(errMsg);
  } else {
    console.log(JSON.stringify(wthrRslt, undefined, 2));
  }
});

// geocodeAddress(argv.a, (errMsg, rslt) => {
//   if (errMsg) {
//     console.log(errMsg);
//   } else {
//     console.log(JSON.stringify(rslt, undefined, 2));
//   }
// });
