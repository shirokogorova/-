 //example 1
 const arr = [1, 2, 3];
 const newArr = arr.map(item => (item + 10) * 3);
 console.log(newArr); 

 //example 2
 const year = [2006, 2000, 2012];
 const age = year.map(year => new Date().getFullYear() - year); // Вычисляем возраст для каждого года, вычитая год из текущего года, результат сохраняем в age
 console.log(age);

 //example 3
 const persons = [
    {name: 'Dmitry', age: 13, isAdmin: false },
    {name: 'Kirill', age: 11, isAdmin: false },
    {name: 'Niko', age: 88, isAdmin: true },
    {name: 'Axe', age: 99, isAdmin: true },
    {name: 'Roma', age: 66, isAdmin: true }
 ];
 const fullage = persons.filter(person => person.age >= 18); //фильтрация совершеннолетних
 console.log(fullage);

 //example 4
 const students = [
     { name: 'Ваня', scores: [2, 4, 2] },
     { name: 'Коля', scores: [4, 2, 4] },
     { name: 'Егор', scores: [5, 3, 5] }
 ];

 // Вычисляем средние оценки для каждого студента, используя метод map
 const averageScores = students.map(student => {
     // Суммируем все оценки студента с помощью reduce
     const totalScore = student.scores.reduce((sum, score) => sum + score, 0);
     // Возвращаем среднюю оценку
     return totalScore / student.scores.length;
 });
 // Выводим массив средних оценок в консоль
 console.log(averageScores);

 //example 5
 // Создаем массив строк strArray
 const strArray = ['JavaScript', 'Python', 'PHP', 'Java', 'C'];

 function mapForEach(arr, fn) {
     const newArray = [];
     for (let i = 0; i < arr.length; i++) {
         newArray.push( //Метод, который добавляет новый элемент в конец массива newArray.
         fn(arr[i]) //ызов функции обратного вызова fn, передавая ей текущий элемент массива arr (по индексу i).
     );
     }
     return newArray;
 }

 // Создаем новую функцию для определения длины строк
 const lenArray = mapForEach(strArray, function(item) {
     return item.length <= 3 ? 0 : 1; // Возвращаем 0 для строк длиной 3 символа или меньше, и 1 для остальных
 });

 // Выводим массив lenArray в консоль
 console.log(lenArray); // выводит [1, 1, 0, 1, 0]