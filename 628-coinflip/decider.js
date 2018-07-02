//https://gist.github.com/kasun-maldeni/c337852cb0bf5072d6e91cb5ba78500e
console.log('flip coin');


function coinFlip(){
    document.getElementById('result').innerHTML = '';
    document.getElementById('winner').innerHTML = '';
    var results =[];
    var winer = '';
    var counterHead = 0;
    var counterTail = 0;
    while (counterHead<5 && counterTail<5){
        var ranNum = Math.round(Math.random());
        if (ranNum ===1){
            counterHead += 1;
            results.push('head')
        } else {
            counterTail += 1;
            results.push('tail');
        }
    }
    if (counterHead===5){
        winer = 'HEAD'
    } else {
        winer = 'TAIL'
    }
    document.getElementById("result-text").innerHTML =  "The Game result: ";
    loopThroughSplittedText(results);
    setTimeout(function(){
        document.getElementById("winner").innerHTML = "THE WINNER IS " + winer; 
        document.querySelector('button').innerHTML = "Play Again";
    }, 1000);
   
}


function loopThroughSplittedText(results) {
    displayValue(results,0);
}
function displayValue(arr, i){  
    if(i<arr.length){
        setTimeout(function(){
            document.getElementById('result').innerHTML += ' <img src="' + arr[i] + '.jpeg">';
            console.log(arr[i])
            displayValue(arr,i+1);
        },100)
    }
}
