let a = [1,2,3,4,5,5,3,2,3,3,3,1,0];
let num = 0;
let b = prompt('nhap gia tri ban muon tim trong mang');
for(i=0;i<a.length;i++) {
    if(a[i]==b) {
        num++;
    }
}
if (num == 0) {
    console.log('gia tri ban tim 0 co trong mang');
} else  {
    console.log(`gia tri ${b} xuat hien ${num} lan trong mang`);;
}