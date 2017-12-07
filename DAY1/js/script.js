var nullVar = null
var undefinedVar = undefined
var numberVar = 1
var boolVar = true
var stringVar = "ala"
var arrayVar = [1,2,3]
var objVar = {a: 1, b: 2}

var typesArray = [
    typeof nullVar,
    typeof undefinedVar,
    typeof numberVar,
    typeof boolVar,
    typeof stringVar,
    typeof arrayVar,
    typeof objVar
]


console.log(
    typeof nullVar,
    typeof undefinedVar,
    typeof numberVar,
    typeof boolVar,
    typeof stringVar,
    typeof arrayVar,
    typeof objVar
)

console.table(typesArray)
