function findPrime() {
  const totalInput = parseInt(prompt("enter the total input"));

  const startTime = performance.now();

  for (let i = 1; i <= totalInput; i++) {
    const num = prompt("enter number");

    let count = 0;

    for (let div = 2; div * div < num; div++) {
      if (num % div === 0) {
        count++;
        break;
      }
    }

    count === 0 ? console.log("prime") : console.log("not prime");
  }

  const EndTime = performance.now();
  console.log(EndTime - startTime);
}

// findPrime();

// Febonacci-no. sequence:--

function feboNum(num) {
  let a = 0;
  let b = 1;
  let arr = [];
  for (let i = 1; i <= num; i++) {
    arr.push(a);
    let c = a + b;
    a = b;
    b = c;
  }
  console.log(arr);
}

feboNum(10);

// count digit in a number:--

function countDigit(num) {
  let count = 0;
  while (num !== 0) {
    num = parseInt(num / 10);
    ++count;
  }
  console.log(count);
  return count;
}

// countDigit(300)


// Digits of a number:---

function digitOfNum(num){
  let nod = 0;
  let temp = num;
  while(temp !==0){
    temp = parseInt(temp/10)
    nod++
  }
  let div = Math.pow(10,nod-1);
  // jabtak divisor zero nahi hoga tab tak loop chalega 
  while(div !== 0 ){
    // quotent value
    const q = parseInt(num/div);
    console.log(q);

    // reminder values
    num = num % div
    div = parseInt(div / 10)
  }

}
digitOfNum(7600)

console.log("next solution:----");

// Reverse Number:---

function reverseNum(num){
  while(num > 0){
    let dig = num % 10
    num = parseInt(num /10)
    console.log(dig);
  }
  
}

reverseNum(54321)

// Inverse of a number:--

// --> The ineverse of the number is defined as the number created by interchanging the face value and index of digit from 1 to 5.
// valid num:-- 624135,81456273,426135 etc
// invaild num:-- 139,7421357.

function inverseOfNum(){

}
