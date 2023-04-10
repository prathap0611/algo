// 1. Given k, initialize an array of k elements with 0
// 2. Iterate through array and update countArr
// 3. Iterate through countArr to calculate countArr position which will help to place the actual arr elements in appropriate position
// 4. Iterate through arr and place the elements as per countArrPosition

function countingSort(arr, k) {
    let initialArr = Array.from({length: k+1}).fill(0)
    countArr = arr.reduce((countArr, ele) => {
        countArr[ele] += 1;
        return countArr;
    }, initialArr);

    let countArrPosition = countArr.reduce((arr, ele, index) => {
        if(index > 0) {
            arr[index] = ele + arr[index - 1];
        }
        return arr
    }, countArr);

    let returnVal = [];

    for(let i = arr.length-1; i>=0; i--) {
        const ele = arr[i];
        countArrPosition[ele] = countArrPosition[ele] - 1
        returnVal[countArrPosition[ele]] = arr[i]
    }

    return returnVal;
}

(() => {
    const sortedArr = countingSort([2,1,1,0,5,2,4,0,2,8,7,7,9,2,0,1,9], 9)
    console.log(sortedArr);
    process.exit(0);
})()
