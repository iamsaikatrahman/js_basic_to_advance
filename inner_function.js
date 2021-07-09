// when we declare a function inside another function , that called inner function
function somthing(greet, name) {
    function sayHi() {
        console.log(greet, name)
    }sayHi()
}
somthing('Good Morning', 'saikat')

// when a function stay another thats time 2nd function have access 1st functions variable or parameter

function greeting(greet, name) {
    function getFirstName() {
        if(name){
            return name.split(' ')[0]
        }else{
            return ''
        }
    }
    var message = greet+ ' ' + getFirstName()
    console.log(message)
}
greeting("Good Mornin", "saikat rahman")