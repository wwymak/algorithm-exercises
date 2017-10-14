let endIndex = arrlen -1;

while ((startIndex !== endIndex) && (endIndex-startIndex !== 1) && (endIndex > startIndex)) {
    console.log(startIndex, endIndex, startSum, endSum)
    if(startSum > endSum) {
        endIndex -= 1
        endSum += inputArr[endIndex]

        console.log('condition1', startIndex, endIndex, startSum, endSum)
    } else if(startSum < endSum) {
        startIndex += 1
        startSum += inputArr[startIndex]
        console.log('condition2', startIndex, endIndex, startSum, endSum)
    } else {
        startSum += inputArr[startIndex]
        startIndex += 1
        endSum += inputArr[endIndex]
        endIndex -= 1
        console.log('condition3', startIndex, endIndex, startSum, endSum)
    }
}

if((endIndex - startIndex === 1 ) && (startSum === endSum)){
    return endIndex -1
} else if ((endIndex - startIndex === 0 ) &&  startSum=== 0 ) {
    return endIndex
} else {
    return -1
}
