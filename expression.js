// store a function inside a variable thats called expression
var addition = function add(a,b) {
    return a+b
}
var res = addition(10,20)
console.log(res)

//we can dealy a function using setTimeout 
setTimeout(function () {
    console.log('I will call after 5 section')
}, 5000)