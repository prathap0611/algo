// 1. choose mid element in an array
// 2. split the array into two arrays before and after mid element
// 3. recursively repeat the process until we get an array with one element
// 4. Merge the subArrays in a sorted order

function mergeSort(arr) {
    if (arr.length > 1) {
        let leftSubArray = [], rightSubArray = [];
        const midIndex = Math.ceil(arr.length / 2);
        leftSubArray = mergeSort(arr.slice(0, midIndex));
        rightSubArray = mergeSort(arr.slice(midIndex, arr.length));
        let result = [];

        while (leftSubArray.length && rightSubArray.length) {
            if (leftSubArray[0] < rightSubArray[0]) {
                result.push(leftSubArray.shift())
            } else {
                result.push(rightSubArray.shift())
            }
        }

        result = [...result, ...leftSubArray, ...rightSubArray];
        return result;
    } else {
        return arr
    }
}

(() => {
    const sortedArr = mergeSort([50, 25, 92, 16, 76, 30, 43, 54, 19, 5])
    console.log(sortedArr);
    process.exit(0);
})()