// we can creat function without parameter only using argument
function addAll(){
    var sum = 0
    for(var i= 0; i< arguments.length; i++){
        sum += arguments[i]
    }
    console.log(sum)
}
addAll(1,2,3)
addAll(1,5,8,9,3,4,5,8,9,2,6,5,96,2)