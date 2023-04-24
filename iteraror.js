const fizzBuzzIterator = {
  from: 1,
  to: 100,
};

//Ітератор:

fizzBuzzIterator[Symbol.iterator] = function () {
  let current = this.from; // this = fizzBuzzIterator
  let last = this.to;
  return {
    next: () => {
      if (current > last) {
        return { done: true };
      }
      let output = "";
      if (current % 3 === 0) output += "Fizz";
      if (current % 5 === 0) output += "Buzz";
      output = output || current;
      const result = {
        value: output,
        done: false,
      };

      current++;
      return result;
    },
  };
};

for (const value of fizzBuzzIterator) {
  console.log(value);
}

// Генератор
function* fizzBuzzGenerator() {
  let i = 1;
  while (i <= 100) {
    let output = "";
    if (i % 3 === 0) output += "Fizz";
    if (i % 5 === 0) output += "Buzz";
    yield output || i;
    i++;
  }
}

const generator = fizzBuzzGenerator();
for (const value of generator) {
  console.log(value);
}

//генератор рандомних чисел

function* generateRandomNumbers(max, quantity) {
  for (let i = 0; i < quantity; i++) {
    yield Math.floor(Math.random() * (max + 1));
  }
}

const randomNumbersGenerator = generateRandomNumbers(10, 5);

for (const randomNumber of randomNumbersGenerator) {
  console.log(randomNumber);
}
