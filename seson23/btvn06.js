let a = Number(prompt('nhap vao so pahn tu ban muon them vao mang'));
let array = [];
let fla = ["","NaN",0,"false","null", "undifenid"];
for(i=0; i<a ; i++) {
    array[i] = prompt(`moi ban nhap phan tu thu ${i+1}`);
    for (j=0 ; j<fla.length; j++) {
        if(array[i] == fla[j]){
            array.splice(i,1);
        }
    }
}
console.log(array);