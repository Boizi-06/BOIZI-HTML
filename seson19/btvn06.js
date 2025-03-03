alert('cho phuwng trình bậc 2 có dạng ax^2 + bx +c = 0 hay nhap 3 so abc mà ban muon giai ptring');
let a = Number(prompt('so thu nhat'));
let b = Number(prompt('so thu hai'));
let c = Number(prompt('so thu ba'));
let denTa = Math.pow(b,2) - 4*a*c;

if (denTa <0) {
    alert('phuong trinh vo no');
} else if (denTa == 0) {
    let noKep = -b/2*a;
    alert(`phuong trinh co 1 no kep x1=x2=${noKep}`);
} else {
    let x2 = (-b+Math.sqrt(denTa))/2*a;
    let x1 = (-b-Math.sqrt(denTa))/2*a;
    alert (`phuong trinh co 2 no phan biet x1 = ${x1} va x2 ${x2}`);
}