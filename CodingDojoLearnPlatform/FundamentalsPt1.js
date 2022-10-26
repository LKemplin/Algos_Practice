// Setting and Swapping
// Set myNumber to 42. Set myName to your name. Now swap myNumber into myName & vice versa.

myNumber = 42
myName = "Lynsey"

function setAndSwitch() {
    let temp = myName;
    myName = myNumber;
    myNumber = temp;
    console.log(myName, myNumber)
}

setAndSwitch();

// Print -52 to 1066
// Print integers from -52 to 1066 using a FOR loop.

function printIntegers(){
    for (i = -52; i < 1067; i++) {
        console.log(i);
    }
}

printIntegers();

// Don’t Worry, Be Happy
// Create beCheerful(). Within it, console.log string "good morning!" Call it 98 times.

function beCheerful() {
    let count = 0;
    for (i=0; i<98; i++){
        console.log("Good Morning!");
        count +=1;
    }
    console.log(count);
}

beCheerful();

// Multiples of Three – but Not All
// Using FOR, print multiples of 3 from -300 to 0. Skip -3 and -6.

function multiplesOfThree() {
    for (i=3; i>=-300; i--) {
        if (i % 3 == 0 && i !== -3 && i !== -6) {
            console.log(i);
        }
    }
}

multiplesOfThree();

// Printing Integers with While
// Print integers from 2000 to 5280, using a WHILE.

function printIntWhile(num1, num2) {
    while (num1 <= num2) {
        console.log(num1);
        num1++;
    }
}

printIntWhile(2000, 5280);

// You Say It’s Your Birthday
// If 2 given numbers represent your birth month and day in either order, log "How did you know?", else log "Just another day...." 

function birthday(num1, num2) {
    array = [num1, num2]
    if (array.includes(1)){
        if (array.includes(15)) {
            console.log("How did you know?")
        } else {
            console.log("Just another day...");
        }
    } else {
        console.log("Just another day...");
    }
}

birthday(1, 15)
birthday(15, 01)
birthday(22, 6)
birthday(12, 25)
birthday(1, 1)

// Leap Year
// Write a function that determines whether a given year is a leap year. If a year is divisible by four, it is a leap year, unless it is divisible by 100. However, if it is divisible by 400, then it is.

function leapYear(year) {
    if (year % 400 == 0) {
        console.log(year + " is a leap year")
    } else if (year % 4 == 0 && year % 100 !== 0) {
        console.log(year + " is a leap year")
    } else {
        console.log(year + " is not a leap year")
    }
}

leapYear(2000)
leapYear(2001)
leapYear(2004)
leapYear(1900)

// Print and Count
// Print all integer multiples of 5, from 512 to 4096. Afterward, also log how many there were.

function printAndCount() {
    let count = 0;
    for (i=512; i<=4096; i++) {
        if (i % 5 == 0) {
            console.log(i);
            count++;
        }
    }
    console.log(count);
}

printAndCount();

// Multiples of Six
// Print multiples of 6 up to 60,000, using a WHILE.

function multiplesOfSix(i) {
    while (i<= 60000) {
        if (i % 6 == 0) {
            console.log(i);
            i++;
        } else {
            i++;
        }
    }
}

multiplesOfSix(0);

// Counting, the Dojo Way
// Print integers 1 to 100. If divisible by 5, print "Coding" instead. If by 10, also print " Dojo".

function countingDojo() {
    for (i=1; i<=100; i++) {
        if (i % 10 == 0) {
            console.log("Dojo");
        } else if (i % 5 == 0) {
            console.log("Coding");
        } else {
            console.log(i);
        }
    }
}

countingDojo();

// What Do You Know?
// Your function will be given an input parameter incoming. Please console.log this value.

function incoming(value) {
    console.log(value)
}

incoming("poop")
incoming("hello")
incoming(479)

// Whoa, That Sucker’s Huge…
// Add odd integers from -300,000 to 300,000, and console.log the final sum. Is there a shortcut?

function addOdd() {
    let sum = 0;
    for (i=-300000; i<=300000; i++) {
        if (i % 2 == 1) {
            sum += i;
        }
    }
    console.log(sum);
}

addOdd();

// Countdown by Fours
// Log positive numbers starting at 2016, counting down by fours (exclude 0), without a FOR loop.

function fourCountdown(i) {
    while (i>0) {
        if (i % 4 == 0) {
            console.log(i);
            i--;
        } else {
            i--;
        }
    }
}

fourCountdown(2016);

// Flexible Countdown
// Based on earlier “Countdown by Fours”, given lowNum, highNum, mult, print multiples of mult from highNum down to lowNum, using a FOR. For (2,9,3), print 9 6 3 (on successive lines).

function flexibleCountdown(lowNum, highNum, mult) {
    for (i=highNum; i >= lowNum; i--) {
        if (i % mult == 0) {
            console.log(i);
        }
    }
}

flexibleCountdown(6, 95, 5)

// The Final Countdown
// This is based on “Flexible Countdown”. The parameter names are not as helpful, but the problem is essentially identical; don’t be thrown off! Given 4 parameters (param1,param2,param3,param4), print the multiples of param1, starting at param2 and extending to param3. One exception: if a multiple is equal to param4, then skip (don’t print) it. Do this using a WHILE. Given (3,5,17,9), print 6,12,15 (which are all of the multiples of 3 between 5 and 17, and excluding the value 9).

function finalCountdown(mult, range1, range2, nope) {
    i = range1
    while (i<=range2) {
        if (i == nope {
            i++;
        } else if (i % mult == 0) {
            console.log(i);
            i++;
            }
        }
    }

finalCountdown(3, 5, 17, 9);