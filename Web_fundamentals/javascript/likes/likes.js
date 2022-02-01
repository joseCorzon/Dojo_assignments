var counter = 3
var counters = [9, 12, 9]
var select = document.querySelector(".likes1")
var select2 = document.querySelector(".likes2")
var select3 = document.querySelector(".likes3")
var containers = [select, select2, select3]
function like(i) {
    counters[i]++;
    containers[i].innerHTML = counters[i] + " like(s)"
}

// create 2 arrays, 1 to hold the numbers(counts). the other to hold the containers of the numbers.