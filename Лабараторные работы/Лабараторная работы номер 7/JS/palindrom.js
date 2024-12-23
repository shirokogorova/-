let surname = document.getElementById('name');
let textNumberOne = 'палиндром';
let textNumberTwo = 'не палиндром';
function Palindrom(){
    let surname = document.getElementById('name').value;
    for (let i=0; i<(surname.length/2); i++){
        if (surname[i]!==surname[surname.length-1-i]){
            return document.getElementById('text').innerHTML='не палиндром';
        }
    }
    return document.getElementById('text').innerHTML='палиндром';
}