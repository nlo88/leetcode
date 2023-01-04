/*
Create a function that determines whether 
all characters in a string are unique or not. 
Make it case-sensitive, meaning a string 
with both 'a' and 'A' could pass the test.

Input: String
Output: Boolean

Examples:
isUnique('abcdef'); // -> true
isUnique('89%df#$^a&x'); // -> true
isUnique('abcAdef'); // -> true
isUnique('abcaef'); // -> false

Best time complexity O(n)
*/
// // #1
// function isUnique(str){
//     for(let i= 0; i< str.length; i++){
//         if(str.lastIndexOf(str[i]) !== i) {
//             return false;
//         }
//     }
//     return true;
// }

// isUnique('abcdef'); // -> true
// isUnique('89%df#$^a&x'); // -> true
// isUnique('abcAdef'); // -> true
// isUnique('abcaef'); // -> false

// // O(n^2)
// // O(1)

// Solution 2

function isUnique(str){
    const chars = str.split('').sort();

    for(let i=1; i<chars.length; i++){
        if(chars[i] === chars[i-1]) {
            return false;
        }
    }
    return true;
}
