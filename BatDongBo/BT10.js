// Chạy song song 3 Promise và in ra kết quả khi tất cả hoàn thành.

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 1 is resolved");
  }, 3000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 2 is resolved");
  }, 2000);
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 3 is resolved");
  }, 1000);
});

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values);
});