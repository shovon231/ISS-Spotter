// index.js
//const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes } = require("./iss");

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }

//   console.log("It worked! Returned IP:", ip);
// });
// let ip = "24.114.52.3";
// fetchCoordsByIP(ip, (error, ip) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }
//   //let coordinate = fetchMyIP(error, ipStr);
//   console.log("It worked! The cordinates are:", ip);
// });
// let coordinates = { latitude: 44.3893556, longitude: -79.6903316 };
// fetchISSFlyOverTimes(coordinates, (error, coords) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }

//   console.log("It worked! The cordinates are:", coords);
// });
// index.js

const { nextISSTimesForMyLocation } = require('./iss');
const printPassTimes = (passTimes)=>{
  for (const pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
}
nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  printPassTimes(passTimes);
});
