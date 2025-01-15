let day ='Monday '

console.log(day.length)
console.log(day.slice(0,4))

console.log(day.indexOf('M'))

let splitword = day.split('n')
console.log(splitword[0])
console.log(splitword[1])
console.log(splitword[1].length)
console.log(splitword[1].trim().length)

let date ='29' // defined in string 
let date2 = '31' // defined in string 
let diff = parseInt(date2)-parseInt(date)
console.log("diff : " + diff)
console.log("String : " + diff.toString())

let word = day + "is good day!"
console.log(word)
console.log("Index value of day " + word.indexOf('day'))