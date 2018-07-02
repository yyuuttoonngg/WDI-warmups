//https://gist.github.com/kasun-maldeni/7994ec117ee7617d88983f9c4b1fbcd9
console.log('caesar cipher');

//To decide which letters we want to encode, can be any charactor for any length
var alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

var toDecipher = 'FRZDUGV GLH PDQB WLPHV EHIRUH WKHLU GHDWKV, WKH YDOLDQW QHYHU WDVWH RI GHDWK EXW RQFH.';
var toEncode = 'TWO SYMBOLS KISSING EACH OTHER';

//n is the number to shift -- when n>0 shift to right (eg A---> B,C,D) --n<0 shift to left Z---Y,X> 
function decipher(input,n){
    var newArr =[];
    input.split('').forEach(function(a){ 
        if (alphabet.indexOf(a)===-1){
            newArr.push(a);
        } else {
            var newIndex = (alphabet.indexOf(a) + alphabet.length - n)%(alphabet.length);
            newArr.push(alphabet[newIndex]);
        }
    })
    return newArr.join('');
}
console.log(decipher(toDecipher,3));

function encode(message,n){
    return decipher(message,-n)
}
console.log(encode(toEncode,3));