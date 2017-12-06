`use strict`
////////////////////
// Objective1:Provide	a	mechanism	to	encode	arbitrary	standard	ASCII	text	strings	as	DNA.
// Recall	that	ASCII	characters	have	numeric	values	of	0	to	255.	
// Examples: Input: a, Output: TGAT
// Input: cat, Output: TGACTGATTCTA
///////////////////

// Each character has a uniqe combination of 4 DNA characters
// Characters can repeat


const ascii = require('./ascii');
const dna = require('./dna');

const dnaArray = [];

const selectLetter = () => {
    // Select a number from 0 - 3
    const index = Math.round(Math.random() * 3)

    // This will represent which index of the DNA array to grab
    let letter = dna[index]

    return letter
}

// Repeat 4 times to make an array of DNA characters
let indexArray = [];

const makeLetterArray = () => {
    indexArray = [];
    for (i = 0; i < 4; i++) {
        const letter = selectLetter();
        indexArray.push(letter)
    }
}

const joinAndCheck = () => {
    makeLetterArray();
    // Join characters together to make 1 string
    const joined = indexArray.join("")
    // Check if string already exists
    // If it doesnt exist, push to the DNA array
    if (!dnaArray.includes(joined)) {
        dnaArray.push(joined)
    } else { // Else repeat string creation
        joinAndCheck();
    }
}

// Turn ascii into an array of objects
// Each key-value pair will have a key equalling the id of the ascii character
// The value of each key-value will be the unique 4 DNA character combo
const result = {}
const asciiDNA = ascii.forEach(index => { // repeat for all ascii codes (255)
    joinAndCheck();
    result[index] = dnaArray[index]
})


// At the moment, this is dynamic and changes on every render; NEEDS to run on initial load of app
// Will work when looking for the DNA code based off the text being input (even though its random at the moment)
// BUT not vice-versa
// Need to remove randomizer

module.exports = result;