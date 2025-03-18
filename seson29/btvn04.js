const tasks = [];
let taskId = 1;

function addTask() {
    let name = prompt("Nhập tên công việc:");
    let description = prompt("Nhập mô tả công việc:");
    let startTime = prompt("Nhập thời gian bắt đầu:");
    let status = "Chưa hoàn thành";
    
    tasks.push({ id: taskId++, name, description, startTime, status });
    console.log("Công việc đã được thêm!");
}

function displayTasks() {
    if (tasks.length === 0) {
        console.log("Không có công việc nào.");
        return;
    }
    console.table(tasks);
}

function updateTaskStatus() {
    let id = parseInt(prompt("Nhập ID công việc cần cập nhật trạng thái:"));
    let task = null;
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].id === id) {
            task = tasks[i];
            break;
        }
    }
    if (task) {
        task.status = task.status === "Chưa hoàn thành" ? "Hoàn thành" : "Chưa hoàn thành";
        console.log("Cập nhật trạng thái thành công!");
    } else {
        console.log("Không tìm thấy công việc!");
    }
}

function filterTasks() {
    let status = prompt("Nhập trạng thái cần lọc (Hoàn thành/Chưa hoàn thành):");
    let filteredTasks = tasks.filter(t => t.status === status);
    console.table(filteredTasks);
}

function selectionSortTasks() {
    let n = tasks.length;
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (tasks[j].status < tasks[minIndex].status) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            [tasks[i], tasks[minIndex]] = [tasks[minIndex], tasks[i]];
        }
    }
    console.log("Danh sách công việc sau khi sắp xếp:");
    console.table(tasks);
}

function menu() {
    while (true) {
        let choice = prompt("Chọn chức năng:\n1. Thêm công việc\n2. Hiển thị công việc\n3. Cập nhật trạng thái\n4. Lọc công việc\n5. Sắp xếp công việc\n6. Thoát");
        switch (choice) {
            case "1": addTask(); break;
            case "2": displayTasks(); break;
            case "3": updateTaskStatus(); break;
            case "4": filterTasks(); break;
            case "5": selectionSortTasks(); break;
            case "6": console.log("Thoát chương trình"); return;
            default: console.log("Lựa chọn không hợp lệ!");
        }
    }
}

menu();
