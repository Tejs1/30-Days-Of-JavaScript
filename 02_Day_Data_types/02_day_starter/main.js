// this is your main.js script

//Generate a random number between 0 and 255 inclusively.
const number0_255 = [];
for (let index = 0; index < 1000; index++) {
  const num = Math.floor(Math.random() * 256);
  number0_255.push(num);
}
console.log(Math.max(...number0_255), Math.min(...number0_255));

/*Use console.log() and escape characters to print the following pattern.
   1 1 1 1 1
   2 1 2 4 8 
   3 1 3 9 27
   4 1 4 16 64
   5 1 5 25 125  
*/

for (let i = 1; i < 6; i++) {
  console.log(
    `${i}\t` +
      Math.pow(i, 0) +
      `\t` +
      Math.pow(i, 1) +
      `\t` +
      Math.pow(i, 2) +
      `\t` +
      Math.pow(i, 3)
  );
}
//cheking test
