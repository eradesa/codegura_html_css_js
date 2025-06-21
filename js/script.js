// js/script.js
document.getElementById("heading4").style.color = "purple";
console.log('test2');

// JS Variable Hoisting
    // Automatic
    myName='Eranga'
    console.log(myName)
    //alert(myName)
    num01 = 5
    num02 = 13

    total = num01 + num02
    //console.log(total)
    document.getElementById("display01").textContent=total
    // var
    var myName02 = 'Eranga2'

    // let
    let myName3 = "Eranga3"

    // const
    const myWeight    =80

// JS VARIABLE Scope
// JS Traditional Functions
    // Named Functions
function getTotal () {
        myName2 = "Eranga31"
        var myAge= 49
        console.log(total * myAge)
        console.log(myAge)
        console.log(myName2)
        //myWeight = 90
        console.log(myWeight);
}
getTotal()
console.log(myName3)

    // Anonymous function
const name = function (){
        console.log("Anonymous function")
}

name()

// Anonymous Arrow Functions
const getName = parameter_variable => {
        console.log("Arrow Function " + parameter_variable)
}

getName(" single argument")

const showName = (parameter_variable_01, parameter_variable_02="Default123") => {
    console.log("Arrow Function " + parameter_variable_01 + " "+ parameter_variable_02)
}

showName("multiple argument1", "multiple argument2" )

const numbers = [1,2,3,5,8,7]
numbers.forEach(number  => {
    console.log(number)
})

numbers.forEach((number,index)  => {
    console.log(number,index)
})

const showReturn = (par01) => {
    return par01 + ' De Saram'

}
// Shortcut for single lines
const showReturn2 = (par01) => par01 + ' De Saram'

console.log(showReturn("Eranga"))
// OR
let showResults = showReturn2("Erangaa")
console.log(showResults)


