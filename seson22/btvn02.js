let number = [1,2,3,4,5,6,7,8,9];
let a = Number(prompt('nhap so ban muon tim'));
if(number.indexOf(a) >= 0) {
    console.log('bingo');
} else {
    console.log('chuc ban may man lan sau');
}