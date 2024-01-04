
// Stay updated on your professional world

// dlrow lanoisseforp ruoy on detadpu yatS

function reverseString(string) {

    let reversedString = ''
    let lenOfString = string.length - 1

    for (let i = lenOfString; i >= 0; i--) {
        reversedString += string[i]
    }
    console.log(reversedString)
}


reverseString('Stay updated on your professional world')
