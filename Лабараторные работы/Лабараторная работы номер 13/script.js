// example 1
const Info = Symbol('displayInfo');
//возвращает объект с 2мя свойствами
const createPerson = (name, age) => {
    return {
        name: name,
        age: age
    };
};

// Создаем объекты с использованием функции createPerson
const bankClient = createPerson("Иван", 30);
const clinicWorker = createPerson("Мария", 28);
const citizen = createPerson("Алексей", 35);

console.log(bankClient.name, bankClient.age);
console.log(clinicWorker.name, clinicWorker.age);
console.log(citizen.name, citizen.age);


//example 2

const number = +prompt('Загадайте цифру до 9', '');

switch (number) {
    case 1:
        console.log('Вы ввели число 1');
        break;
    case 2:
        console.log('Вы ввели число 2');
        break;
    case 3:
        console.log('Вы ввели число 3');
        break;
    case 4:
        console.log('Вы ввели число 4');
        break;
    case 5:
        console.log('Вы ввели число 5');
        break;
    case 6:
        console.log('Вы ввели число 6');
        break;
    case 7:
        console.log('Вы ввели число 7');
        break;
    case 8:
    case 9:
        console.log('Вы ввели число 8, а может и 9');
        break;
    default:
        console.log('Значение не соответствует верному');
}

//example 3
let min = +prompt('Введите число от 0 до 59', ''); // +"prompt" для ввода числа и преобразование в число

switch (true) {
    case (min >= 0 && min < 15):
        console.log("Первая четверть часа"); // Если min от 0 до 14, это первая четверть
        break;
    case (min >= 15 && min < 30):
        console.log("Вторая четверть часа"); // Если min от 15 до 29, это вторая четверть
        break;
    case (min >= 30 && min < 45):
        console.log("Третья четверть часа"); // Если min от 30 до 44, это третья четверть
        break;
    case (min >= 45 && min < 60):
        console.log("Четвертая четверть часа"); // Если min от 45 до 59, это четвертая четверть
        break;
    default:
        console.log("Значение не соответствует верному"); // Если min не в диапазоне от 0 до 59
}

//example 4
let str = prompt('Введите любые цифры', '');
let phoneNumber = prompt('Введите некоторое количество цифр', '');

// Проверяем первый символ с помощью switch
switch (str.charAt(0)) { // Теперь str остается строкой
    case '1':
    case '2':
    case '3':
        console.log('Первая цифра 1, 2 или 3');
        break;
    default:
        console.log('нет');
}