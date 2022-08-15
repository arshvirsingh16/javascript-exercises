const removeFromArray = function replace(array, num) {
    let newArray = array;
    let length = newArray.length;

    for(i = 0; i < length; i++) {
        if(num == newArray[i]) {
            newArray.splice(i , 1);
        }
    }
    
    let changedArray = newArray;
    return changedArray;
};

// Do not edit below this line
module.exports = removeFromArray;
