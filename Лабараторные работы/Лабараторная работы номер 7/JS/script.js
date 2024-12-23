const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', event => {
        if (event.target.id === 'btn1') {
            document.location.replace("http://127.0.0.1:5500/Ridles/second.html")
        }
        else{
            alert('Ответ не верный')
        }
    });
});