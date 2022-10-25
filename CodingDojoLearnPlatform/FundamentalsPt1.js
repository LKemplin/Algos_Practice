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