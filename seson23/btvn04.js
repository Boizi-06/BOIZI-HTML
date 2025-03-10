let a = Number(prompt('nhap so luong pha tu ban muon them vao trong mang'));
let array = [];
let newAr = [];
if (a > 0 && Number.isInteger(a)) {
    let count =0;
    for(i=0;i<a;i++) {
        array[i] = prompt(`moi ban nhap phan thu ${i+1}`);
        if(Number(array[i])) {
            newAr.push(array[i]);
            count ++;
        }
    }
    if(count>0) {
        console.log('khong co phan tu nao la so');
    } else {
        console.log(newAr);
    }
  
} else {
    console.log('so luong phan tu nhap vao khong hop le ');
}