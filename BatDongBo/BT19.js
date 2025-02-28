// Gọi 2 API giả lập, API thứ 2 phụ thuộc kết quả của API thứ 1.

function fetchUser() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ id: 1, name: "Nguyen Van A", age: 20 });
    }, 3000);
  });
}

function fetchPost(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(["post 1", "post 2"]);    
    }, 2000);
  });
}

fetchUser().then((user) => {
  console.log(user);
  fetchPost(user.id).then((post) => {
    console.log(post);
  });
});
