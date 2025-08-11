/* 
--- INSTRUCTIONS ---
1. Write a function named reverseString that takes a string as input.
2. The function should:
○ Return the string itself if it contains only one character (base case).
○ Use recursion to reverse the string by concatenating the last character
of the string with the result of the recursive call on the remaining part
of the string (recursive case).
3. Test the function with various string inputs to verify its correctness.
*/

function reverseString(str) {
    if (str.length === 1) { // base case 
        return str;
    } else if (str.length === 0) { // handles empty strings
        return str; 
    }
    return str[str.length - 1] + reverseString(str.slice(0, str.length - 1)); // recursive case
}

console.log(reverseString("hello")); // olleh
console.log(reverseString("recursion")); // noisrucer
console.log(reverseString("a")); // a
console.log(reverseString("")); // ""
