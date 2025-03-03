let text = prompt('moi nhap chuoi ma ban muon kiem tra');
text = text.trim();
let Length = text.length;
for(let i=0;i<Length;i++) {
    if (text[i]==" "){
        console.log('chuoi tren co chua khoang trang');
        break;
    }
}