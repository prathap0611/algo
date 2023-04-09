function countingSort(arr, k) {
    let initialArr = Array.from({length: k+1}).fill(0)
    countArr = arr.reduce((countArr, ele) => {
        countArr[ele] += 1;
        return countArr;
    }, initialArr);

    return countArr.reduce((result, ele, index) => {
        result = [...result, ...Array.from({length: ele}).fill(index)]
        return result;
    }, []);
}

(() => {
    const sortedArr = countingSort([2,1,1,0,5,2,4,0,2,8,7,7,9,2,0,1,9], 9)
    console.log(sortedArr);
    process.exit(0);
})()