//Question 1 leap years
for (i=1918; i<=2018; i++) {
    if (i%100 !==0 && i%4===0){
        console.log(i);
    } else if(i%400===0){
        console.log(i)
    }
}
// Question 2 multiples of 7 
for (i=1 ; i<=200; i++){
    if (i%7===0){
        console.log(i);
    }
}

//2b every second odd number
for (i=1 ; i<=200; i++){
    if (i%4===1){
        console.log(i);
    }
}

//Extension prime number
for (var i=2; i<=200; i++){
    var total = 0;
    for(var j=2; j<i; j++){
        if (i%j===0){
            total++;
        }
    }
  if(total===0){
    console.log(i);
  }
}

