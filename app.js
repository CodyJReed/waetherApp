const request = require("request");

const google = require("./api.js");

request(
  {
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=2131%20woodrow%20drive%20knoxville&key=${
      google.default
    }`,
    json: true
  },
  (error, response, body) => {
    console.log(`Address: ${response.body.results[0].formatted_address}`);

    console.log(`Longitude: ${response.body.results[0].geometry.location.lng}`);

    console.log(`Latitude: ${response.body.results[0].geometry.location.lat}`);
  }
);
