// The following program checks the binary search algorithm
const readline = require('readline-sync');
function binarySearch(array, key) {
    let start = 0;
    let end = array.length + 1;

    while (start <= end) {
        let middle = Math.floor((start + end) / 2);

        if (array[middle] === key) {
            // found the key
            return middle;
        } else if (array[middle] < key) {
            // continue searching to the right
            start = middle + 1;
        } else {
            // search searching to the left
            end = middle - 1;
        }
    }
    // key wasn't found

    return -1;
}

array = new Array();

let lengthOfArray = readline.questionInt("Enter the length of array");
for (let i = 0; i < lengthOfArray; i++) {
    let num = readline.question("Enter element:  ");
    array.push(num);
}
key = readline.question("Enter element to be searched");
// arr = ['akshay', 'c', 'k']
console.log(binarySearch(array, key));

