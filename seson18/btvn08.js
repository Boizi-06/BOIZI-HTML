alert('nhap do dai ba canh cua tam giac ma ban muon kiem tra ');
let a = Number(prompt('nhap do dai canh thu nhat'));
let b = Number(prompt('nhap do dai canh thu hai'));
let c = Number(prompt('nhap do dai canh thu ba'));

if (a+b>c&&a+c>b&&b+c>a) {
    if(a==b&&b==c) {
        alert('day la tam giac deu');
    } else if ((a==b)||(b==c)||(c==a)){
        alert('day la tam giac can');
    } else if ((Math.pow(a,2)==Math.pow(b,2)+Math.pow(c,2)) || (Math.pow(b,2)==Math.pow(c,2)+Math.pow(a,2)) || (Math.pow(c,2)==Math.pow(b,2)+Math.pow(a,2))) {
        alert('day la tam giac vuong');
    } else {
        alert('day la tam giac thuong');
    }
} else {
    alert('day khong phai la tam giac');
}