let a = Number((prompt('moi ban nhap chieu dai')));
let b = Number((prompt('moi ban nhap chieu dai')));
if ((Number.isInteger(a))&&(Number.isInteger(b))) {
    if (a>2 && b>2) {
        document.write('<pre>'); 
        for(i=0;i<a;i++){
            for(j=0;j<b;j++) {
                if(i==0||i==a-1||j==0||j==b-1) {
                    document.write('* ');
                }else {
                    document.write('  ');
                }
            }
            document.write("<br/>");
        }
        document.write('</pre>'); 
    } else {
        document.write('vui long nhap chieu dai va chieu rog lon hon 2 de in hinh chu nhat rong');
    }
} else {
    document.write('vui long nhap chieu dai va rong la so nguyen');
}
