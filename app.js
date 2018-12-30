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

geocodeAddress(argv.a, (errMsg, rslt) => {
  if (errMsg) {
    console.log(errMsg);
  } else {
    console.log(rslt.address);
    getWeather(rslt.latitude, rslt.longitude, (errMsg, wthrRslt) => {
      if (errMsg) {
        console.log(errMsg);
      } else {
        console.log(wthrRslt);
      }
    });
  }
});
