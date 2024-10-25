/*function factorial(n){
//guard clause
    if (n < 1){
        return;
    }
    let result = 1;
    for(let i = 1; i <=n; i++){
        result *= i;
    }
    return result;
}
//console.log(factorial(7));

function newFactorial(n) {
    if (n > 0){
        let result = 1;
    for(let i = 1; i <=n; i++){
        result *= i;
    }
    return result;
    } else {
        return;
    }
} */

/*function checkSpaces(n, yesterday, today){
    let count = 0;
    for (let i = 0; i < n; i++){
        if(yesterday[i] === `C && today`[i] === "C"){
            count++;
        }

    }
    return count;
}

console.log(checkSpaces(5, "CC..C", ".CC.."));*/


//binary to decimal ??? --> 9A5 = 

/*function btd(binary){
    let decimal = 0;
    for(let i =0; i<binary.length; i++){
        if(binary[binary.length - i - 1] === "1"){
            decimal = decimal + Math.pow(2,i);
                
        }
    }
    return decimal;
}

console.log(btd("1101"));*/







/*function dtb(decimal){
    let binary = 0;
    while(let i = 0; i<decimal.length; i++){
        if(decimal[decimal.length - i - 1] === "1"){
            binary = binary / Math.pow(2,i);
        }
    }
return binary;
}

console.log(dtb("1"));*/



function dtb(dec){
    let binary = "";
    if (dec === 0){
        return 0;
    }
    while(dec > 0){
        let remainder = dec % 2
        binary = remainder + binary;
        dec = Math.floor(dec/2);
    }
    return binary;
}
console.log(dtb(9));






