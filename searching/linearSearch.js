function linearSearch(arr, data) {
    let matchingEleIndex = -1;
    for(let i in arr) {
        if(arr[i] === data) {
            matchingEleIndex = i
        }
    }
    return matchingEleIndex;
}

(() => {
    const matchingEleIndex = linearSearch([10, 4, 43, 5, 57], 5)
    console.log(matchingEleIndex);
    process.exit(0);
})()