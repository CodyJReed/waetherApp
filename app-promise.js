const yargs = require("yargs");
const axios = require("axios");

const { mapsKey } = require("./api.js");
const { skyKey } = require("./api.js");

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

const encodedAddress = encodeURIComponent(argv.address);
const geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=${mapsKey}`;

axios
  .get(geocodeUrl)
  .then(res => {
    if (res.data.status === "ZERO_RESULTS") {
      throw new Error("Unable to find address.");
    }

    let lat = res.data.results[0].geometry.location.lat;
    let lng = res.data.results[0].geometry.location.lng;
    const forecastUrl = `https://api.darksky.net/forecast/${skyKey}/${lat},${lng}`;
    console.log(res.data.results[0].formatted_address);
    return axios.get(forecastUrl);
  })
  .then(res => {
    let temperature = res.data.currently.temperature;
    let apparentTemperature = res.data.currently.apparentTemperature;
    console.log(
      `It's currently ${temperature}. It feels like ${apparentTemperature}`
    );
  })
  .catch(err => {
    if (err.code === "ECONNREFUSED") {
      console.log("Unable to connect to API servers");
    } else {
      console.log(err.message);
    }
  });
