// Tạo một Promise bị từ chối và xử lý lỗi.

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Error occurred!");
  }, 2000);
});

promise.then(
  (value) => {
    console.log(value);
  },
  (error) => {
    console.log(error);
  }
);
