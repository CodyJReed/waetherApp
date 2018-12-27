var getUser = (id, callback) => {
  const user = {
    id: id,
    name: "Cody"
  };

  setTimeout(() => {
    callback(user);
  }, 3000);
};

getUser(2000, user => {
  console.log(user);
});
