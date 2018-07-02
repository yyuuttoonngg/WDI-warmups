console.log('fakemap warmup');

// function makeFakeMap(a,b,key){
//     var row =[];
//     var sumArray =[];
//     for (i=0; i<a; i++){
//         row.push('A');
//     }
//     for (j=0; j<b;j++){
//         sumArray.push(row);
//     }
//     var m = Math.floor(Math.random()*a);
//     var n = Math.floor(Math.random()*b);
//     var fakerow = row.slice(0);
//     fakerow[n]=key;
//     sumArray[m]=fakerow;
//     console.log(sumArray);
// }

// makeFakeMap(5,5,'F');


function makeRegion(key,number,mark){
    var rowRegion =[];
    var region =[];
    for (i=0; i<number; i++){
        rowRegion.push(key);
    }
    rowRegion = rowRegion.join('');
    for (j=0; j<number;j++){
        region.push(rowRegion);
    }
    var m = Math.floor(Math.random()*number);
    var n = Math.floor(Math.random()*number);
    var markedRow = rowRegion.replace(rowRegion[m],mark);
    region[n] = markedRow ;   
    return region;;
}
//console.log(makeRegion('f',3,'l'));



function makeFakeMap(a,b,key,number,mark){
   var region = makeRegion(key,number,mark);
    var row =[];
    var map =[];
    for (i=0; i<a; i++){
        row.push('A');
    }
    for (j=0; j<b;j++){
        map.push(row);
    }
    var m = Math.floor(Math.random()*(a-number+1));
    var n = Math.floor(Math.random()*(b-number+1));
    for (k=n; k<n+number; k++){
        rowString = row.join('');
        var newRow = rowString.replace(rowString.slice(m,(m+number)),region[k-n]).split('');
        map[k] = newRow;
    }
    console.log(map);
}

makeFakeMap(5,7,'F',3,'X');