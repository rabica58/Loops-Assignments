                     //1. *Creating a Lesson Plan* (using for loop) //

let myWork: {name: string, status: boolean} [] = [];
for(let i = 0; i <= 10; i++){
    let lesson = {
        name: `lesson ${i}`,
        status: i % 2 !==0? true:false
    };
    myWork.push(lesson);
}
console.log(myWork);

                      //2. *Guessing Game* (Using while loop) //

const maxValue = 40;
const targetNumber = Math.floor(Math.random() *maxValue) +1;
console.log(`Target Number (for development purposes): ${targetNumber}`);
const userGuessIsCorrect: boolean = false;
const userGuesses = [8, 4, 10, 2, 9, 6, 7, 5];
let Iterate = 0;
while (!userGuessIsCorrect && Iterate < userGuesses.length) {
    let guess = userGuesses[Iterate];
    console.log(guess);

    if (guess == targetNumber) {
        console.log(`Congratulation! You guessed the correct numnber,`);
        guess:  true;
    } else if (guess < targetNumber) {
        console.log("Your guess is too high!"); 
    }else{
        console.log("Your guess is too low!");
        
    }
    Iterate++; 
}
if(!userGuessIsCorrect) {
    console.log(`Sorry! your guess is wrong and the correct number is ${targetNumber}.`);  
}

                     // *Counter Incrementer* (Using do while loop) //


 let counter = 0
 let step = 9
 
 do {
    console.log(counter);
    counter += step;
 }while (counter <=100);
 console.log(`counter: ${counter}`);

                            // *Exploring Object* (with for... in loop) //
let myObject = {
    item1: "Value 1",
    item2: "Value 2",
    item3: "Value 3"
};
for(let key in myObject) {
    if (myObject.hasOwnProperty(key)) {
        console.log(`${key}: ${myObject}[key]`);
        
    }
};

                   // *Exploring Arrays with Loops* (Using loop)  //
 
let myArray: number[] = [];
for(let v = 0; v<= 10; v++) {
    myArray.push(v)
}
console.log(myArray);
for(let index = 0; index < myArray.length; index++) {
    console.log(`Index ${index}: Value ${myArray[index]}`);
    
}
for (let value of myArray) {
    console.log(`Value: ${value}`); 
};

