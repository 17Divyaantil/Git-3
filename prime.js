function checkPrime(num){
 for (let i=0;i<=num;i++){
 if (num%i){
 return true;
 }
 }
 return false;
 }
 checkPrime(13);