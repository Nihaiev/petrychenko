/**
 * Умови
 *
 */

// if () {

// } else {

// }

const num = 50;

if (num < 49) {
  console.log("Error");
} else if (num > 100) {
  console.log("Багато");
} else {
  console.log("Ок!");
}

//тернарний оператор

num === 50 ? console.log("Ok") : console.log("Error");

// Свіч конструкція (конструкція switch завжди йде на строге порівняння)
// const num = 50;
switch (num) {
  case 49:
    console.log("Неправильно");
    break;
  case 100:
    console.log("Неправильно");
    break;
  case 60:
    console.log("в точку");
    break;
  default:
    console.log("Не в цей раз");
    break;
}
