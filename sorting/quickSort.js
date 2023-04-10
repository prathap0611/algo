// 1. choose first element in an array as partition element
// 2. split the array into two arrays with first array values less than partition element and  second array with values greater than partition element
// 3. recursively repeat the process until we get an array with one element

function quickSort(arr) {
    let partitionElement, leftSubArray = [], rightSubArray = [];

    if(arr.length > 1) {
        partitionElement = arr[0];

        for(let i = 1; i<arr.length; i++) {
            if(arr[i] < partitionElement) {
                leftSubArray.push(arr[i])
            } else {
                rightSubArray.push(arr[i])
            }
        }
        return [...quickSort(leftSubArray), partitionElement, ...quickSort(rightSubArray)]
    } else {
        return arr;
    }

}

(() => {
    const sortedArr = quickSort([50, 25, 92,16, 76, 30, 43, 54, 19])
    console.log(sortedArr);
    process.exit(0);
})()