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

// count digit in a number
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

// 