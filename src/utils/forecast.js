const request = require("request");

const forecast = (latitude, longtitude, callback) => {
  const url = `https://api.darksky.net/forecast/ac4c29f0e92770fd2b6969297f5953a0/${latitude},${longtitude}?units=si`;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather service!", undefined);
    } else if (body.error) {
      callback("Unable to find location", undefined);
    } else {
      callback(
        undefined,
        `${body.daily.data[0].summary} It is currently ${body.currently.temperature} degrees out.
There is a ${body.currently.humidity} chance of rain.`
      );
    }
  });
};

module.exports = forecast;
