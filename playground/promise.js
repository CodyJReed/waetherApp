var somePromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve("We're figuring this out.");
    reject("Uhoh...");
  }, 2500);
});

somePromise.then(
  msg => {
    console.log("Success:", msg);
  },
  errMsg => {
    console.log("Error:", errMsg);
  }
);
