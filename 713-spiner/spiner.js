// https://gist.github.com/kasun-maldeni/df34ad18c7cabfabd597fc5f6736b0b9

function spiner(str){
   return str.toLowerCase().replace(/[^a-z]/g,'-');
}
console.log(spiner("The_Andy_Griffith_Show"));
console.log(spiner("All Lowercase Words Joined By Dashes"));