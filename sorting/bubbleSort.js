function bubbleSort(arr) {
    let temp;
    for(let i=0; i<arr.length;i++) {
        for(let j=0; j<arr.length; j++) {
            if(arr[j] > arr[j+1]) {
                temp = arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

(() => {
    const sortedArr = bubbleSort([10, 4, 43, 5, 57])
    console.log(sortedArr);
})()