for (i = 0; i < arrlength; i++) {
for (j = i + 1; j < arrlength; j++) {
var sumtwo = arr[i] + arr[j];
sumarr.push(sumtwo);
sumarr.push(arr[i] + arr[j]);
sumarr.push(sumall - sumtwo);
}
}
var sumarr = [];
var arrlength = arr.length;
var sumN = arr.reduce((a, b) => a + b);
foo(reallyLongArg(), omgSoManyParameters(), IShouldRefactorThis(), isThereSeriouslyAnotherOne());


