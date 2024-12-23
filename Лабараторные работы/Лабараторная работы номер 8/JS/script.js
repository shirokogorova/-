function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Генерация массива из 10 случайных чисел
let randomNumbers = [];
for (let i = 0; i < 10; i++) {
    randomNumbers.push(getRandomInt(-10, 30));
}

// Сохранить копию изначального массива
const originalNumbers = [...randomNumbers];

// Вывод изначального массива в консоль
document.getElementById('showOriginalButton').addEventListener('click', () => {
    document.getElementById('result').innerHTML = originalNumbers;
});

// Добавить обработчик события для кнопки изменения
document.getElementById('transformButton').addEventListener('click', () => {
    // Заменить отрицательные элементы их квадратами
    randomNumbers = randomNumbers.map(num => num < 0 ? num * num : num);
    
    // Обновить вывод массива в консоль
    document.getElementById('result').innerHTML = randomNumbers;
});

// Добавить обработчик события для кнопки среднего арифметического положительных чисел
document.getElementById('averagePositiveButton').addEventListener('click', () => {
    const positiveNumbers = randomNumbers.filter(num => num > 0);
    const average = positiveNumbers.reduce((sum, num) => sum + num, 0) / positiveNumbers.length;
    document.getElementById('result').innerHTML = average.toFixed(2); // округлить до 2 знаков после запятой
});

// Функция для симуляции выпадения цветов
function simulateColors() {
    const results = { red: 0, black: 0, white: 0 };
    for (let i = 0; i < 1000000; i++) {
        const randomValue = Math.floor(Math.random() * 3);
        if (randomValue === 0) results.red++;
        else if (randomValue === 1) results.black++;
        else if (randomValue === 2) results.white++;
    }
    document.getElementById('result').innerHTML = `Красный выпал ${results.red} раз.`;
}

// Добавить обработчик события для кнопки симуляции
document.getElementById('simulateButton').addEventListener('click', simulateColors);