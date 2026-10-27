for(let count =1;count <=6;count++){
    console.log("Riya Jain");
}


//calculate sum of 1 to 5 
let sum =0;
for (let i = 0; i <=10; i++) {
    sum = sum + i;
    
}
console.log( "sum=",sum);   


let j= 1;
while(j<=10){
    console.log("javascript");
    j++;
}

let l=1;
do{
    console.log("riya s jain");
    l++;
}while(l<=10);

for(let num = 0; num<=100;num ++){
    if(num%2 ===0){
        console.log("num=", num);
    }else{
        console.log("even no", num);

    }
}

//create a game where you start with any random game number 

let gameNum =30;
let userNum = prompt("Guess the game number:");

while(userNum!= gameNum){
    userNum = prompt("You entered wrong number,Guess the number");

}
console.log("Congratulations!! you enter right number");  