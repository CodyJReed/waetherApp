var asyncAdd = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof a === "number" && typeof b === "number") {
        resolve(a + b);
      } else {
        reject("Arguments must be numbers.");
      }
    }, 1500);
  });
};

asyncAdd(5, 7)
  .then(
    res => {
      console.log("Result:", res);
      return asyncAdd(res, 33);
    },
    errMsg => {
      console.log(errMsg);
    }
  )
  .then(
    res => {
      console.log("Should be 45", res);
    },
    errMsg => {
      console.log(errMsg);
    }
  );

// var somePromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // resolve("We're figuring this out.");
//     reject("Uhoh...");
//   }, 2500);
// });
//
// somePromise.then(
//   msg => {
//     console.log("Success:", msg);
//   },
//   errMsg => {
//     console.log("Error:", errMsg);
//   }
// );
