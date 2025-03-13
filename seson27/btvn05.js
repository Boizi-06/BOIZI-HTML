let array = [1,2,3,4,5,6,7,8,9,10];



let n = 3;

console.log(chunkArray(array, n));

function chunkArray(array, n) {
    let result = []; 
    for (let i = 0; i < array.length; i += n) {
        let subArray = array.slice(i, i + n); 
        result.push(subArray);
    }
    return result;
}

