let years = Number(prompt('nhap so nam kinh No cua nhan vien'));
if (years < 1) {
    alert('qua non not moi vao nghe a em');
} else if (years>1&&years<3) {
    alert('nhan vien co kinh ngiem');
}else if (years>3&&years<6) {
    alert('chuyen vien');
} else if (years>6&&years<10){
    alert('quan li')
}else {
    alert('bo cua quan li');
}