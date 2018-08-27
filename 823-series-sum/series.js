function sum(n){
    let total = 0
    for(i=1; i <=n; i++){
        console.log(1/((i-1)*3+1))
        total = total + 1/(i*3 - 2)
    }
    return total.toFixed(2)
}
console.log(sum(5))