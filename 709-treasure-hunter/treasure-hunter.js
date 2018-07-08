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

console.log(treasureHunter(holyGrailMap,'Z'));
