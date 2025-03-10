let a = Number(prompt('nhap so luong phan tu cua mang'));
let soLonnhat = 0;
let soLonThu2 = 0;
let array = [];
if ( a==0) {
    console.log('mang khong co phan tu nao');
} else if (a<0) {
    console.log('so phan tu cua mang khong duoc la so am');
} else {
    for(i=0;i<a;i++) {
        array[i] = Number(prompt(`nhap phan tu thu${i+1}`));
    }
    if(array[0] < array[1]){
        soLonnhat=array[1];
        soLonThu2=array[0];  
    } else {
        soLonnhat=array[0];
        soLonThu2=array[1];
    }
    for(i=2 ; i<array.length ; i++) {
        if(array[i]>soLonnhat && array[i]>soLonThu2) {
            soLonThu2=soLonnhat;
            soLonnhat=array[i];    
        } else if (array[i]>soLonnhat&&array[i]<soLonThu2){
            soLonnhat=array[i];
        }
    }
}
console.log(soLonThu2);
