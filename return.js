//we can get funtion output using return statement
// we can store this output anywhere
function addAll() {
    var sum = 0
    for(var i =0; i< arguments.length; i++){
        sum += arguments[i]
    }
    return sum
}
var result = addAll(4,5,89,8,9,3,2,6,2,3,96)
console.log(result)


function person(name, email) {
    return{
        name: name,
        email: email
    }
}
var p1 = person('saikat', 'saikat@gmail.com')
console.log(p1)
