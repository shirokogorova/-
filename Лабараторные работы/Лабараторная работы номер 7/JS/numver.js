let num = Number(document.getElementById('name').value);
function counter(){
    let arr=[];
    for (let i=1; i<num; i++){
        arr.push(i);
    }
    document.getElementById('result').innerHTML=arr;
}