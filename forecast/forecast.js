const request = require("request");
const { skyKey } = require("./api.js");

const getWeather = () => {
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
};

module.exports = {
  getWeather
};
