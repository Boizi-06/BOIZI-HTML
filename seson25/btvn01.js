let array = [];
let a = Number(prompt('moi ban nhap phan tu muon them vao mang'));
for(i=0;i<a;i++) {
    array[i] = Number(prompt(`phan tu ${i+1}`));
   
}
soLonnhat(array);
function soLonnhat (array) {
    let min = array[0];
        for(i=0;i<array.length;i++) {
            if(min>array[i]) {
                min = array[i];
            }
        }
    console.log(min);
}