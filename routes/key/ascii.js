`use strict`

// ASCii American Standard Code for Information Interchange
// Character encoding for computers
// Unique indecies for each character
// 0-255 characters

// Create an array 0 - 255; each index in array represents a character for the computer to interpret
const asciiArray = [];

for (i = 0; i <= 255; i++) {
    asciiArray.push(i)
}

module.exports = asciiArray