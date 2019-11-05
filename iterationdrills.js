12. 
 1. 
function countingSheep(num){ 
    let i = 0; 
    while (i < num){ 
        i++; 
        console.log(`${i}: sheep have jumped over the fence.`);

} console.log('All sheep have jumped over the fence.'); }

countingSheep(5)

2. 
function powerCalculator(base, exponent){

    if (exponent >= 0){
        return (Math.pow(base, exponent));
    }
    else{
        return 'exponent should be >= 0'; 
    }
}
//another solution
function powerCalculator(base, exp){ 
    let i; 
    let total = base; 
    if (exp <= 0){ 
        return 'invalid state'; 
    } 
        for (i = 1; i < exp; i++){ 
            total = total * base; 
        } 
        return total; 
    } 
console.log(powerCalculator(10,-6));

3.

function reverseString(string){
    let newStr = "";
    for( let i= string.length-1; i>=0; i--){
      newStr += string[i];
    }
    
    return newStr;
  }
  
  
  console.log(reverseString('Hello'));

  4. 

  function nTriangle(num){
    let total = 0;
    if (num === 1){
    return num;
  }
    for(let i = 0; i < num; num--){
      total = total + num
    }
    return total;
  }
  
  nTriangle(3);

5. 
  function stringSplitter(str, sep){
    let chunk = '';
    let solution = [];
    do{
      if(str[0] != sep){
        chunk = chunk + str[0];
        str = str.slice(1);
      } else {
        solution.push(chunk);
        chunk = '';
        str = str.slice(1);
      }
      if (!str.length){
        solution.push(chunk);
      } 
    }
    while(str.length > 0);
    return solution;
    }
  
    console.log(stringSplitter('11/22/33/3', '/'));

6.

function fibonacci(n){
    seed = [1, 1];
    if(n === 1){
      return [1];
    }
    if(n === 2){
      return seed;
    }
    for(i = 2; i < n; i++){
      seed.push(seed[i-1]+seed[i-2]);
    }
    return seed;
  }
  
  console.log(fibonacci(10));

  7.

function factorial(num){
    let fac =1;
    for(let i=num; i>0; i--){
      fac *= i;
    }
    return fac;
  }
  
  
  console.log(factorial(3));

  



