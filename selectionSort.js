function selectionSort(arr) {
    let minIndex, temp;
    for(let i=0; i<arr.length;i++) {
        minIndex = i;
        for(let j=i+1; j<arr.length; j++) {
            if(arr[minIndex] > arr[j]) {
                minIndex = j;
            }
        }
        temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
    return arr;
}

(() => {
    const sortedArr = selectionSort([10, 4, 43, 5, 57])
    console.log(sortedArr);
})()