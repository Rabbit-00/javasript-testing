var sum = 500; // сумма вклада
var percent = 10;  // процент по вкладу
var income = sum * percent / 100;  // доход по вкладу
sum = sum + income; // определяем новую сумму
console.log("Доход по вкладу: " + income);
console.log("Сумма вклада после первого года: " + sum);
