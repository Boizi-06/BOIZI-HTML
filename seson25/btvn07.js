let a = prompt('moi ban nhap mot chuoi');
chuoiDoixung(a);
function chuoiDoixung (b) {
    let flag = true;
    for(i=0;i<a.length/2;i++) {
        if(a[i] != a[a.length-1-i]) {
            console.log('khong phai chuoi doi xung');
            flag = false;
            return;
        }
    }
    if(flag) {
        console.log('day la chuoi doi xung');
    }
}