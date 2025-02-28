// Viết hàm bất đồng bộ xử lý lỗi bằng try...catch.

function asyncFunc() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Error occurred!");
    }, 3000);
  });
}

async function handleAsyncFunc() {
  try {
    await asyncFunc();
  } catch (error) {
    console.log(error);
  }
}

handleAsyncFunc();