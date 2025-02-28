// Tạo một Promise trả về kết quả sau 2 giây.

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Hello, Promise!");
  }, 2000);
});

promise.then((value) => {
  console.log(value);
});
