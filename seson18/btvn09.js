alert(' nhap so thoi gian o dinh dang 24 gio ma ban muon chuyen sang 12 gio');
let gio = Number(prompt("moi ban nhap gio"));
let phut = Number(prompt('nhap so phut'));
let giay = Number(prompt('nhap ve so giay'));
if((gio>=0&&gio<=23)&&(phut>=0&&phut<=59)&&(giay>=0&&giay<=59)){
    console.log('ngay thang hop le ')
}else {
    alert('gio phut giay ko hop le ');
}
if (gio>=12&&gio<=23) {
    gio=gio-12;
    if(gio<10&&phut<10&&giay<10){
        alert(`0${gio}:0${phut}:0${giay}PM`);
    } else if (gio<10&&phut<10) {
        alert(`0${gio}:0${phut}:${giay}PM`);
    } else if (gio<10&&giay<10) {
        alert(`0${gio}:${phut}:0${giay}PM`);
    } else if (gio<10) {
        alert(`0${gio}:${phut}:${giay}PM`);
    } else if (phut<10) {
        alert(`${gio}:0${phut}:${giay}PM`);
    } else {
        alert(`${gio}:${phut}:0${giay}PM`);
    }
} else if (gio>=0&&gio<12) {
    if(gio<10&&phut<10&&giay<10){
        alert(`0${gio}:0${phut}:0${giay}AM`);
    } else if (gio<10&&phut<10) {
        alert(`0${gio}:0${phut}:${giay}AM`);
    } else if (gio<10&&giay<10) {
        alert(`0${gio}:${phut}:0${giay}AM`);
    } else if (gio<10) {
        alert(`0${gio}:${phut}:${giay}AM`);
    } else if (phut<10) {
        alert(`${gio}:0${phut}:${giay}AM`);
    } else {
        alert(`${gio}:${phut}:0${giay}AM`);
    }
    
}
