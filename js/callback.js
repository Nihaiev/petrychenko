/**
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
