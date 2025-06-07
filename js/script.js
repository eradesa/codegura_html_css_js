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





