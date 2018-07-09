//https://gist.github.com/kasun-maldeni/f0aaae72a93520c7ecabf2c9ea6faefe
console.log('treasure hunter!');
var map1 = [
    ["A","A","A","A","A"],
    ["A","A","A","A","A"],
    ["A","A","X","A","A"],
    ["A","A","A","A","A"],
    ["A","A","A","A","A"]
    ];
var map2 = [
    ["A","A","A","A","A"],
    ["A","A","A","A","A"],
    ["A","A","A","A","A"],
    ["A","A","A","A","A"],
    ["A","X","A","A","A"]
    ];
    
var map3 = [
    ["A","A","A","A","A"],
    ["A","A","V","A","A"],
    ["A","A","A","V","A"],
    ["v","v","V","v","X"],
    ["A","V","A","A","A"]
    ];

var map4 = [
    ["A","A","A","A","A"],
    ["A","A","V","A","A"],
    ["A","A","A","V","A"],
    ["v","v","V","v","A"],
    ["X","V","A","A","A"]
    ];
var holyGrailMap = [
    ["v","v","V","v","S","S"],
    ["v","v","V","v","S","S"],
    ["v","v","V","v","S","S"],
    ["v","v","V","v","S","S"],
    ["v","v","G","v","S","S"],
    ["v","v","H","v","S","S"],
    ["v","v","V","v","S","S"],
    ["A","V","A","A","A","S"]
    ];

function treasureHunter(map,key){
    var Y;
    var X=[];
    var line;
    map.forEach(element => {
        element.forEach(a=>{
            if (a === key){
                X.push(element.indexOf(a));
                line = element;
            }
        })
            if (element===line){
                Y = map.indexOf(element);
            }
        })
    if (X.length === 1){
        return [Y,X[0]];    
    } else if (X.length > 1){
        return 'that doesnt belong in a museum';
    } else {
        return 'cant find the treasure';
    }
}

console.log(treasureHunterPlus(map3,'v'));

//if you also want to console.log() all the locations of non-unique key
function treasureHunterPlus(map,key){
    var Y=[];
    var X=[];
    var line=[];
    map.forEach(element => {
        for(k=0;k<element.length;k++){
            if (element[k] === key){
                X.push(k);
                line.push(element);
            }
        }
        for(var i=0;i<line.length;i++){
            if (element===line[i]){
                Y.push(map.indexOf(line[i]));
            }
        }
    })
    console.log(line);
    console.log(X);
    console.log(Y);
    if (X.length === 1){
        return [Y[0],X[0]];    
    } else if (X.length > 1){
        for (var j=0;j<line.length;j++){
            console.log([Y[j],X[j]])
        }
        return 'that doesnt belong in a museum';
    } else {
        return 'cant find the treasure';
    }
}