function add(a, b){
    var result = a+b
    console.log(result)
}
add(25, 29)
add(2,9)
var arr1 = [1,4,3,5]
var arr2 = [9,8,2,6]
var arr3 = [4,6,1,5]

var sum1 = 0
for(var i =0; i< arr1.length; i++){
    sum1 += arr1[i]
}
console.log(sum1)

function sumofArray(arr){
    var sum= 0
    for(var i= 0; i< arr.length; i++){
        sum += arr[i]
    }
    console.log(sum)
}
sumofArray(arr1)
sumofArray(arr2)
sumofArray(arr3)