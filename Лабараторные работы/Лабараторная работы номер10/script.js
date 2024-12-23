// Функция для проверки палиндрома
function isPalindrome(str) {
    // Удаляем все не-буквенные символы и приводим к нижнему регистру
    str = str.toLowerCase().replace(/[^а-яa-z0-9]/g, '');
    // Сравниваем строку с ее перевернутой версией
    return str === str.split('').reverse().join('');
}

// Функция-обработчик для проверки палиндрома
function checkPalindrome() {
    const input = document.getElementById('palindromeInput').value;
    const result = document.getElementById('palindromeResult');
    
    if (isPalindrome(input)) {
        result.textContent = `"${input}" является палиндромом`;
    } else {
        result.textContent = `"${input}" не является палиндромом`;
    }
}

// Функция для обработки массива
function processArray() {
    // Создаем массив из 15 случайных чисел от -100 до 100
    const arr = Array.from({length: 15}, () => 
        Math.floor(Math.random() * 201) - 100
    );
    
    const result = document.getElementById('arrayResult');
    
    // Показываем исходный массив
    result.innerHTML = `Исходный массив: [${arr.join(', ')}]<br>`;
    
    // Обрабатываем массив
    const processedArr = arr.map(num => 
        num < 0 ? num * num : num
    );
    
    // Показываем результат
    result.innerHTML += `Обработанный массив: [${processedArr.join(', ')}]`;
}

// Класс для работы с пользователем
class User {
    constructor(name) {
        this.username = name;
    }

    displayName() {
        const userResult = document.getElementById('userResult');
        userResult.textContent = `Имя пользователя: ${this.username}`;
    }
}

// Функция для создания и отображения пользователя
function createUser() {
    const nameInput = document.getElementById('userNameInput').value;
    if (nameInput.trim() === '') {
        alert('Пожалуйста, введите имя пользователя');
        return;
    }
    
    const user = new User(nameInput);
    user.displayName();
}

// Класс для переворачивания имени
class NameReverser {
    constructor(name) {
        this.name = name;
    }

    reverse() {
        return this.name.split('').reverse().join('');
    }

    displayReversedName() {
        const reverseResult = document.getElementById('reverseResult');
        const reversedName = this.reverse();
        reverseResult.textContent = `Перевернутое имя: ${reversedName}`;
    }
}

// Функция для создания экземпляра класса и переворота имени
function reverseName() {
    const nameInput = document.getElementById('reverseNameInput').value;
    if (nameInput.trim() === '') {
        alert('Пожалуйста, введите имя');
        return;
    }
    
    const reverser = new NameReverser(nameInput);
    reverser.displayReversedName();
}
