// https://gist.github.com/kasun-maldeni/3082b440f8c1753bf2f90171c3472206

function encrypt(text, n){
    if ( n > 0 && text !== null){
        var inputArr = text.split("")
        var newArr =[]
        for(var i = 1; i < inputArr.length; i += 1 ){
            newArr.push(inputArr.splice(i,1))
        }
        text = newArr.join("") + inputArr.join("")
        n = n-1
        return encrypt(text,n)
    } else {
        return text
    }
}
console.log(encrypt(null, 0))
console.log(encrypt("This is a test", 4))

function decrypt(encryptedText,n){
    if ( n > 0 && encryptedText !== null){
        var encryptedArr = encryptedText.split("")
        var decryptedArr = []
        for (j = Math.floor(encryptedArr.length/2); j>=0; j--){
            decryptedArr.push(encryptedArr.splice(j,1))
            decryptedArr.push(encryptedArr.shift())
        }
        encryptedText = decryptedArr.join("")
        n = n-1
        return decrypt(encryptedText,n)
    } else {
        return encryptedText
    }
}
console.log(decrypt('s eT ashi tist!',2))

console.log(encrypt("This is a", 4))
console.log(decrypt('iiaeh  TTss ',4))