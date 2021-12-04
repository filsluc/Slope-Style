function collectAnimals(/*your code here*/) {
    /*and here*/
}

collectAnimals("dog", "cat", "mouse", "jackolope", "platypus");
// ["dog", "cat", "mouse", "jackolope", "platypus"]

function combineFruit(fruit, sweets, vegetables){
    return {}
}

combineFruit(["apple", "pear"],
             ["cake", "pie"],
             ["carrot"])
//=> {
        fruit: ["apple", "pear"],
        sweets: ["cake", "pie"],
        vegetables: ["carrot"]
     }

     function parseSentence(_________){
        return `We're going to have a good time in ${location} for ${duration}`
      }
      
      parseSentence({
        location: "Burly Idaho",
        duration: "2 weeks"
      });

      function returnFirst(items){
        const firstItem = items[0]; /*change this line to be es6*/
        return firstItem
    }

//     Use the

// ```
// Rest Operator
// ```

// to help this function return an array of animals, no matter how many animals are passed to it:

// ```
// function collectAnimals(/*your code here*/) {
//     /*and here*/
// }

// collectAnimals("dog", "cat", "mouse", "jackolope", "platypus");
// // ["dog", "cat", "mouse", "jackolope", "platypus"]

// ```

// ---

// Write a function that returns a food object with the array names as properties. You'll use an ES6 shorthand syntax that becomes useful when a variable name is mentioned twice in both the name and value of properties in your object:

// ```
// function combineFruit(fruit, sweets, vegetables){
//     return {}
// }

// combineFruit(["apple", "pear"],
//              ["cake", "pie"],
//              ["carrot"])
// //=> {
//         fruit: ["apple", "pear"],
//         sweets: ["cake", "pie"],
//         vegetables: ["carrot"]
//      }

// ```

// - Hint
    
//     { item } is shorthand for { item: item }
    

// ---

// Use destructuring to use the property names as variables. Desructure the object in the parameter:

// ```
// function parseSentence(_________){
//   return `We're going to have a good time in ${location} for ${duration}`
// }

// parseSentence({
//   location: "Burly Idaho",
//   duration: "2 weeks"
// });
// ```

// - Hint
//     - This function is expecting two variables to be defined in the parameter list.
        
//         You can destructure in the parameter list
        
//         - `const { location, duration } = vacation` is an example of destructuring, but wouldn't complete this task.
//             - `function parseSentence({ _____ , ______ }){`
//                 - the order of location and duration don't matter. You'll be saying, "I'm expecting ONE object. And I'd like to use these properties like variables pointing to the corresponding property values of that object."

// ---

// Use destructuring to make this code ES6:

// ```
// function returnFirst(items){
//     const firstItem = items[0]; /*change this line to be es6*/
//     return firstItem
// }

// ```

// - Hint
    
//     ```jsx
//     const arr = ["important", "skip", "important"]`
//     const [nameFirstItemHere, , nameThirdItemHere] = arr
//     ```
    
//     This syntax names our first and our third variable. How would we name our second? The one at index 1? We'd make up a name between the commas. 
    

// ---

// Write destructuring code to assign variables that will help us return the expected string. Also, change the string to be using Template literals:

// ```
// const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

// function returnFavorites(arr){
//     /*your code here*/
//     return "My top three favorite activities are, " + firstFav + ", " + secondFav + ", and " + thirdFav";
// }

// returnFavorites(favoriteActivities)

// ```

// ---

// ![Screen Shot 2021-09-27 at 7.41.33 PM.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a4a69d9c-0144-485c-a154-59c51227c10e/Screen_Shot_2021-09-27_at_7.41.33_PM.png)

// Use the Rest and Spread Operator to help take any number of arrays, and return one array. You will need to change how the arrays are passed in. You may write it assuming you will always recieve three arrays if you would like to.

// ```
// function combineAnimals() {

// }

// const realAnimals = ["dog", "cat", "mouse"];
// const magicalAnimals = ["jackolope"];
// const mysteriousAnimals = ["platypus"];

// combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals);

// // ["dog", "cat", "mouse", "jackolope", "platypus"]

// ```

// ---

// ![https://coursework.vschool.io/content/images/2018/02/Screen-Shot-2018-02-08-at-3.33.50-PM-2.png](https://coursework.vschool.io/content/images/2018/02/Screen-Shot-2018-02-08-at-3.33.50-PM-2.png)

// Try to make the following function more ES6xy:

// ```
// function product(a, b, c, d, e) {
//   var numbers = [a,b,c,d,e];

//   return numbers.reduce(function(acc, number) {
//     return acc * number;
//   }, 1)
// }

// ```

// Make the following function more ES6xy. Use at least both the rest and spread operators:

// ```
// function unshift(array, a, b, c, d, e) {
//   return [a, b, c, d, e].concat(array);
// }

// ```

// ---

// ![http://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Ski_trail_rating_symbol-double_black_diamond.svg/128px-Ski_trail_rating_symbol-double_black_diamond.svg.png](http://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Ski_trail_rating_symbol-double_black_diamond.svg/128px-Ski_trail_rating_symbol-double_black_diamond.svg.png)

// Write some destructuring code to help this function out. Use the ES6 shorthand that helps make the syntax look less redundant to simplify it:

// ```
// function populatePeople(names){
//     return names.map(function(name){
//         name = name.split(" ");
//         // your code
//         return {
//             firstName: firstName,
//             lastName: lastName
//         }
//     })
// }

// populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"])
// //[
// //  {firstName: "Frank", lastName: "Peterson"},
// //  {firstName: "Suzy", lastName: "Degual"},
// //  {firstName: "Liza", lastName: "Jones"},
// //]
// ```