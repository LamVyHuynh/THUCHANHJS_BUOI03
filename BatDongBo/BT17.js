// Xử lý lỗi khi gọi API.

async function fetchData() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log("Error: ", error);
    }
}

fetchData(); // In ra dữ liệu sau khi đã fetch xong hoặc in ra lỗi nếu có.
