function changeFirstItem(arr, value) {
    arr[0] = value;
}

let x = [6, 7, 1, 2];
let y = x;
changeFirstItem(x, true);

console.log(y);


// addToFront and removeFront
// as before, no use of .push(), .pop(), .splice(), etc.
// there's also no need for these functions to return anything
// (they can, but they don't need to - why?)
// addToFront(arr, value) - adds value to the start of arr, at index 0
// removeFront(arr) - removes the first item at the start of the array

function addToFront(arr, value) {
    // increase index by one
    // set value passed to 0
    for (var i = arr.length - 1; i >= 0; i--) {
        arr[i + 1] = arr[i]
    }
    arr[0] = value
}

function removeFront(arr) {
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i + 1]
    }
    arr.length = 5
}

function addMultipleToFront(arr, values) {
    for (var i = arr.length - 1; i >= 0; i--) {
        arr[i + 1] = arr[i]
    }
    arr[0] = values
}

let test_1 = [1, 2, 3, 4, 5];
addToFront(test_1, 6);
console.log(test_1); // should show [6, 1, 2, 3, 4, 5]
console.log(test_1.length); // should show 6
removeFront(test_1);
console.log(test_1); // should show [1, 2, 3, 4, 5]
console.log(test_1.length); // should show 5
addMultipleToFront(test_1, [8, 24, 58, 1])
console.log(test_1)


// bonus: can you make another version of these?
// addMultipleToFront(arr, values) - accepts an array of values, each of which
// is added to the front of the array
// addMultipleToFront([1, 2, 3], [4, 5, 6]) should result in [4, 5, 6, 1, 2, 3]
// removeMultipleFront(arr, count) - removes the first n items from the array,
// based on the value of count
// removeMultipleFront([4, 5, 6, 1, 2, 3], 2) should result in [6, 1, 2, 3]