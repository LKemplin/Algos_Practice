// Countdown
// Create a function that accepts a number as an input. Return a new array that counts down by one, from the number (as array’s ‘zeroth’ element) down to 0 (as the last element). How long is this array?

function countdown(num) {
    countdownArray = [];
    for (i=num; i>=0; i--) {
        countdownArray.push(i);
    }
    console.log(countdownArray);
}

countdown(5);
countdown(50);

// Print and Return
// Your function will receive an array with two numbers. Print the first value, and return the second.

function printReturn(array) {
    console.log(array[0]);
    return array[1];
}

printReturn([6, 5]);

// First Plus Length
// Given an array, return the sum of the first value in the array, plus the array’s length. What happens if the array’s first value is not a number, but a string (like "what?") or a boolean (like false).

function firstPlusLength(array2) {
    let sum = 0;
    if (typeof array2[0] === "number") {
        sum = array2[0] + array2.length;
        console.log(sum)
    } else {
        console.log("This is not a number")
    }
}

firstPlusLength([2, 5, 6, 8])
firstPlusLength(["coffee", 6, 25, "cats are dumb", true])

// Values Greater than Second
// For [1,3,5,7,9,13], print values that are greater than its 2nd value. Return how many values this is.

function valuesGreaterThanSecond(array3) {
    let count = 0;
    for (i=2; i<array3.length; i++) {
        if (array3[i] > array3[1]) {
            console.log(array3[i]);
            count++;
        }
    }
    console.log(count + " values are greater than the second.")
}

valuesGreaterThanSecond([1, 3, 5,7,9, 13])
valuesGreaterThanSecond([8, 2, 3, 1, 89])
valuesGreaterThanSecond([1])