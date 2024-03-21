// 24. More Conditional Tests: You don't have to limit the number of tests you create to 10. If you want to try more 
// comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings 
// • Tests using the lower case function 
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and 
// less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array  
// • Test whether an item is not in a array

const string1: string = "lilac";
const string2: string = "purple";
console.log(string1 === string2); 
console.log(string1 !== string2);

const mixedCaseString: string = "HelloWorld"
console.log(mixedCaseString.toLowerCase() === "helloworld")

const num1: number = 3;
const num2: number = 9;
console.log(num1 === num2);
console.log(num1 !== num2);
console.log(num1 > num2);
console.log(num1 < num2);
console.log(num1 >= num2);
console.log(num1 <= num2);

const condition1: boolean = true;
const condition2: boolean = false;
console.log(condition1 && condition2);
console.log(condition1 || condition2);

const colors: string[] = ["Blue", "Maroon", "Yellow", "Green"]
console.log(colors.includes("Yellow"))
console.log(colors.includes("Red"))

