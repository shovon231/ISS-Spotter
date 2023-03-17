const { nextISSTimesForMyLocation } = require("./iss_promised");
const { printPassTimes } = require("./index");

nextISSTimesForMyLocation().then((PassTimes) => {
  printPassTimes(PassTimes);
});
// .catch((error) => {
//   console.log("It didn't work: ", error.message);
// });
