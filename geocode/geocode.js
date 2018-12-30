const request = require("request");

const { mapsKey } = require("../api.js");

const geocodeAddress = (address, cb) => {
  let encodedAddress = encodeURIComponent(address);

  request(
    {
      url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=${mapsKey}`,
      json: true
    },
    (error, response, body) => {
      if (error) {
        cb("Unable to connect to Google servers.");
      } else if (body.status === "ZERO_RESULTS") {
        cb("Unable to find address.");
        console.log();
      } else if (body.status === "OK") {
        cb(undefined, {
          address: body.results[0].formatted_address,
          longitude: body.results[0].geometry.location.lng,
          latitude: body.results[0].geometry.location.lat
        });
      }
    }
  );
};

module.exports = { geocodeAddress };
