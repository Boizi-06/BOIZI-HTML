let array = [1,2,3,4,6];
console.log( findNumber (array));
function findNumber (array) {
    let newArray =[];
    let step = array[1]-array[0];
    newArray.push(array[0],array[1]);
    for(i=2;i<array.length;i++) {
        if(array[i] - step != array[i-1]) {
            newArray.splice(i,1,array[i]-step,array[i]);
        } else {
            newArray.push(array[i]);
        }
    }
    return newArray;
}