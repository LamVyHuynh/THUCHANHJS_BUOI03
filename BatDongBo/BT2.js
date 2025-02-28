// In ra số đếm từ 1 đến 5, mỗi giây một lần.

for (let i = 1; i <= 5; i++) {
  setTimeout(() => {
    console.log(i);
  }, i * 1000);
}
