// Viết hàm bất đồng bộ sử dụng async/await để chờ kết quả của một Promise.

async function asyncFunc() {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Hello, async/await!");
    }, 3000);
  });

  const value = await promise;
  console.log(value);
}

asyncFunc();
