function convertToNumber(string){
    try{
        let number = Number(string)
        if(isNaN(number)){
            throw new Error("Invalid number")
        }
        return number
    }
catch(error){
    return "Invalid number"
}
}

console.log(convertToNumber("123"))  //123
console.log(convertToNumber("abc"))  //invalid number
console.log(convertToNumber("3.14"))  //3.14