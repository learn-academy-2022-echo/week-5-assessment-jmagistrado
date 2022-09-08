// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

// a) Create a test with expect statements using the variables provided.

const secretCodeWord1 = "Lackadaisical"
// Expected output: "L4ck4d41s1c4l"
const secretCodeWord2 = "Gobbledygook"
// Expected output: "G0bbl3dyg00k"
const secretCodeWord3 = "Eccentric"
// Expected output: "3cc3ntr1c"

// Pseudocode: 
        // describe a method that lists the name of function called changeString 
        // nested within the describe block, have a test/it method that describes what the function does "It will take an a string, locate any letters that are 'a','e','i','o' and replace them with 4 for 'a', 3 for 'e', 1 for '1' and 0 for 'o'"
        // nested in the test block, have an expect method that is calling on the changeString function, followed by the .toEqual() method matcher that will check the expected output of function changeString

describe("changeString", () => {
    it("It will take an a string, locate any letters that are 'a','e','i','o' and replace them with 4 for 'a', 3 for 'e', 1 for 'i' and 0 for 'o'", () => {
        expect(changeString(secretCodeWord1)).toEqual("L4ck4d41s1c4l"),
        expect(changeString(secretCodeWord2)).toEqual("G0bbl3dyg00k"),
        expect(changeString(secretCodeWord3)).toEqual("3cc3ntr1c")
    })
})

// Red of red-green refactor: 
    // ReferenceError: changeString is not defined


// b) Create the function that makes the test pass.

// Pseudocode:
    // create a function called changeString that takes an in input/parameter of a string 
    // we want to look at each character of the string and determine if the string has an a,e, i, or o 
    // use conditional statements of if/else to determine the following: 
        // if the string has a character of 'a' we want to replace it with the number 4 
        // if the string has a character of e, we want to replace it with the number 3 
        // if the string has a character of i, we want to replace it with number 1
        // if the string has a character of o, we want to replace it with number 0
            // use replaceAll method to replace any characters in the string with the number 

    //  const changeString = (string) => {
    //  if(string.includes("e", "a", "i", "o")) {
    //     return string.replaceAll("a","4").replaceAll("e","3").replaceAll("E","3").replaceAll("i","1").replaceAll("o","0")
    // } else if(string.includes("a", "e", "i", "o")) {
    //     return string.replaceAll("a","4").replaceAll("e","3").replaceAll("E","3").replaceAll("i","1").replaceAll("o","0")
    // } else if(string.includes("o","a", "e", "i",)) {
    //     return string.replaceAll("a","4").replaceAll("e","3").replaceAll("E","3").replaceAll("i","1").replaceAll("o","0")
    //  }
//  }


// console.log(changeString(secretCodeWord1))
// console.log(changeString(secretCodeWord2))
// console.log(changeString(secretCodeWord3))

// green of red-green refactor: 
    //  PASS  ./code-challenges.test.js

// Notes: 
// Above is my first attempt of trying to get the code to work - which is super redundant. I found that I ran into a blocker because when I created my first if statement, I thought that it was all I needed because having .includes("e", "a", "i", "o") would cover all my bases. I found out once I ran my function with all the different variables as arguments, my function would not work on any strings that didn't have an "e" as the first letter in the string. This is because if the string had another letter like "a" as one of the first characters, it would stop the function because it didn't find "e" - thus would give me undefined. Below I added an example of what I ran into when I called my function: 

//output: 
// 3cc3ntr1c
// undefined

// My solution to this, was to create more if blocks which would change out the order of letters in the .includes method so that depending on what argument I passed, it would still run through the function and produce an output. However, it created a code block that seemed repetivite because it was all the same code, just rearranging the letters in the .includes method. I knew I could refactor this to make it a more efficient code block. With a lot of thinking, I asked myself why am I even needing an if statement that says if the string includes these letters return the following - when already in my return, I'm saying to replace any letters of 'a' with 4, and so on when I use the replaceAll method. 

// Because the method .replaceAll simply replaces the pattern with the replacement of your choice, there is no need to have an if statement. When I thought about my code block logically, it doesn't make sense to have an if statement, when .replaceAll method locates anything within an 'a' and replaces it with 4's, and all the 'e' are replaced with 3 etc - so I had the idea to just remove the if statements all together. Thus came my refactor which also passed my jest test! I even made sure it worked with other strings passed, not just the variables that were given to me.

// REFACTORED CODE BLOCK: 
const changeString = (string) => {
    return string.replaceAll("a","4").replaceAll("e","3").replaceAll("E","3").replaceAll("i","1").replaceAll("o","0")
}

// To check if the output was correct: 
// console.log(changeString(secretCodeWord1))
    // output:L4ck4d41s1c4l
// console.log(changeString(secretCodeWord2))
    // output:G0bbl3dyg00k
// console.log(changeString(secretCodeWord3))
    // output:3cc3ntr1c


// --------------------2) Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.

// a) Create a test with expects statement using the variable provided.
// pseudocode: 
    // create a describe method that lists the function named myFruit 
    // nested inside the describe method, use an it/test method to describe the function "It will take an array of word and a single letter to return an array of all values that contain that particular letter"
    // nested in the it method, have an expect method that takes in the function myFruit and passing the array and variable and use .toEqual the expected output 

describe("myFruit", () => {
    it("It will take an array of word and a single letter to return an array of all values that contain that particular letter", () => {
        expect(myFruit(fruitArray, letterA)).toEqual(["Mango", "Apricot", "Peach"]), 
        expect(myFruit(fruitArray, letterE)).toEqual(["Cherry", "Blueberry", "Peach"])
    })
})

// red of red-green refactor: 
    // ● myFruit › It will take an array of word and a single letter to return an array of all values that contain that particular letter
    // ReferenceError: myFruit is not defined

const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]

const letterA = "a"
// Expected output: ["Mango", "Apricot", "Peach"]
const letterE = "e"
// Expected output: ["Cherry", "Blueberry", "Peach"]

// b) Create the function that makes the test pass.

// pseudocode: 
    // define a function named myFruit that has an input/parameter of an array and a variable 
    // Use some iteration to iterate through the array's values and locate any values that include the variable 
        // Can use .includes to see if the array includes the letter that is being through the variable argument 
        // Use the .filter method which will allow use to iterate through the array and find any values that meet the conditions we have set 
    // we will want a new array that only ouputs the values that include the variable letter we have passed as an argument 

// const myFruit = (array, variable) => {
//     array.filter((value) => value.includes(variable))
    
// }

// console.log(myFruit(fruitArray, letterE))
// console.log(myFruit(fruitArray, letterA))

// failed jest test:
    // Expected: ["Mango", "Apricot", "Peach"]
    // Received: undefined

// Notes: 
// Above is my first try at the code. Since this question is similar to the Ruby question on Ruby challenges and have already answered that one before this - I knew I could approach this question in the same way, by having two parameters (array and variable) and I would use .filter to filter through the array and to check if the values included the variable argument. I am very proud that I was able to get to this idea that I could apply the same logic I used in Ruby to JS. 

// However, when I ran my test I ran into the issue that my test failed because one of my expects were not producing the expected output. To see what was happening, I used console.log to invocate my function and these were the results: 

// console.log(myFruit(fruitArray, letterE))
// output: [ 'Cherry', 'Blueberry', 'Peach' ]

// console.log(myFruit(fruitArray, letterA))
// [ 'Mango', 'Peach' ]

// Looking at my output, I can see that the function I wrote was iterating through the array, but it wasn't able to pull out values that had an Uppercase "A", like Apricot. Because of this, I knew I needed to find a way to tell the computer to look for any letters that are "a" and "A". 

// Additional pseudocode: 
// figure out a way to use toLowerCase()method to lower case all values in array before we evaluate if the values include the variable in any words. This way the values will be iterated through as all lowercased values 

const myFruit = (array, variable) => {
    return array.filter((value) => value.toLowerCase().includes(variable))
}

// To check if the function was working: 
// console.log(myFruit(fruitArray, letterE))
    // output:[ 'Cherry', 'Blueberry', 'Peach' ]
// console.log(myFruit(fruitArray, letterA))
    // output:[ 'Mango', 'Apricot', 'Peach' ]


// green  of red-green refactor: 
    //  PASS  ./code-challenges.test.js


// Notes: 
// After writing my pseudocode and thinking about how I can achieve this, I wrote the answer in my pseudocode! I needed to use .toLowerCase before I try and check if the array includes the variable. So within my function, I included the .toLowerCase() to be attached to the value BEFORE .includes so that the values in the array can be lowercased before it checks if it includes the variable. Overall, this question was pretty difficult for me to logically work through, but I am proud of how far I've come with pseudocoding as it was pointing me to the answer all along. 

// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.

// pseudocode: 
    // define a describe method with a function and name it fullHouse 
    // nested in the describe method, use an it/test method to describe what the function will be doing "it will take in an array of 5 numbers and determine whether or not the array is a full house"
    // nested inside the it method, we will use an expects method that will take in the fullHouse function and passing the array and use .toEqual the expected output 

describe("fullHouse", () => {
    it("it will take in an array of 5 numbers and determine whether or not the array is a full house", () => {
        expect(fullHouse(hand1)).toEqual("true"), 
        expect(fullHouse(hand2)).toEqual("false"),
        expect(fullHouse(hand3)).toEqual("false"),
        expect(fullHouse(hand4)).toEqual("true")
    })
})

// red of red-green refactor: 
    // ReferenceError: fullHouse is not defined

const hand1 = [5, 5, 5, 3, 3]
// Expected output: true
const hand2 = [5, 5, 3, 3, 4]
// Expected output: false
const hand3 = [5, 5, 5, 5, 4]
// Expected output: false
const hand4 = [7, 2, 7, 2, 7]
// Expected output: true

// b) Create the function that makes the test pass.

// pseudocode: 
// define a function named fullHouse that has an input/parameter of an array 
// Use conditional statements to determine whether the array is a fullhouse or not 
    // if the array has 3 of the same kind of values AND the array has a pair of the same kind of values that are different from the 3 of a kind, it will return true 
    // otherwise(else) - it would return false 
//blockers:
// must need some method that can review all values in the array to see if they are the same
// how can I set my if statement to evaluate the array values and make sure that the values of the pair and 3 of kind are different values?

    // We can create a new variable that can store the array and use sort() method so we can sort the numbers from least to greatest. This will have any numbers that are the same to be next to each other in the array 
        // By doing this, if there are numbers that are all the same, we can use conditionals to evaulate if the values are the same by referencing to their index. We will determine if the index of 0 and 2 are the same because if the values at the index of 0,1,2 are the same then by looking at 0 and 2, should determine if there are three of the same number in the array. 
        // we can use the logically AND (&&) to also evaluate if values at the index of 3 & 4 are the same (which will tell us if we have a pair)
        // if values at the index of 0 and 1 are the same, and if 2 and 4 are the same - in case the three of a kind are a lower number than that of the pair
        // and if nothing meets the previous conditions - we know that won't be a pair and a three of a kind (else return false) 


// const fullHouse = (array) => {
//   var checker = array.sort()
//    if(checker[0] === checker[2] && checker[3] === checker[4]) {
//     return 'true'
//    } else if (checker[0] === checker[1] && checker[2] === checker[4]) {
//    return 'true'
//    } else 
//    return 'false'
//   } 

    // invoking the function to check if the output is correct: 
    // console.log(fullHouse(hand1))
    // output: true
    // console.log(fullHouse(hand2))
    // output: false
    // console.log(fullHouse(hand3))
    // output: false
    // console.log(fullHouse(hand4))
    // output: true

// green of red-green refactor: 
    // PASS  ./code-challenges.test.js
    // fullHouse
    // ✓ it will take in an array of 5 numbers and determine whether or not the array is a full house


// REFACTOR: 
// Since we are using conditional statements, I know I am able to refactor this code to be more clear and concise by using the ternary operator. The ternary operator allows for the evaluations to be done on one line where it will evaluate whether the conditions are true or false and then will execute one of the statements given depending on the result. 

const fullHouse = (array) => {
    var checker = array.sort()
     return checker[0] === checker[2] && checker[3] === checker[4] ? 'true'
            : checker[0] === checker[1] && checker[2] === checker[4] ? 'true'
            : 'false'
    } 

// green of red-green refactor: 
    // PASS  ./code-challenges.test.js
    // fullHouse
    // ✓ it will take in an array of 5 numbers and determine whether or not the array is a full house