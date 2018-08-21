function toRomanNumber(num){
    if (num > 999){
        var thousands = Math.floor(num/1000)
        num = num%1000
    }
    var arr = num.toString().split("")
    var roman =''
    one = ['I','X','C','M']
    five = ['V','L','D']
    var digits = arr.length
    for (var i= digits - 1; i >=0; i--){
        var j  = digits - i - 1
        if (arr[i]<4){ 
            roman = one[j].repeat(arr[i]) + roman
        } else if (arr[i]==4){
            roman = one[j]+five[j] + roman
        } else if(arr[i]==5){
            roman = five[j] + roman
        } else if (arr[i]>5 && arr[i]<9){
            roman = five[j] + one[j].repeat(arr[i]-5) + roman
        } else if (arr[i]==9){
            roman = one[j]+one[j+1]+ roman
        } 
    }
    roman = 'M'.repeat(thousands) + roman
    return roman
}
console.log(toRomanNumber(2051))
console.log(toRomanNumber(31))
console.log(toRomanNumber(200))