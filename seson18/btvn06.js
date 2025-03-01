let year = Number(prompt("moi ban nhap muon kiem tra la nam nhuan"));
if (((year % 4 == 0) && (year % 100!= 0)) || (year%400 == 0)) {
    alert(`${year} la nam nhuan`);
} else {
    alert(`${year} la nam ko nhuan`);
}
 