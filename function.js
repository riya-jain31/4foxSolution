//function 2 numbers 

// function sum(x,y ){
//     s = x+y;
//     return s;
// }
                                                                                                                                                                                        
// let val = sum (78,90);
// console.log(val);

const sum=(a ,b) => {
    console.log(a+b);
    
};

const arrowMul = (c, d) => {
    console.log(c * d );
    
};

function countVowel (str){
    let count = 0;
    for (const char of str)
    {
        if(char === "a" || char === "e" || char ==="i" || char ==="o" || char ==="u"){
            count++;
        }
    }
    return count;
}

const countVow=(str) =>{
    let count = 0;
    for (const char of str)
    {
        if(char === "a" || char === "e" || char ==="i" || char ==="o" || char ==="u"){
            count++;
        }
    }
    return count;
}

let arr = ["nashik", "mumbai", "pune", "jalgoan"];

arr.forEach((val ,ind)=> {
    console.log(val.toUpperCase(), ind)

})
//Square of each number 
let num =[11,12,13,141,15,16,17,18,19];

num.forEach((nums) =>{
    console.log(nums*nums);

});

let array = [1,2,3,4,5,6,7,8,9,10];
let evenArr = array.filter((val)=>{
    return val %2 ===0;
})
console.log(evenArr);

//we are given of marks of student . filter out of the marks of student that scored 90 +.

let marks =[89,91,65,47,87,99,92,98];

let topper= marks.filter((val)=>{
    return val > 90;
});
console.log (topper);

//take a no n as n input from user .create an array of number from 1 to n.
let n = prompt("enter a number :");

let arr1 = [];
for(let i=1;i<=n;i++){
    arr1[i-1]=i;

}
console.log(arr1);

let add = arr1.reduce((res , curr)=>{
    return res + curr;

})
console.log("sum= ", add);

let product = arr1.reduce((res , curr)=>{
    return res * curr;
})
console.log("factor =" ,product);
