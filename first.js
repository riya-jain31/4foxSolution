const student= {
    fullName :"Riya jain",
    age : 24,
    cgpa : 8.2,
    collageName : "raisoni",
    isPass : true
};
student["age"] = student ["age"] + 1;
console.log(student.age);

const product={
    pName: "Ball pen",
    rating: 4,
    offer: 25 ,                                                                                                                                                                       
    price : 250

};
console.log (product.price);

const profile ={
    userName :" Riya Jain",
    followers: 1235,
    isFollow: true,
    Gmail : "abcd@gmail.com"
}; 
console.log(profile.userName);

let a= 3;
let b = 25;
console.log ("a = ",a ,"& b =", b);
console.log ("a + b =" , a + b ) ;
console.log ("a - b =" , a - b ) ;
console.log ("a * b =" , a * b ) ;
console.log ( "a / b =", a / b );


let c=5;
let d=6;

console.log( "c=" ,c ,"& d = ",d);
console.log( "c + d =" , c + d );

//conditional statement 

let mode = "dark";
let color;
if (mode === "dark"){
    color = " black";
}
if (mode === " light"){
    color =" white";
}

console.log (color);

//even and odd no using if else statement
let num = 25;
if (num%2 ===0){
    console.log("even");
}else{
    console.log("odd no");   
}

let age =60;
let result = age >=18 ? "Adult" : " Not Adult ";
console.log(result);


let no = prompt ("Enter a number");

if (no % 5===0){
    console.log(no, "is multiple of 5");}
else { 
    console.log(no, "is not multiple of 5");
}

//else if statement 

let score = 75;
let grade;
if (score >= 90 && score <= 100){
    grade ="A";
}else if (score >= 70 && score <= 89){
    grade = "B";
}else if ( score >= 60 && score <= 69){
    grade = "C";
}else if(score >= 50 && score <= 59){
    grade =" D";
}else if (score >= 0 && score <= 49){
    grade= "F";
}
console.log("According to your score your grade was ", grade);