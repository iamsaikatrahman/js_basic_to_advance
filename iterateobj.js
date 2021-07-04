var obj = {
    x:40,
    y:60,
    z:75
}
// checking x is here in this obj using "in" method
console.log('x' in obj)

for(var i in obj){
    console.log(i)
    console.log(obj[i])
}