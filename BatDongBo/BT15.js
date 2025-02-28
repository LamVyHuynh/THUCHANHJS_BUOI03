// Sử dụng fetch để lấy dữ liệu từ một API.

fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => response.json())
  .then((data) => console.log(data));
