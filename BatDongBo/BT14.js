// Giả lập tải dữ liệu bằng Promise.

function fakeFetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Fake data loaded");
        }, 3000);
    });
}

async function fetchData() {
    const data = await fakeFetchData();
    console.log(data);
}

fetchData(); // In ra "Fake data loaded" sau 3 giây.