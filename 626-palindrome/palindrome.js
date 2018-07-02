console.log('The Palindrome warmup');
function isPalindrome(input){
    input = prompt('Please enter the string you want to check');
    //change input string to lower case
    var stringToChange = input.toLowerCase();
    // var letters='abcdefghijklmnopqrstuvwxyz'.split('');
    // //trim the string to only letters
    // for(i = 0; i < stringToChange.length; i++){
    //     if(!letters.includes(stringToChange[i])){
    //         stringToChange = stringToChange.replace(stringToChange[i],'')
    //         //because if the character is not a letter, it will be removed, the next letter's index will -1
    //         i--;
    //     }
    // }
    var string1 = stringToChange.replace(/[\W_]/g,"");
  

    return string1 === string1.split('').reverse().join('');
   

}
console.log(isPalindrome());