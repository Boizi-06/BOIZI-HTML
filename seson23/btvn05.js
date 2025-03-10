let a = Number(prompt('nhap vao so phan tu ban muon them vao mang'));
let array = [];
if(a == 0) {
    console.log('mang khong co phan tu nao'); 
} else if (a < 0) {
    console.log('so phan tu cua mmang khong duoc la so am') ;  
} else {
    let chu =0;
    let sum = 0;
    for(i=0;i<a;i++){
        array[i] = prompt(`nhap phan tu thu ${i+1}`);
        if(Number(array[i])) {
            sum+= Number(array[i]);
        } else {
            chu++;
        }
    }
    if (chu == array.length) {
        console.log('mag ko co phan tu nao la so');
    } else {
        console.log(`tong cac phan tu la so la : ${sum}`);
    }

}