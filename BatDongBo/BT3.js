// Tạo hàm fakeAsync nhận callback và thực thi sau 3 giây.

function fakeAsync(callback) {
  setTimeout(callback, 3000);
}

fakeAsync(() => {
  console.log("Hello, fakeAsync!");
});
