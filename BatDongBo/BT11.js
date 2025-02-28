// Chạy song song 3 Promise và in ra kết quả của Promise hoàn thành đầu tiên.

const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise 1 won");
    }, 3000);
  });
  
  const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise 2 won");
    }, 2000);
  });
  
  const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise 3 won");
    }, 1000);
  });
  
  Promise.race([promise1, promise2, promise3]).then((result) => {
    console.log(result);
  });