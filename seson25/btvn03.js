let array = [];
let flag = true;
let a = Number(prompt('moi ban nhap phan tu muon them vao mang'));
for(i=0;i<a;i++) {
    array[i] = Number(prompt(`phan tu ${i+1}`));
    if(Number.isInteger(array[i]) != true) {
        console.log('du lieu khong hop le');
        flag=false;
        break;
    }
}
if(flag) {
    soChan(array);
}


function soChan (arr) {
    let sochan = "";
    for(i=0;i<arr.length;i++) {
        if(arr[i] % 2 == 0) {
            sochan+=arr[i]+" ";
        }
    }
    console.log(sochan);
}