let a = Number(prompt('moi ban nhap so thu nhat'));
let b = Number(prompt('moi ban nhap so thu nhat'));
let c = Number(prompt('moi ban nhap so thu nhat'));
let denTa = Math.pow(b,2) - (4*a*c);
let x1 =0;
let x2 =0;
if (denTa >0 ) {
    x1 = (-b  + Math.sqrt(denTa)) / 2*a;
    x2 = (-b  - Math.sqrt(denTa)) / 2*a;
    console.log(`phuong trinh co 2 no pb x1 = ${x1} va x2 = ${x2}`);
} else if (denTa == 0 ) {
    x1 = x2 = -b / 2*a;
    console.log(`phuong trinh co 2 no kep  x1 = x2 = ${x1}`);
} else {
    console.log('phuong trinh vo nghiem');
}