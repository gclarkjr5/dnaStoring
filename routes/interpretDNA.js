`use strict`

// import key
const key = require('./key/key');


// accept the dna that a user posts
const inputCodes = (str) => {
    // Split dna up into splits after every 4 characters
    const splits = str.match(/.{4}/g)
    return splits
    // Transform each character into its ascii equivalent
    // const codes = split.map(x => {
    //     return x.charCodeAt(0)
    // })
    // return codes
}

// take the dnas and find the relative characters in the key
const interpret = str => {
    const dnas = inputCodes(str)
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