// 3. Проверка фамилии на полиндром
// Определяем стрелочную функцию для проверки, является ли фамилия полиндромом
const isPalindrome = (surname) => {
    // Разворачиваем строку и сравниваем с оригиналом
    const reversed = surname.split('').reverse().join('');
    return surname === reversed; // Возвращаем true, если фамилия полиндром
};

// Запрашиваем фамилию у пользователя
const userSurname = document.getElementById('name');

// Проверяем, является ли введенная фамилия полиндромом
if (isPalindrome(userSurname)) {
    console.log(`${userSurname} полиндром`); // Выводим результат
} else {
    console.log(`${userSurname} не полиндром`); // Выводим результат
}

// 4. Вычисление среднего значения данных в массиве
// Определяем стрелочную функцию для вычисления среднего значения массива
const average = (arr) => {
    // Суммируем все элементы массива с помощью reduce
    const total = arr.reduce((sum, num) => sum + num, 0);
    return total / arr.length;
};

// Запрашиваем данные у пользователя
let userInputNumbers = prompt('Введите числа для вычисления среднего значения (без запятых и пробелов):');
// Преобразуем введенные данные в массив чисел
let numbersArray = Array.from(userInputNumbers).map(Number);
// Проверяем, что массив не пустой
if (numbersArray.length > 0) {
    // Вычисляем и выводим среднее значение
    console.log(`Среднее значение: ${average(numbersArray)}`);
} else {
    console.log('Вы не ввели ни одного числа.');
}

// 5. Вычисление количества дней до нового года
// Определяем стрелочную функцию для вычисления количества дней до нового года
const daysUntilNewYear = () => {
    const today = new Date(); // Получаем текущую дату
    const nextYear = new Date(today.getFullYear() + 1, 0, 1); // Устанавливаем дату на 1 января следующего года
    const diffTime = nextYear - today; // Вычисляем разницу во времени
    const days = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); // Возвращаем количество дней, округляя вверх
    console.log(`до нг осталось: ${days}`); // Выводим результат в консоль
    return days;
};

// 6. Пустая стрелочная функция, возвращающая undefined
const emptyFunction = () => {};
console.log(emptyFunction());

// 7. Массив и стрелочные функции для суммирования, выявления четных и умножения на 2
let userInput = prompt('Введите числа для создания массива (без пробелов и запятых):');
const numbers = Array.from(userInput).map(Number);
const sumAll = (arr) => arr.reduce((sum, num) => sum + num, 0);
const chetnye = (arr) => arr.filter(num => num % 2 === 0);// Определяем стрелочную функцию для фильтрации четных чисел
const quadratchisla = (arr) => arr.map(num => num * 2);// Определяем стрелочную функцию для умножения каждого элемента массива на 2
console.log(sumAll(numbers));
console.log(chetnye(numbers));
console.log(quadratchisla(numbers));

// 8. Фильтр e-mail
let userEmail = prompt('Введите адрес электронной почты для фильтрации:');
const emails = ['admin@gmail.com', 'user@yandex.ru', 'test@hotmail.com']; // Пример массива e-mail
const filterEmails = (email) => emails.filter(e => e.includes(email));
console.log(filterEmails(userEmail));
// console.log(filterEmails('gmail'));
