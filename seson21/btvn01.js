let number =0;
let sum =0;
for(i=1;i<6;i++) {
    number=Number(prompt(`nhap so thu ${i}`));
    if(Number.isInteger(number)) {
    if(number % 2 != 0) {
        sum+=number;
    }
    }else {
        console.log('vui long nhap so nguyen ');
        break;
    }
}console.log(`tong cac so le ban vua nhap la ${sum}`);
