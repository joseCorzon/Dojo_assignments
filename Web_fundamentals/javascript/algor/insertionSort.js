//https://www.hackerearth.com/practice/algorithms/sorting/insertion-sort/visualize/

function insertionSort(arr){
    for(let x = 1; x < arr.length; x++){
        let j = x
        while(j > 0 && arr[j] < arr[j-1]){
            [arr[j], arr[j-1]] = [arr[j-1], arr[j]]
            j--
        }
    }
    return arr
}


