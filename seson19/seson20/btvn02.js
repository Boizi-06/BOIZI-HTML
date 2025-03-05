let a = Number(prompt('tim uoc cua 5'));
let sum =0;
let chiaHet=" ";
if ((Number.isInteger(a))&&a>0) {
    for (let i =1 ; i<=a ; i++) {
        if (i%5==0){
            chiaHet= chiaHet + i + ",";
        }
    }
    console.log(`so chia het cho 5 trong khoang tu 1 den ${a} la:${chiaHet.slice(0,chiaHet.length-1)}`);
} else {
    console.log('ki tu ban vua nhap khong phai hop le ');
}
