// Truy cập phần tử
const taskInput = document.getElementById("taskInput");
const addInputButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");

// Xử lí sự kiện thêm công việc
addInputButton.addEventListener("click", function () {
  const taskText = taskInput.value.trim(); // lấy giá trị từ ô input
  if (taskText === "") {
    alert("Please enter a task");
    return;
  }

  // Tạo thêm thẻ li mới
  const listItem = document.createElement("li");
  listItem.textContent = taskText;

  //   Thêm x vào thẻ li
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "X";
  deleteButton.addEventListener("click", function () {
    taskList.removeChild(listItem);
  });
  listItem.appendChild(deleteButton);

  // Thêm vào danh sách
  taskList.appendChild(listItem);

  // Xoá nội dung trong ô input
  taskInput.value = "";
});

taskList.addEventListener("click", function (event) {
  const clickedItem = event.target; // Xác định mục được nhấp
  if (clickedItem.tagName === "LI") {
    taskList.removeChild(clickedItem);
  }
});

// Đánh dấu công việc đã hoàn thành khi nhấn đúp chuột
taskList.addEventListener("dbclick", function (event) {
  const clickedItem = event.target;
  if (clickedItem.tagName === "LI") {
    clickedItem.classList.toggle("completed");
  }
  // Lưu danh sách công việc vào localStorage
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.push(taskText);
  localStorage.setItem("tasks", JSON.stringify(tasks));
});
