const sumAll = function(num1, num2) {
    var totalSum = 0;

    if(num1 < 0 || num1 == "" || num1 == []){
        return "ERROR";
    }

    
    if(num2 < 0 || num2 == "" || num2 == []){
        return "ERROR";
    }

    if(num1 > num2){
        let temp = num1;
        num1 = num2;
        num2 = temp;
    }

    for(i = num1; i < num2 + 1; i++) {
        totalSum += i;
    }

    return totalSum;

};

// Do not edit below this line
module.exports = sumAll;
