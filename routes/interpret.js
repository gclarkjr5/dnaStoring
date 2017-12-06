`use strict`

// import key
const key = require('./key/key');


// accept the string that a user posts
const inputCodes = (str) => {
    // Split string up into individual characters
    const split = str.split("")
    // Transform each character into its ascii equivalent
    const codes = split.map(x => {
        return x.charCodeAt(0)
    })
    return codes
}

// take the codes and find the relative DNA combo in the key
const interpret = str => {
    const codes = inputCodes(str)
    // console.log(codes)
    const change = codes.map(x => {
        return key[x]
    })
    // get the joined string of the combination of DNA combos
    return change.join("");
}

module.exports = interpret;