const num = parseInt(process.argv[2]); 

if (isNaN(num)) {
  console.log("Please provide a valid number!");
  console.log("Example: node Experiment10.js 5");
  process.exit(1);
}

if (num === 0) {
  console.log("Zero has no multiplication table. Please enter a non-zero number.");
  process.exit(1);
}

function tableFor(num) {
  console.log("\nMultiplication Table using FOR loop:");
  for (let i = 1; i <= 10; i++) {
    console.log(`${num} x ${i} = ${num * i}`);
  }
}

function tableWhile(num) {
  console.log("\nMultiplication Table using WHILE loop:");
  let i = 1;
  while (i <= 10) {
    console.log(`${num} x ${i} = ${num * i}`);
    i++;
  }
}

function tableDoWhile(num) {
  console.log("\nMultiplication Table using DO-WHILE loop:");
  let i = 1;
  do {
    console.log(`${num} x ${i} = ${num * i}`);
    i++;
  } while (i <= 10);
}

tableFor(num);
tableWhile(num);
tableDoWhile(num);
