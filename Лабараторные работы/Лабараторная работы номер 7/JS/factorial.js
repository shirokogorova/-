function factorial(){
    let num = Number(document.getElementById("num").value);
    let result = 1;
    for (let i=2; i<=num; i++){
        result*=i;
    }
    document.getElementById("result").innerHTML=result;
}