function binarySearch(arr, lb, ub, data) {
    if(lb < ub) {
        const midIndex = Math.floor((lb+ub) / 2);
        if (arr[midIndex] === data) {
            return midIndex;
        } else if (arr[midIndex] > data) {
            return binarySearch(arr, lb, midIndex, data);
        } else {
            return binarySearch(arr, midIndex+1, ub, data);
        }
    }
    return -1
}

(() => {
    const arr = [5, 9, 17, 23, 25, 45, 53, 67, 71, 89];
    const matchingEleIndex = binarySearch(arr, 0, arr.length - 1, 45)
    console.log(matchingEleIndex);
    process.exit(0);
})()