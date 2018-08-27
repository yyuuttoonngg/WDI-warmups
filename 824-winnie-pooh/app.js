var open = [];
for(var n=1; n<101; n++){
    var count = 0
    for(m=1; m<101; m++){
        if(n%m === 0){
            count += 1
        }
    }
    if (count%2 === 1){
        open.push(`#${n}`)
    }
}

console.log(open)