// write a function named reverseString that takes a string as input
// base case = return the string if it contains only one character
// recursive case = 
// concatenate the last char of the string with the result of the recursive call
// on the remaining part of the string

function reverseString(str) {
    if (str.length === 1) { // base case 
        return str;
    } else if (str.length === 0) {
        return str;
    }
    return str[str.length - 1] + reverseString(str.slice(0, str.length - 1));
}

console.log(reverseString("hello")); // Outputs: "olleh"
console.log(reverseString("recursion"));
console.log(reverseString("a")); // Outputs: "a"
console.log(reverseString("")); // Outputs: ""
