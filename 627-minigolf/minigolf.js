//https://gist.github.com/kasun-maldeni/9f24ddbad63aecf72f017e704692e7c3
console.log('mini golf');
// var bob = [3,2,6,11,9,2,6,9,10];
// var jimbo = [5,12,9,22,13,7,16,10,11];
// var fish = [2,2,4,5,4,3,6,4,1];
// var coursePar = [3,4,5,5,3,3,4,3,5];
// var bobTotal = 0;
// var jimboTotal = 0;
// var fishTotal = 0;
// for (i=0; i<bob.length; i++){
//     bobTotal += bob[i];
//     jimboTotal += jimbo[i];
//     fishTotal +=fish[i];
// }
// console.log('The total score for Bob is '+ bobTotal + '; for Jimbo is ' + jimboTotal + '; for Fish is ' +fishTotal);
// console.log ('The total score for three players is ' + (bobTotal+jimboTotal+fishTotal));

var coursePar=[3,4,5,5,3,3,4,3,5];

var golfScore = [
    {
      name:'Bob', 
      score:[3,2,6,11,9,2,6,9,10]
    },
    {
      name: 'Jimbo',
      score: [5,12,9,22,13,7,16,10,11]
    },
    {
        name:'Fish',
        score:[2,2,4,5,4,3,6,4,1]
    },

];

function playerTotal(){
    var total=0;
    for (i=0; i< golfScore.length; i++){
         var subtotal = golfScore[i].score.reduce((a,b)=>a+b,0);
         console.log('The total score for ' + golfScore[i].name + ' is ' +subtotal);
         total += subtotal;
    }
    console.log('The total score for all players is ' + total);
}
playerTotal();

function comparesCoursePar(){  
    for (j=0; j<coursePar.length; j++){
        var roundTotal=0;
        for (i=0; i< golfScore.length; i++){
            roundTotal += golfScore[i].score[j]
        }
        if (roundTotal/3 > coursePar[j]){
            console.log('Round ' + (j+1) + ': Players round par is ' + Math.round(roundTotal/3*10)/10 + '; better than the Course Par ' +coursePar[j]);
        } else {
            console.log('Round ' + (j+1) + ': Players round par is ' + Math.round(roundTotal/3*10)/10 + '; try harder to beat the Course Par ' +coursePar[j]);
        }
    }
}
comparesCoursePar();

function selectPlayer(a){
    var score;
    for(i=0; i<golfScore.length; i++){
        if (golfScore[i].name ===a ){
            score = golfScore[i].score;
        }
    }
    return score;
    console.log(a, score);
}
selectPlayer('Bob');

function betOnTwo(a,b){
    var totalWin =0;
    for (j=0; j<coursePar.length; j++){
       var roundWin = selectPlayer(a)[j]+selectPlayer(b)[j] - coursePar[j]*2;
       console.log('Round: '+(j+1)+ ', You win $'+ roundWin + ' for betting on ' + a + ' and '+ b);
       totalWin += roundWin;
    }
    console.log('The total win is ' + totalWin);
}
betOnTwo('Bob','Fish');