// Tạo hàm giả lập tiến trình tải với Promise.

function fakeLoading() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data loaded");
    }, 3000);
  });
}

async function loading() {
  const data = await fakeLoading();
  console.log(data);
}

loading(); // In ra "Data loaded" sau 3 giây.