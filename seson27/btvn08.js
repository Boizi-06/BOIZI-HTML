let str = "3875";
let array = str.split("");

console.log (xapxep (array).join(""));


function xapxep (array) {
    
    for(i=0;i<array.length-1;i++) {
        for(j=i+1;j<array.length;j++) {
            if(array[i] < array[j]) {
                let temp = array[i];
                array[i] = array[j]
                array[j] = temp;
            }
        }
    }
    return array;
}