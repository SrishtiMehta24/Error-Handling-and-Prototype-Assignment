function numberChecker(array){
    return function checkNum(num){
        return array.includes(num)
    }   
}

const checkNumber = numberChecker([1,2,3,4,5,6,7,8])

console.log(checkNumber(3))
console.log(checkNumber(10))