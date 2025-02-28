// Lấy dữ liệu từ API bằng async/await.

async function fetchData() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    const data = await response.json();
    console.log(data);
}

fetchData(); // In ra dữ liệu sau khi đã fetch xong.