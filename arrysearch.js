var arr = [4,8,4,9,41,5,1,6,7,32,95,12]
var find = 95
var isFound = false
for(var i = 0; i< arr.length; i++){
    if(arr[i]===find){
        console.log('Data Found at index '+ i)
        isFound=true
        break
    }
}
if(!isFound){
    console.log('Data not Found')
}