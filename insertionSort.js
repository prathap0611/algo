function insertionSort(arr) {
    let key, j;
    for(let i=1; i<arr.length;i++) {
        key = arr[i];
        j = i
        while(key < arr[j-1] && j >=1) {
            arr[j] = arr[j-1];
            j--
        }
        arr[j] = key
    }
    return arr;
}

(() => {
    const sortedArr = insertionSort([10, 4, 43, 5, 57])
    console.log(sortedArr);
})()