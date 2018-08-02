function longest(a,b){
   return  _.uniq((a+b).split("").sort(),true).join("");
}
console.log(longest("xyaabbbccccdefww","xxxxyyyyabklmopq"));
