function fibonacci(num) {
  let sequence = [0,1];
  let newNum = 0;
  for (let i = 0; i <= num; i++){
    newNum = sequence[i] + sequence[i+1];
    sequence.push(newNum);
  }
 
  return sequence[num]
}
console.log(fibonacci(7))
module.exports = fibonacci;
