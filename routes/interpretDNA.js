`use strict`

// import key
const key = require('./key/key');


// accept the dna that a user posts
const inputCodes = (str, type) => {
    // if the input is not DNA then it must be RNA, change all U's to A's for key to recognize
    if(type.value !== "DNA") {
        str = str.replace(/U/g, "A") // replace U's with A's
        const splits = str.match(/.{4}/g)
        return splits
    } 
    // Split dna up into splits after every 4 characters
    const splits = str.match(/.{4}/g)
    return splits
}

// take the dnas and find the relative characters in the key
const interpret = (str, type) => {
    const dnas = inputCodes(str, type)
    const string = [];
    // find the value and return the relevant key
    const change = dnas.map(x => {
        const c = Object.keys(key).find(k => {
            return key[k] === x
        })
        // push converted key converted to character array
        string.push(String.fromCharCode(c))
    })

    // get the joined string of the combination of DNA combos
    return string.join("")
}

module.exports = interpret;