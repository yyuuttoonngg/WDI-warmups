console.log('granny talk warmup');
var yearMin = 1930;
var yearMax = 1950;
var randomYear = function(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function grannyTalk(talk){
    talk = prompt('What do you want to say?');
    if(talk === 'BYE'){
        grannysAnswer= "What's that honey, I didn't hear you";
    } else if (talk.toUpperCase()===talk){
        grannysAnswer = "NO, NOT SINCE " + randomYear(1930,1950);
    }else{
        grannysAnswer = "SPEAK UP SONNY JIM";
    }
    console.log('Grandma says: '+ grannysAnswer);
    grandpaTalks(grannysAnswer);
}
//console.log(grannyTalk());

// function grandpaTalk(a){ 
//     var vowels =['a','e','i','o','u']; 
//     var vowelsUpper =['A','E','I','O','U'];
//     var numbers = ['1','2','3','4','5','6','7','8','9','0'];
//     for (var i=0; i<a.length; i++){
//         for ( var j=0;j<vowels.length;j++){
//             if (a[i]===vowels[j]){
//                 a= a.replace(a[i],vowels[Math.floor(Math.random()*vowels.length)]);
//             }
//         }
//         for (var k=0;k<vowelsUpper.length;k++){
//             if (a[i]===vowelsUpper[k]){
//                 a = a.replace(a[i],vowelsUpper[Math.floor(Math.random()*vowelsUpper.length)]);
//             }                    
//         }
//         for (n=0; n<numbers.length; n++){
//             if (a[i]===numbers[n]){
//                 a = a.replace(a[i],numbers[Math.floor(Math.random()*numbers.length)]);
//             }  

//         }
//     }

//     console.log('Grandpa says: Your granny said ' + a);
// }

grannyTalk();

function grandpaTalks(a){ 
    var characterToChange = [
        {
            characterType: 'vowels',
            characterValue: ['a','e','i','o','u']
        },
        {
            characterType: 'vowelsUpper',
            characterValue: ['A','E','I','O','U']
        },
        {
            characterType: 'numbers',
            characterValue:  ['1','2','3','4','5','6','7','8','9','0']
        }        
    ];


    for (var i=0; i<a.length; i++){

        for ( var j=0;j<characterToChange.length;j++){
            for(var k=0; k<characterToChange[j].characterValue.length;k++){
                if (a[i]===characterToChange[j].characterValue[k]){
                    b=Math.floor(Math.random()*characterToChange[j].characterValue.length)
                    a= a.replace(a[i],characterToChange[j].characterValue[b]);


            }            

            }
        }
   
    }

    console.log("Grandpa says: Your granny just said' " + a +"'.");
}