// // Ex1
// function isEven(num){
//     if(num%2 == 0){
//         return true
//     }else{
//         return false
//     }
// }


// // Ex2

// const printOdds = function(numbers){
//     for(let num of numbers){
//         if(isEven(num) == false){
//             console.log(num)
//         }
//     }
// }
// printOdds([1,2,3,5,11,12])

// Ex3
// const checkExists = function(numbers, x){
//     for(let num of numbers){
//         if(x === num){
//             return true
//         }
//     }
//     return false
// }
// console.log(checkExists([1,2,3] , 0))

// Ex4

// const calculator = {
//     add: function(n1, n2){
//         return n1 + n2
//     },
//     subtract: function(n1, n2){
//         return n1 - n2
//     }
// }
// const res1 = calculator.add(20, 1)
// const res2 = calculator.subtract(30, 9)

// console.log(calculator.add(res1, res2))

// Ex5

const turnToKing = function(name, money){
    name = name.toUpperCase()
    money = increaseByNameLength(money, name)
    name = makeRegal(name)

    console.log(name + " has " + money + " gold coins")
}
function increaseByNameLength(money, name){
    return money * name.length
}
function makeRegal(name){
    return "His Royal Highness, " + name
}

turnToKing("martin luther", 100) // should print "His Royal Highness, MARTIN LUTHER has 1300 gold coins"