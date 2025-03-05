let a = prompt("nhap so ban muon kiem tra ");
let check = 0;
if (Number.isInteger(Number(a))) {
    for (i=0;i<= a.length/2;i++) {
        if (a[i]!=a[a.length-1-i]){
            check++;
            console.log('day khong phai so doi xung');
            break;
        }
    }
    if (check == 0) {
        console.log('day la so doi xung');
    }
} else {
    console.log('nhập số hợp lệ');
}

