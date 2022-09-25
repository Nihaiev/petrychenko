/**
 * Методи і властивості рядків та чисел
 *
 * Методи - це допоміжні функції
 * Властивості - це допоміжні значення
 */

const str = "tEst";
const arr = [1, 2, 3];

console.log(str.length); //length це часто використовувана властивість для того щоб отримати довжину рядка
console.log(arr.length); // так і довжину масиву

/**
 * Зверніть увагу що коли використовуємо властивіть то записуємо через крапку .
 * а Методи уже будуть викликатись
 * краще за все читати про методи/властивості на MDN
 */

console.log(str[2]); // звертаємось через індекс

// методи зміни регістрів
console.log(str);
console.log(str.toLocaleUpperCase());
console.log(str.toLocaleLowerCase());

// пошук по рядку, цей методи інколи використовується щоб визначити чи дійсно є пошукове значення
const fruit = "Some fruit";

console.log(fruit.indexOf("fruit"));

/**
 * Метод slice();
 */

const logg = "Hello world";

console.log(logg.slice(6));

/**
 * Числа Math
 */

const num = 12.2;
console.log(Math.round(num)); // заокруглення чисел

/**
 * metod parseInt
 */
const test = "12.2px";
console.log(parseInt(test));
console.log(parseFloat(test));
