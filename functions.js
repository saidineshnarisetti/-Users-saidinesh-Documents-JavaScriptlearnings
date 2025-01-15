var greet ="Good morning"
function add(a,b){
    var greet ="Good evening"
    return a+b
}
if(1==1){
    var greet ="Good After noon!"
}
console.log(greet)

// let sum = add(5,10);
console.log(add(5,10))
// anyonymus functions 

var addition = function (c,d){ return c+d}

let sumofnumbers =  (c,d)=>c+d
console.log(sumofnumbers (10,20))
console.log(sumofnumbers (30,20))