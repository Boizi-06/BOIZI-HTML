let a = "" ;
for (i=1 ; i<=100 ; i++) {
    
    if (i % 15 == 0) {
        a = a +" " + "fizzbuzz";
    } else if ( i % 5 == 0) {
        a = a +" " + "fizz";
    } else if ( i % 3 ==0 ) {
        a = a +" " + "buzz";
    } else {
        a = a + " " + i ;
    }
}
console.log(a);