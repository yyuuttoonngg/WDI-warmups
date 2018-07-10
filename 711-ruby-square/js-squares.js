console.log('get squares')

function getSquares(arr){
    var squareArr =[];
    var uniqueArr=[]
    arr.forEach(num => {
        if (Math.sqrt(num)%1 === 0){
            squareArr.push(num);
        }
        
    });
    console.log(squareArr);
    squareArr.forEach(num =>{
        if (uniqueArr.indexOf(num)===-1){
            uniqueArr.push(num);
        }
    })
    console.log(uniqueArr.sort(function(a, b){return a-b}));
}
getSquares([4, 1, 16, 1, 10, 35, 22]);