// Viết hàm sử dụng nhiều lần await.

async function multipleAwait() {
  const firstPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("First promise is resolved");
    }, 3000);
  });
  console.log(firstPromise);
  const secondPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Second promise is resolved");
    }, 2000);
  });
  console.log(secondPromise);
}
multipleAwait();
