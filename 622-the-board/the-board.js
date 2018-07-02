//https://gist.github.com/kasun-maldeni/7787ab81d02477be49565381f78412cf

console.log('the board warmup');
var userSymbol = prompt('What is your favorite symbol, charactor or number?')
var sizeColumn = Number(prompt('Please enter the size of the columns'));
var sizeRow = Number(prompt('Please enter the size of the rows'));
var newString ='';
var line ='';

//to create a line

//method 1 use loop instead of .repeat()
// for (i=1; i<=gridSize; i++){
//     line += userSymbol + ' ';
// }

line = (userSymbol + ' ').repeat(sizeColumn);

//combine each line with line-breaks
for (j=1; j<=sizeRow; j++){
   if (j%2===1){
    newString += line + '\n ';
   }else{
    newString += line + '\n';
   }
}

console.log(newString);
alert(newString);
