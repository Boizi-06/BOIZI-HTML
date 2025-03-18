let courses = [];
let students = [];

// Thêm khóa học
function addCourse() {
    const newCourse = {
        id: courses.length + 1,
        Name: prompt('Nhập tên khóa học:'),
        teacher: prompt('Nhập tên giáo viên:'),
        students: []
    };
    courses.push(newCourse);
    console.log('Đã thêm khóa học thành công!');
}

// Tìm kiếm khóa học theo tên
function searchCourseByName() {
    let inputCourse = prompt('Nhập tên khóa học:');
    let foundCourse = courses.find(c => c.Name === inputCourse);
    if (foundCourse) {
        console.log(foundCourse);
    } else {
        console.log('Khóa học không tồn tại.');
    }
}

// Xóa khóa học
function deleteCourse() {
    let inputCourse = prompt('Nhập tên khóa học bạn muốn xóa:');
    let indexCourse = courses.findIndex(c => c.Name === inputCourse);
    if (indexCourse !== -1) {
        courses.splice(indexCourse, 1);

        // Xóa khóa học khỏi danh sách đăng ký của sinh viên
        students.forEach(student => {
            let index = student.registeredCourses.indexOf(inputCourse);
            if (index !== -1) {
                student.registeredCourses.splice(index, 1);
            }
        });

        console.log('Xóa khóa học thành công.');
    } else {
        console.log('Khóa học không tồn tại.');
    }
}

// Thêm sinh viên mới
function addStudent() {
    const newStudent = {
        id: students.length + 1,
        Name: prompt('Nhập tên người dùng:'),
        registeredCourses: []
    };
    students.push(newStudent);
    console.log('Thêm sinh viên thành công.');
}

// Đăng ký khóa học
function registerCourse() {
    let studentName = prompt('Nhập tên sinh viên:');
    let student = students.find(s => s.Name === studentName);

    if (!student) {
        console.log('Sinh viên không tồn tại.');
        return;
    }

    let courseName = prompt('Nhập tên khóa học muốn đăng ký:');
    let course = courses.find(c => c.Name === courseName);

    if (!course) {
        console.log('Khóa học không tồn tại.');
        return;
    }

    if (student.registeredCourses.includes(courseName)) {
        console.log('Bạn đã đăng ký khóa học này.');
    } else {
        student.registeredCourses.push(courseName);
        course.students.push(studentName);
        console.log(`Sinh viên ${studentName} đã đăng ký khóa học ${courseName}.`);
    }
}

// Hủy đăng ký khóa học
function unregisterCourse() {
    let studentName = prompt('Nhập tên sinh viên:');
    let student = students.find(s => s.Name === studentName);

    if (!student) {
        console.log('Sinh viên không tồn tại.');
        return;
    }

    let courseName = prompt('Nhập tên khóa học muốn hủy đăng ký:');
    let index = student.registeredCourses.indexOf(courseName);

    if (index === -1) {
        console.log('Sinh viên chưa đăng ký khóa học này.');
        return;
    }

    student.registeredCourses.splice(index, 1);
    let course = courses.find(c => c.Name === courseName);
    if (course) {
        course.students = course.students.filter(s => s !== studentName);
    }

    console.log(`Sinh viên ${studentName} đã hủy đăng ký khóa học ${courseName}.`);
}

// Hiển thị danh sách khóa học của sinh viên
function showStudentCourses() {
    let studentName = prompt('Nhập tên sinh viên:');
    let student = students.find(s => s.Name === studentName);

    if (!student) {
        console.log('Sinh viên không tồn tại.');
    } else {
        console.log(`Danh sách khóa học của ${studentName}:`, student.registeredCourses);
    }
}


do {
    choice = Number(prompt('moi ban nhap lua chn'));

    switch (choice) {
        case 1:
            addCourse();
            break;
        case 2:
            searchCourseByName();
            break;
        case 3:
            deleteCourse();
            break;
        case 4:
            addStudent();
            break;
        case 5:
            registerCourse();
            break;
        case 6:
            unregisterCourse();
            break;
        case 7:
            showStudentCourses();
            break;
        case 8:
            console.log('Thoát chương trình.');
            break;
        default:
            console.log('Lựa chọn không hợp lệ.');
            break;
    }
} while (choice !== 8);
