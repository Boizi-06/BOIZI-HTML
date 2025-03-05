
document.write('<pre>'); 
for(i=10;i>0;i--) {
    for(j=0;j<i;j++) {
        document.write('*');
    }
    document.write("<br/>");
}
document.write("<br/>");
for ( i=1 ; i<=10 ; i++) {
    for(j=i;j>0;j--){
        document.write('*');
    }
    document.write("<br/>");
}
document.write("<br/>");
for ( i=1 ; i<=10 ; i++) {
    for(j=i;j>1;j--){
        document.write(' ');    
    }
    for(j=10;j>=i;j--){
        document.write('*');
    }
    document.write("<br/>");
    
}
document.write("<br/>");

for(i=10 ; i >=0 ;i--) {
    for(j=0;j<i;j++) {
        document.write(' ');
    }
    for(j=10;j>i;j--) {
        document.write('*');
    }
    document.write("<br/>");
    
}

document.write('</pre>'); 