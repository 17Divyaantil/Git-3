
function checkPrime(number){
let factors=0;
 for (let i=0;i<=number;i++){
 if (number%i==0){
factors++;    }
}
if (factors ==2){
 return true;
 }

 return false;
 }
 let answer= checkPrime(13);
if( answer==true){
consoole.log("Prime Number");
} else {
console.log("Not a Prime Number");
}
