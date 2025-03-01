let toan = Number(prompt('nhap diem mon toan'));
let van = Number(prompt('nhap diem mon van'));
let anh =Number(prompt('nhap diem mon anh'));

let diemTb = (toan+van+anh)/3;
diemTb.toFixed(2);
if (diemTb>=8){
    console.log('ban xep loai gioi');
} else if (diemTb>6.5&&diemTb<7.9) {
    console.log('ban xep loai kha');
}else if (diemTb>5&&diemTb<6.5) {
    console.log('ban xep loai trung binh');
} else {
    console.log('ban xep loai trung yeu');
}