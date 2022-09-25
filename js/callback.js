/**
<<<<<<< HEAD
 * callback
 * це функція яка повинна виконатись після того як інша функція завершила своє виконання
 */

function first() {
  setTimeout(function () {
    console.log(1);
  }, 500);
}

function second() {
  console.log(2);
}

first();
second();

function learnJS(lang, callback) {
  console.log(`Я вивчаю ${lang}`);
  callback();
}

function done() {
  console.log("Я пройшов цей урок");
}

learnJS("JavaScript", done);
=======
 * Callback функції
 * Це функція яка повинна виконатись коли перша завершила своє виконання
 *
 *
 */

function learnJS(lang, callback) {
  console.log(`i lern ${lang}`);
  callback();
}
learnJS("JavaScript", function () {
  console.log("I finish lern JS");
});
>>>>>>> f0591c99055927e569593350b84694da07f21940
