// Tạo 3 hàm bất đồng bộ gọi nhau tuần tự bằng callback.

function fakeAsync1(callback) {
  setTimeout(() => {
    console.log("Hello, fakeAsync1!");
    callback();
  }, 3000);
}

function fakeAsync2(callback) {
  setTimeout(() => {
    console.log("Hello, fakeAsync2!");
    callback();
  }, 3000);
}

function fakeAsync3() {
  setTimeout(() => {
    console.log("Hello, fakeAsync3!");
  }, 3000);
}

fakeAsync1(() => {
  fakeAsync2(() => {
    fakeAsync3();
  });
});

