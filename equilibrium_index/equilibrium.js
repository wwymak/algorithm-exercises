
if (process.argv.length < 2) {
    console.log("Please pass in array to test");
    process.exit(-1);
}

let input = process.argv[2];
input = JSON.parse(input);
console.log(input)

console.log(`Your test arr is ${input}`);
// const testArr = [-7,1,5,2 ,-4 ,3,0];

/** idea-- get the sum of the array, then go through the array element by element
from the beginning, saving the sum of values from the start (startSum), and the sum of values
from the end (endSum), which is the sumOfElements - startSum - inputArr[i + 1]
(the inputArr [i +1] is the potential equilibrium element)
if the startSum === endSum then the index i +1 is the equilibrium
**/
function equilibrium(inputArr) {
    let arrlen = inputArr.length;

    // you can't have an equilibrium index for an empty array
    if(arrlen === 0) {
        return -1
    }

    let sumOfElements = 0;
    for (let i = 0; i< arrlen; i++) {
        sumOfElements += inputArr[i];
    }

    let startSum = 0;
    let endSum = sumOfElements;
    let startIndex = 0;
    let returnVal = -1

    for (let i = 0; i < arrlen; i++) {
        startSum += inputArr[i]
        endSum = sumOfElements - startSum - inputArr[i + 1]

        if(startSum === endSum) {
            returnVal = i +1
            break
        }
    }

    return returnVal
}

let output = equilibrium(input)
console.log(`the equilibrium index is ${output}`)
