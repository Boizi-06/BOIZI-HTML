alert('nhap 3 so ban muon tim so lon nhat ');
let a = Number(prompt('nhap so thu nhat'));
let b = Number(prompt('nhap so thu hai'));
let c = Number(prompt('nhap so thu ba'));
let max = (a>b) ? ((b>c)? a : c) : ((c>b)? c :b);
alert(max);