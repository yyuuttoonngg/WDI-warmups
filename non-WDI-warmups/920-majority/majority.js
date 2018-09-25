// Challenge: majority
// Create a function majority that accepts an array and a callback. The callback will return either true or false. majority will iterate through the array and perform the callback on each element until it can be determined if the majority of the return values from the callback are true. If the number of true returns is equal to the number of false returns, majority should return false.

function majority(arr,callback){
  let obj = {
    true: 0,
    false: 0
  };
  arr.forEach(element => {
    obj[callback(element)] += 1; 
  });
  return obj.true > obj.false;
}


var isOdd = function(num) { return num % 2 === 1; };
console.log(majority([1, 2, 3, 4, 5], isOdd)); // should log: true
console.log(majority([2, 3, 4, 5], isOdd)); 
// should log: false