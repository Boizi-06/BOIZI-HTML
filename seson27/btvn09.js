let array2 =[1,6,3,2,5,8,7,4];

let array = array2.filter(function(element){
    return element % 2 == 0;
});
let soChan =  xepXep (array);
console.log(soChan); 

let result =  chenSochan (array2,array);
console.log(result);
function chenSochan (array2,array) {
    console.log(array);
    let j=0;
    let newArray = [];
    for(i=0;i<array2.length;i++) {
        if(array2[i] % 2 == 0) {
            newArray.push(array[j]);
            j++;
        } else {
            newArray.push(array2[i]);
        }
    }
    return newArray;
}
function xepXep (array) {
    for(let i=0;i<array.length-1;i++) {
        for(let j = i+1;j<array.length;j++) {
            if(array[i] >array[j]) {
                let temp = array[j];
                array[j] = array[i];
                array[i] = temp;
            }
        }
    }
    return array;
}





