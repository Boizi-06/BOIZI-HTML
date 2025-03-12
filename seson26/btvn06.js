
// Test với danh sách ngày tháng
let dateList = ["2025-03-12", "2024-12-25", "2023-07-01"];
let formattedDates = dateList.map(function (date) {
    let [year, month, day] = date.split("-");
    return `${day}/${month}/${year}`;
});

console.log(formattedDates); 
