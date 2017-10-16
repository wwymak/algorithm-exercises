/**
Implementation of mergesort algorithm (as per Tim Roughgarden's book)
**/
let testArr = [17, 12, 11, 61, 74, 72, 73, 52, 77, 40];

let merge = function (arr1, arr2 ) {
    let i = 0;
    let j = 0;
    let temp = [];
    for (let k = 0; k < (arr1.length + arr2.length); k++) {
        if(i === arr1.length && j < arr2.length) {
            temp = temp.concat(...arr2.slice(j, arr2.length));
            break;
        }
        if(j === arr2.length && i < arr1.length) {
            temp = temp.concat(...arr1.slice(i, arr1.length));
            break;
        }
        if(arr1[i] < arr2[j]) {
            temp[k] = arr1[i]
            i += 1
        } else {
            temp[k] = arr2[j]
            j += 1
        }
    }
    return temp
}

let sort = function(inputArr) {
    let output;
    let a = inputArr.slice(0, Math.floor(inputArr.length /2))
    let b = inputArr.slice(Math.floor(inputArr.length /2), inputArr.length)

    if(a.length ===1 && b.length ===1) {
        output = merge(a, b)
    }
    else if(a.length ===1 && b.length > 1) {
        output = merge(a, merge([b[0]], [b[1]]))
    } else if(b.length ===1 && a.length > 1) {
        output = merge(merge([a[0]], a[1]), b)
    }
    else {
        let c = sort(a)
        let d = sort(b)
        output = merge(c, d)
    }
    console.log(output, 'outpu')
    return output
}
