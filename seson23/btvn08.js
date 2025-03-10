let a = Number(prompt('nhap so phan tu cua mang'));
let array = [];
if(a==0){
    console.log('khong phai day fibonacy');
}else if (a<0) {
    console.log('so luong phan tu cua mang khong duco la so am');

} else {
    let count=0;
    let sum = 0;
    for(i=0;i<a;i++) {
        array[i]= Number(prompt(`moi ban nhap phan tu thu ${i+1}`));
    }
    for(i=2;i<array.length;i++){ 
        if(i==array.length-1){
            break; 
        }                
         if(array[i-2]+array[i-1]!=array[i]){
            sum++
        }
    }
    if(sum>0){
        console.log('khong phai day fibopnacy');
    } else {
        console.log('day la day fiboancy');
    }
    
    
}