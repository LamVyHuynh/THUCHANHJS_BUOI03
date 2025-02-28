// Tạo hàm trả về Promise giả lập thời gian chờ.

function fakeTimeOut(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise is resolved");
    }, time);
  });
}

fakeTimeOut(5000).then((result) => {
  console.log(result);
});