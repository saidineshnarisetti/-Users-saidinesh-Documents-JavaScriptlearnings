const flag = true;

if(!flag){
    console.log("This is true block")
}
else{
    console.log("This false block")
}
//While loop
let i=0;
while(i<=10)
{
    console.log("In side while loop:" + i)
    i++;
}
// do while loop

let j=0;
do{j++}
while(j>10);{
    console.log("j:" + j)

}
let n=0;
for(let k=1;k<=100;k++){
    if((k%2==0)|| (k%5==0)){
        console.log(k)
    n++
    if(n==3){
        
        break;
    }
    
    }

}