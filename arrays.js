var marks = new Array(20,30,40,50,80,90)

var marks =[20,30,40,50,80,90]
console.log(marks[2])

console.log(marks.length)
marks.push(100)  // [20,30,40,50,80,90, 100]
console.log(marks)
marks.pop()
console.log(marks) // [ 20, 30, 40, 50, 80, 90 ]
marks.unshift(12)
console.log(marks) // [ 12, 20, 30, 40, 50, 80, 90 ]
console.log(marks.indexOf(50))

console.log(marks.includes(12))
console.log(marks.includes(100))

submarks = marks.slice(2,5)
console.log(submarks)

let sum=0;

for (let i=0;i<marks.length;i++){
    console.log(marks[i])
    sum = sum+marks[i]
    
    
}
console.log("Sum:" +sum)

let totla =marks.reduce((sum,totalMarks)=>sum+totalMarks,0)
console.log(totla)

var scores = [12,24,15,17,90]
var evenscores=[]

for (var j=0;j<scores.length;j++){

    if(scores[j]%2==0){
        evenscores.push(scores[j])
    }
   
}
console.log(evenscores)


let newscore = scores.filter(scores=>scores%2==0)
console.log(newscore)

//map function
maparr = newscore.map(score=>score*5)
console.log(maparr)

let fruits =["Banana","Mango","Apple"]
fruits.sort()
console.log(fruits)

var digits = [12,54,13,10,212,1212,1,2]

console.log(" Asscending order: " + digits.sort((a, b) => a - b));
console.log(" Descinding order: " + digits.sort((a, b) => b - a));