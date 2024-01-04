
// check that given string is Anagram or not

// string -> hello
// string -> lleho

function isAnagram(string1, string2) {

    if (string1?.length !== string2.length) return console.log('length is not matched')

    const counter = {}
    for (let letters of string1) {
        counter[letters] = (counter[letters] || 0) + 1
    }

    for (let item of string2) {
        if (!counter[item]) {
            return false
        }
        counter[item] -= 1
    }
    console.log('both string are Anagram',)
    return true
}


const result = isAnagram('hello', 'olleh');
console.log(result)
