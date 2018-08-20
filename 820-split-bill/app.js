// https://gist.github.com/kasun-maldeni/ee9cf870da73de774e2663ca6ae23cd4
console.log('splitbill');
var group = {
    A: 20, 
    B: 15, 
    C: 10,
    D: 15
};

function splitTheBill(bill){
    var numberOfPeople = Object.keys(bill).length;
    var totalSpent = Object.values(bill).reduce((total, amount) => total + amount);
    var averageSpent = totalSpent / numberOfPeople;
    var result = new Object();
    for(var i = 0; i < numberOfPeople; i++){
        result[Object.keys(bill)[i]]= Object.values(bill)[i] - averageSpent
    }
    return result;
}
console.log(splitTheBill(group))
console.log(group)