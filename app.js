const request = require("request");
const yargs = require("yargs");

const google = require("./api.js");

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

request(
  {
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
      argv.a
    )}&key=${google.default}`,
    json: true
  },
  (error, response, body) => {
    if (error) {
      console.log("Unable to connect to Google servers.");
    } else if (body.status === "ZERO_RESULTS") {
      console.log("Unable to find address.");
    } else if (body.status === "OK") {
      console.log(`Address: ${response.body.results[0].formatted_address}`);

      console.log(
        `Longitude: ${response.body.results[0].geometry.location.lng}`
      );

      console.log(
        `Latitude: ${response.body.results[0].geometry.location.lat}`
      );
    }
  }
);
