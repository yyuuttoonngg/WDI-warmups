console.log('division')

function solve(arr,num){
    var sumarr =[]
    var arrlength = arr.length
    var sumN = arr.reduce((a, b) => a + b)

    var halflength = Math.floor(arrlength/2)
    // all single in arry

    var sumall = arr.reduce((a, b) => a + b)
    sumarr.push(...arr)
    // all twos

    for (i =0; i<arrlength; i++){
        for (j = i+1; j<arrlength;j++){
            var sumtwo = arr[i]+arr[j]
            sumarr.push(sumtwo)
            sumarr.push(arr[i]+arr[j])
            sumarr.push(sumall-sumtwo)
        }
    }
    var counter = 0
    sumarr.push(sumN)
    testarr = sumarr.filter(a=>a>=num)
    console.log(testarr)
    testarr.forEach((a)=>{
        if(a%num===0){
            counter += 1
        }
    })
    return (counter > 0)
}

console.log(solve([1,3,4,7,6],9))
// console.log(solve([1,2,3,4,5],10))
// console.log(solve([8,5,3,9],7))
// console.log(solve([1,3,4,7,6],9))
// console.log(solve([8,5,3],7))
