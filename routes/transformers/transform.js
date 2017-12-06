`use strict`

// import key
const key = require('../key/key');


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
const interpret = (str, type) => {
    const codes = inputCodes(str)
    // console.log(codes)
    const change = codes.map(x => {
        return key[x]
    })
    // get the joined string of the combination of DNA combos
    const code = change.join("");
    
    // if its DNA convert return it
    if(type.value === "DNA") {
        return code
    } // else change to RNA: RNA is like DNA but the A is now a U
    return code.replace(/A/g, "U");
}

module.exports = interpret;