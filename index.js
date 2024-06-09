//1. *Creating a Lesson Plan* (using for loop) //
var myWork = [];
for (var i = 0; i <= 10; i++) {
    var lesson = {
        name: "lesson ".concat(i),
        status: i % 2 !== 0 ? true : false
    };
    myWork.push(lesson);
}
console.log(myWork);
//2. *Guessing Game* (Using while loop) //
var maxValue = 40;
var targetNumber = Math.floor(Math.random() * maxValue) + 1;
console.log("Target Number (for development purposes): ".concat(targetNumber));
var userGuessIsCorrect = false;
var userGuesses = [8, 4, 10, 2, 9, 6, 7, 5];
var Iterate = 0;
while (!userGuessIsCorrect && Iterate < userGuesses.length) {
    var guess = userGuesses[Iterate];
    console.log(guess);
    if (guess == targetNumber) {
        console.log("Congratulation! You guessed the correct numnber,");
        guess: true;
    }
    else if (guess < targetNumber) {
        console.log("Your guess is too high!");
    }
    else {
        console.log("Your guess is too low!");
    }
    Iterate++;
}
if (!userGuessIsCorrect) {
    console.log("Sorry! your guess is wrong and the correct number is ".concat(targetNumber, "."));
}
// *Counter Incrementer* (Using do while loop) //
var counter = 0;
var step = 9;
do {
    console.log(counter);
    counter += step;
} while (counter <= 100);
console.log("counter: ".concat(counter));
// *Exploring Object* (with for... in loop) //
var myObject = {
    item1: "Value 1",
    item2: "Value 2",
    item3: "Value 3"
};
for (var key in myObject) {
    if (myObject.hasOwnProperty(key)) {
        console.log("".concat(key, ": ").concat(myObject, "[key]"));
    }
}
;
// *Exploring Arrays with Loops* (Using loop)  //
var myArray = [];
for (var v = 0; v <= 10; v++) {
    myArray.push(v);
}
console.log(myArray);
for (var index = 0; index < myArray.length; index++) {
    console.log("Index ".concat(index, ": Value ").concat(myArray[index]));
}
for (var _i = 0, myArray_1 = myArray; _i < myArray_1.length; _i++) {
    var value = myArray_1[_i];
    console.log("Value: ".concat(value));
}
;
