let monney = Number(prompt('nhap so tien '));
let thang = Number(prompt('nhap so thang '));
let lai = Number(prompt('nhap so lai xuat ( %)'));
let ketQua = monney * Math.pow(((lai/100)+1),thang);
console.log(ketQua.toFixed(3));