// Thực hiện 3 tác vụ tuần tự bằng Promise.

function task(message, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(message);
    }, delay);
  });
}

task("Task 1", 1000)
  .then((result) => {
    console.log(result);
    return task("Task 2", 2000);
  })
  .then((result) => {
    console.log(result);
    return task("Task 3", 3000);
  })
  .then((result) => {
    console.log(result);
  });
