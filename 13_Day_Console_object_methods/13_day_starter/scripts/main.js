// console.log(countries);
// alert("Open the console and check if the countries has been loaded");

/*Exercises:Level 1

Display the countries array as a table */
console.table(countries);

//Display the countries object as a table
console.table(countries[0]);

//Use console.group() to group logs
console.group("Names");
console.table(countries[0]);
console.groupEnd();

//10 > 2 * 10 use console.assert()
console.assert(10 > 2 * 10, "10 is not greater than 20");

//Write a warning message using console.warn()]
console.warn("This is warning");

//Write an error message using console.error()
console.error("this is an error");

//Exercises:Level 3
//Check the speed difference among the following loops: while, for, for of, forEach

{
  console.time("For Loop");
  console.group("ForLOOP");
  for (let i = 0; i < 100; i++) {
    console.log(countries[i].population);
  }
  console.groupEnd();
  console.timeEnd("For Loop");
}

{
  console.time("while");
  console.group("WhileLoop");
  let j = 0;
  while (j !== 100) {
    console.log(countries[j].population);
    j++;
  }
  console.groupEnd("WhileLoop");
  console.timeEnd("while");
}

{
  console.time("for of");
  console.group("for ofLoop");
  for (country of countries) {
    console.log(country.population);
  }
  console.groupEnd("for ofLoop");
  console.timeEnd("for of");
}

{
  console.time("forEach");
  console.group("forEachLoop");
  countries.forEach((country) => {
    console.log(country.population);
  });
  console.groupEnd("forEachLoop");
  console.timeEnd("forEach");
}
{
  console.time("map");
  console.group("mapLoop");
  countries.map((country) => {
    console.log(country.population);
  });
  console.groupEnd("mapLoop");
  console.timeEnd("map");
}

/* For country
main.js:31 ForLOOP
main.js:36 For Loop: 8.333740234375 ms
main.js:41 WhileLoop
main.js:48 while: 10.40234375 ms
main.js:53 for ofLoop
main.js:58 for of: 29.0419921875 ms
main.js:63 forEachLoop
main.js:68 forEach: 31.586669921875 ms
main.js:72 mapLoop
main.js:77 map: 27.610107421875 ms
*/

/*  For country.population
main.js:31 ForLOOP
main.js:36 For Loop: 4.34912109375 ms
main.js:41 WhileLoop
main.js:48 while: 4.579833984375 ms
main.js:53 for ofLoop
main.js:58 for of: 10.47802734375 ms
main.js:63 forEachLoop
main.js:68 forEach: 11.64111328125 ms
main.js:72 mapLoop
main.js:77 map: 12.357177734375 ms
 */
