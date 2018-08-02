const longest =(a,b)=> _.uniq((a+b).split("").sort(),true).join("");
console.log(longest("xyaabbbccccdefww","xxxxyyyyabklmopq"));
