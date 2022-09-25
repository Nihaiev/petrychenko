/**
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
