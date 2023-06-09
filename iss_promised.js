const request = require("request-promise-native");
const fetchMyIP = function() {
  return request("https://api.ipify.org?format=json");
};
const fetchCoordsByIP = function(body) {
  let ip = JSON.parse(body).ip;
  return request(`http://ipwho.is/${ip}`);
};
const fetchISSFlyOverTimes = function(body) {
  let parseBody = JSON.parse(body);
  const { latitude, longitude } = parseBody;
  const url = `https://iss-flyover.herokuapp.com/json/?lat=${latitude}&lon=${longitude}`;
  return request(url);
};

const nextISSTimesForMyLocation = function() {
  return fetchMyIP()
    .then(fetchCoordsByIP)
    .then(fetchISSFlyOverTimes)
    .then((body) => {
      const { response } = JSON.parse(body);
      return response;
    });
};
module.exports = { nextISSTimesForMyLocation };
