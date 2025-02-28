// Kết nối 3 Promise liên tiếp.

new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 1");
  }, 2000);
})
  .then((value) => {
    console.log(value);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Promise 2");
      }, 2000);
    });
  })
  .then((value) => {
    console.log(value);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Promise 3");
      }, 2000);
    });
  })
  .then((value) => {
    console.log(value);
  });
