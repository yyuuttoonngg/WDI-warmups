var array1 =[[3,9], [6,8,9], [1,9,10], [9], [9,11,14]];
var array2 =[[1,3,4,6], [2,3,4,7], [3,4,7,8,9]];
var array3=[[1,2,3],[1,1,2,3,4],[]]

function nWayIntersection(arr){
    var numbers=[];
    var times=[];
    var intersections =[];
    for (var i =0; i<arr.length; i++){
        for(var j=0; j<arr[i].length; j++){
            if (arr[i].indexOf(arr[i][j],j+1)===-1){
                if (numbers.indexOf(arr[i][j])===-1){
                    numbers.push(arr[i][j]);
                    times.push(1);
                } else {
                    times[numbers.indexOf(arr[i][j])] += 1;
                }
            }
        }
    }
    for(var k=0;k<times.length;k++){
        if(times[k]===arr.length){
            intersections.push(numbers[k]);
        }
    }
    return intersections;
}
console.log(nWayIntersection(array1));
console.log(nWayIntersection(array2));
console.log(nWayIntersection(array3));