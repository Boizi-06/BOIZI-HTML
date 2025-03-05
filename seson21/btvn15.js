let  b = prompt('nhap vao so tien ban muon rut');
let a ="";
for(i=0;i<b.length;i++) {
    if(b[i]!= ".") {
        a+=b[i];
    }
}
let tien =0;
if(a % 1000 ==0 ) {
    if(a/500000>=1){
        tien=Math.floor(a/500000);
        document.write(` co ${tien} to tien 500.000vnd`);
        a = a - tien *500000;
    }
    document.write("<br/>");
    if(a/200000>=1){
        tien=Math.floor(a/200000);
        document.write(` co ${tien} to tien 200.000vnd`);
        a = a - tien *200000;
    }
    document.write("<br/>");
    if(a/100000>=1){
        tien=Math.floor(a/100000);
        document.write(` co ${tien} to tien 100.000vnd`);
        a = a - tien *100000;
    }
    document.write("<br/>");
    if(a /50000>=1 ){
        tien=Math.floor(a/50000);
        document.write(` co ${tien} to tien 50.000vnd`);
        a = a - tien *50000;
    }
    document.write("<br/>");
    if(a/20000>=1){
        tien=Math.floor(a/20000);
        document.write(` co ${tien} to tien 20.000vnd`);
        a = a - tien *20000;
    }
    document.write("<br/>");
    if(a/10000>=1){
        tien=Math.floor(a/10000);
        document.write(` co ${tien} to tien 10.000vnd`);
        a = a - tien *10000;
    }
    document.write("<br/>");
    if(a/5000>=1){
        tien=Math.floor(a/5000);
        document.write(` co ${tien} to tien 5.000vnd`);
        a = a - tien *5000;
    }
    document.write("<br/>");
    if(a/2000>=1){
        tien=Math.floor(a/2000);
        document.write(` co ${tien} to tien 2.000vnd`);
        a = a - tien *2000;
    }
    document.write("<br/>");
    if(a/1000>=1){
        tien=Math.floor(a/1000);
        document.write(` co ${tien} to tien 1.000vnd`);
        a = a - tien *1000;
    }
} else {
    document.write('vui long nhap so tien chia het cho 1000vnd');
}


